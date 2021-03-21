# BestCloud Academy Case Study

## _Anıl Eren ÇELİK_
#
## Installation Variables
You can set custom webhook url to /alert endpoint. In project file path create a new file ".env" and you can add this line
```sh
touch .env 
```
> webhook=YOUR_WEBHOOK_URLS_HERE


#
## Building Dockerfile
You can create docker images. In project directory

```sh
docker build -t case-study . 
```

You can check building is correctly. You must be see case-study in images
```sh
docker images
```

After that you can run images on docker. You can change port number if you don't want use 2900

```sh
docker run -p 2900:3000 -it case-study
```
If you want detached mode add -d parameters 
```sh
docker run -d -p 2900:3000 -it case-study
```


It's done check <br/> https://localhost:2900

#

After commiting master branch 
> Docker image is built automatically in a few minutes and it is run from port 80 on amazon ecs servers.

You can check in <br/>

http://ec2-3-10-190-174.eu-west-2.compute.amazonaws.com/
