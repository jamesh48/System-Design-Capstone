# FEC - Review Service for Steam

> This proxy server repo is a part of a larger service oriented architecture.  Several services own their own data and can only be accessed by the proxy server.  Users connections to individual services are routed through the proxy server.

>The react code for the proxy server is limited to a header and footer component.  It will still require webpack bundling for local development and Grunt for automatic depoyment to an AWS S3 bucket.

>Docker is used for deoployment of the Express App to an AWS EC2 instance

## Table of Contents

1. [Technology](#Technology)
1. [Architecture](#Architecture)
1. [Related Projects](#RelatedProjects)
1. [Requirements](#requirements)
1. [Installation](#Installation)
1. [Development](#development)
1. [Deployment](#deployment)
1. [ReviewApp](#ReviewApp)
1. [Testing](#Testing)

## Technology

![Untitled presentation (3)](https://user-images.githubusercontent.com/71040019/115333143-ff237680-a14d-11eb-9d00-12b2e1963bdf.jpg)

## Architecture

Web Browsers do not directly interact with the individual services.  All traffic is routed through the proxy server.  Below is a web sequence diagram showing the interaction between proxy server and one of the services (review).

![FEC (4)](https://user-images.githubusercontent.com/71040019/115333049-d56a4f80-a14d-11eb-90f6-c4c63b9dfd1f.png)

## Related Projects

  My Review Service:
  - https://github.com/rpt26-fec-pathfinder/tim-review-service

  Other Services:
  - https://github.com/rpt26-fec-pathfinder/anthony-photo-gallery-service
  - https://github.com/rpt26-fec-pathfinder/james-metadata-service
  - https://github.com/rpt26-fec-pathfinder/calvin-more-like-this-service


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Docker
- MySQL

## Installation


```
$ npm install
```



## Development

In seperate dos windows:

```
$ npm run start-dev
$ npm run react-dev
```

## Deployment

### Docker Deployment for Server

While connected to the AWS EC2 instance via SSH
```
$ docker build -t timdanderson1/fecproxy:1.9 .
$ docker run --restart always -p 3000:3000 timdanderson1/fecproxy:1.9
```
### Grunt / AWS S3 Deployment for Front End
For automatic bundle, uglify and upload run:
```
$ grunt deploy
```

## ReviewApp

The review app uses react and styled components.

