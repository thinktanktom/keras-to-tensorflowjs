var model = undefined;
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const classifierElement = document.getElementById('classifier');
const loaderElement = document.getElementById('loader');
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}
document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});
async function initialize() {

    model = await tf.loadLayersModel('trained-model/model.json');
    classifierElement.style.display = 'block';
    loaderElement.style.display = 'none';

    document.getElementById('predict').addEventListener('click', () => predict());

}

async function predict () {

    const imageElement = convertCanvasToImage(canvas)
    let tensorImg = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
    prediction = await model.predict(tensorImg).data();

    if (prediction[0] == 0) {

        alert("You uploaded a cat!");

    } else if (prediction[0] == 1) {

        alert("You uploaded a dog!");

    } else {
        alert("Hummm... a weird error occurred.");
    }

}



initialize();