# BestCloud Academy Case Study

## _Anıl Eren ÇELİK_

## Installation Variables
You can set custom webhook url to /alert endpoint. In project file path create a new file ".env" and you can add this line
```sh
touch .env 
```
> webhook=YOUR_WEBHOOK_URLS_HERE



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

It's done check <br/> https://localhost:2900