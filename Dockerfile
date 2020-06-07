FROM python:3.9-rc-alpine3.12
WORKDIR /tensorflowjs-cat-vs-dog    
ADD . /tensorflowjs-cat-vs-dog 
CMD [ "python3", "-m", "http.server"]



