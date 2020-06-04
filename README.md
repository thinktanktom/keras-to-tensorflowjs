# How to serve a pre-built keras model on your local server

This project showcases how one can import a pre-trained keras model into Tensorflow.js. In this example I will be using a Dog Vs Cat classifier. I have split this project into three parts:


- Building the model.
- Importing it to Tensorflow.js.
- Creating the frontend.
- Hosting it on a local server.


## Building the model
 
You can find an appropriate guide to build a Dog Vs Cat classifier [here](https://www.kaggle.com/c/dogs-vs-cats/notebooks).


Try to keep the model as lightweight as possible else it might take a toll on the loading time.

## Importing it to Tensorflow.js

The guide for this step can be found [here](https://www.tensorflow.org/js/tutorials/conversion/import_keras).

I recommend you create a new folder to contain your imported model.

I did run into a complication while attempting to install tensorflowjs. I'll list the solution for reference purposes.


Issue: _tensorflow 1.8.0 has requirement tensorboard<1.9.0,>=1.8.0, but you'll have tensorboard 1.6.0 which is incompatible._


Solution: Make sure you have Anaconda installed. If you have a virtual environment activated, deactivate it. Then run the following commands:

`conda create -n tensorflow python = your_python_version`

`activate tensorflow`

`pip install --upgrade tensorflow`

`pip install tensorflowjs`

## Creating the Web Page

The web page can be created in different ways. I used HTML and Javascript which is considered the norm.

## Hosting it on a local server

To host it on a local server simply access the project directory through the terminal and use the following command: 

`python3 -m http.server`

By default it should utilise localhost:8000 but you can change the port number by adding a number to the command.

`python3 -m http.server #portnumber`