# Simple Employee Management Django + React

Carry out simple employee management (CRUD). using Django as Backend and React as Frontend



## Prerequisites
To setup your local environment, you need install Docker Engine and docker-compose. You can follow the instructions [here](#How-to-install-Docker) to install.

### How to install Docker

Docker Engine is available on a variety of [MacOS](https://docs.docker.com/docker-for-mac/install/)

### How to install docker-compose

Docker compose is available on [MacOs](https://docs.docker.com/compose/install/)


### Running services

If you have already set up your local environment and have a **.env** file with the development variables set, this command builds the image  services:

```shell
$ docker-compose up -d
```
  - [http://127.0.0.1:8000](http://127.0.0.1:5000) is the Django app
  - [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React app



## How to rebuild the docker image

In case you want the changes you have been testing to remain permanently in a new docker image you can rebuild the image, run this command:

```shell
$ docker-compose build
$ docker-compose up -d
```

After the build, you can remove the previous image with:

```shell
$ docker image prune -f
```

## Container shell access 

The docker exec command allows you to run commands inside a Docker container. The following command line will give you a bash shell inside your containers: `docker exec -it <container_name> <command>`
