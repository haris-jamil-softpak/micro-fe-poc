Microfrontend POC project which uses angular react in same application using Single-SPA
(https://single-spa.js.org/)

to run app follow the below steps:

1: clone project in to your local directory
2: go in each folder and run npm install
3: go in each project and run project's respective serve command as described below

origin > npm run start
angular-micro-fe > npm run serve:single-spa:angular-micro-fe
react-micro-fe > npm run start:standalone
react-navigation > react-micro-fe > npm run start:standalone

After all applications are running, go to localhost:9000
