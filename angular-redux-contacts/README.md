# Contacts
Contacts - An Angular Redux application with Express backend

## Setting up the development environment

Install Node.js from https://nodejs.org <br>
Download 32-bit or 64-bit binary depending upon the architecture of the system.

Install Angular CLI using which we will start building the Contacts application.
```sh
npm install –g @angular/cli
```

Generate the basic code template which we will modify to add the features required for the Contacts application.
```sh
ng new contacts
```

Change to the directory contacts. Check if the setup is proper, by running the basic application.
```sh
npm start
```

Install the modules for redux integration.
```sh
npm install –S redux
npm install –S redux-thunk
npm install –S @angular-redux/store
```

Create a directory "client" under "contacts" and move the entire folder structure from contacts to client so that the client folder contains the code for the client side Angular application.

To proxy API requests during development and avoid CORS issues, modify the "start" script in package.json present in client folder with the following command.
```js
"start": "ng serve --proxy-config proxy.conf.json"
```

Create the file "proxy.conf.json" under client folder with the following content.
```js
{
    "/api": {
      "target": "http://localhost:3000",
      "secure": false
    }
}
```

Create a directory "server" under "contacts".  From this folder, execute npm init and install express and body-parser module to serve the persistent data required for the Contacts application.
```sh
npm init –y
npm install –S express
npm install –S body-parser
```

Add the "start" setting under "scripts" in package.json present in server folder with the following command so that we can run the Express server application using "npm start".
```js
"start": "node server.js"
```

## Running the application
Go to Node.js command prompt.

Change directory to contacts/server. Start the Server.
```sh
npm start
```

Change directory to contacts/client. Start the Angular application Contacts.
```sh
npm start
```
This will start the application and display the Contacts information. We can now add and delete contacts.
