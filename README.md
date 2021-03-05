# Hello-Cloud-World, This is Doodle Chat! 
#### "Scribblers and Doodlers Unite!"
🖌 Doodle Chat! 🎨

  ![inkfinite_graphite](https://media.giphy.com/media/WS6CDvvyNDrhZRFBtT/giphy.gif)
  
  ![Status](https://img.shields.io/badge/status-active-success.svg)
  ![CI to Docker Hub](https://github.com/cgloker/Hello-Cloud-World/actions/workflows/main.yml/badge.svg)
  ![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
---
<p align="center"> .
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## Project Setup

Work in teams to build and deploy your first containerised application to the Cloud!

**<b>Goals for the week</b>**
Can you, with only a specification to guide you, work as part of a team to build and deploy a containerised web app?
Finally, you should be also able to understand what the following concepts are and in which ways they are helpful for applications running on the cloud: `logging` and `telemetry`

## 🧐 About <a name = "about"></a>

One member in your group, create a GitHub repo for your `Hello Cloud World!` project.
Add the other members of your group as collaborators.
Create a simple `Node.js` project using `Express`. The idea is for you to choose what you would like to render on the page and see on the web when your application is on the cloud. Choose something that you'd like to show to your friends!

## 🏁 Getting Started <a name = "getting_started"></a>
FORMULAS

### Prerequisites
What things you need to install the software and how to install them.

- Embedded below is essentially the simplest **Express app** you can create. It is a single file app — not what you’d get if you use the Express generator, which creates the scaffolding for a full app with numerous JavaScript files, Jade templates, and sub-directories for various purposes. 

- As for planning, as a team, we all agreed on a creating something fun, engaging, and interactive. We were also concerned with time and the amount of concepts we'll  be squeezing in. We agreed to a simple MVP ( Minimal Viable Product) while we reseached about `containers`, `telemetry`, `logging`, and the cloud.
- [Express](https://expressjs.com/en/starter/hello-world.html)
   
```
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(__dirname + '/public')); // tells express ot look at everything in the public folder

// renders the index.html (homepage)
app.get('/', (req, res) => {
  res.sendFile('index.html');
  //res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

We then set up the **Docker file**: 
Please follow tutorial here,[docker](https://docs.docker.com/get-started/)

Create the **Dockerfile**:
```
// tells Docker what base image we would like to use for our application.
Docker images can be inherited from other images. Therefore, instead of 
creating our own base image, we’ll use the official Node.js image that 
already has all the tools and packages that we need to run a Node.js application. //
FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /Hello-Cloud-World
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
# The COPY command takes all the files located in the current directory and copies them into the image.
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

### Installing
How to get **AWS Elasticbeanstalk** up and running.
# Getting started using Elastic Beanstalk<a name="GettingStarted"></a>

To help you understand how **AWS Elastic Beanstalk** works, this tutorial walks you through creating, exploring, updating, and deleting an **Elastic Beanstalk** application\. It takes less than an hour to complete\. 

There is no cost for using **Elastic Beanstalk**, but the AWS resources that it creates for this tutorial are live \(and don't run in a sandbox\)\. You incur the standard usage fees for these resources until you terminate them at the end of this tutorial\. The total charges are typically less than a dollar\. For information about how to minimize charges, see [AWS free tier](https://aws.amazon.com/free)\. 

**Topics**
+ [Setting up: Create an AWS account](#GettingStarted.Setup)
+ [Step 1: Create an example application](GettingStarted.CreateApp.md)
+ [Step 2: Explore your environment](GettingStarted.Explore.md)
+ [Step 3: Deploy a new version of your application](GettingStarted.DeployApp.md)
+ [Step 4: Configure your environment](GettingStarted.EditConfig.md)
+ [Step 5: Clean up](GettingStarted.Cleanup.md)
+ [Next steps](GettingStarted.Next.md)

## Setting up: Create an AWS account<a name="GettingStarted.Setup"></a>

If you're not already an AWS customer, you need to create an AWS account\. Signing up enables you to access Elastic Beanstalk and other AWS services that you need\.

**To sign up for an AWS account**

1. Open the [Elastic Beanstalk console](https://console.aws.amazon.com/elasticbeanstalk), and in the **Regions** list, select your AWS Region\.

1. Follow the instructions shown\.

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>
Explain how to run the automated tests for this system.

### Break down into end to end tests
Explain what these tests test and why


### And coding style tests
Explain what these tests test and why

```
-------------------------------------------|-----------------------|
docker run -dp 3000:3000 hello-cloud-world | Runs code             |
-------------------------------------------|-----------------------|
   docker ps (lists)                       |    Lists              |
-------------------------------------------| ----------------------|     
    docker ps -a                           |  (lists all commands) |
-------------------------------------------|-----------------------|

For a full list of commands visit: [docker cheat sheet](https://github.com/wsargent/docker-cheat-sheet)


```
** Dont forget to turn off/stop the container images when running, deleting, adding or editing files.

Please find DevOps cheat sheets for the command line here: 
```
{
    "AWSEBDockerrunVersion": "1",
    "Image": {
        "Name": "cgloker/hello-cloud-world-v3"
    },
    "Ports": [
        {
            "ContainerPort": "3000"
        }
    ]
}
```

## 🎈 Usage <a name="usage"></a>
Bootstrap 4 - 'Sketchy'
docker desktop
dockerfile
GitHub Actions - Docker and Node.Js Packages
Docker Github Actions - BuildX
CSS
HTML
Jquery
ElasticBeanstalk(AWS)



## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>
- [Express](https://expressjs.com/en/starter/hello-world.html) - Web/Server Framework
- [docker](https://docs.docker.com/get-docker/) - Server Framework
- [Bootstrap](https://bootswatch.com/sketchy/) - Some modals We took for Styling
- [NodeJs](https://nodejs.org/en/) - Server Environment
- **DEPLOYED**
- [EBS](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html) - Cloud

## ✍️ Authors <a name = "authors"></a>
- [@Cintia](https://github.com/cgloker)
- [@Tuyet](https://github.com/toowee-le)
- [@Blank-21](https://github.com/Blank-21)
- [@Ghostglass](https://github.com/Ghostglass)


## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Hat tip to anyone whose code was used
- Inspiration
- References
