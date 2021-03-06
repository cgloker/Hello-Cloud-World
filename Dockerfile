# tells Docker what base image we would like to use for our application.
# Docker images can be inherited from other images. Therefore, instead of 
# creating our own base image, we’ll use the official Node.js image that 
# already has all the tools and packages that we need to run a Node.js application.
FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /Hello-Cloud-World
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
# The COPY command takes all the files located in the current directory and copies them into the image.
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]