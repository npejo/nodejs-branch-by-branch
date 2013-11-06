## Guide for the (master) "Initialization" branch
1.  Create new folder for our project

2.  Install expressjs globally `npm install -g express`, we will use express to initialize our application

3.  Run `express` in the project root folder. This will initialize the default structure of our application

4.  Now we should update the _package.json_ file and . You can do that manually, if you already know how to do that.
    Or you can run `npm init` and this will guide you through the default options of the _package.json_ file.

5.  Once our _package.json_ file is ready, run `npm install` to install the defined dependencies.
    After the installation is finished, we should have the default expressjs project setup. Run `node app.js` to run the app
    and check it in the browser on `http://localhost:3000`. 3000 is the default port.

6.  If we run our app with `node app.js`, every time we make change in our application, we will have to manually restart it which can be boring during development.
    For that we are going to use 'nodemon' which will reload our app on each change.

        `npm install nodemon --save-dev`

    --save-dev option tells npm to update our development dependencies in _package.json_

7.  Now make npm script that will start our app using nodemon. It should be placed in _package.json_ as part of the `scripts` object.

        "start": "NODE_ENV=development ./node_modules/.bin/nodemon app.js"

    Type `npm start` to run the app in _development_ mode with nodemon.

That is all for the Initialization branch, checkout to the `app-config` branch to see the updated scaffolding and configuration of the application.