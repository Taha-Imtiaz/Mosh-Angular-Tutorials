// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // add firebase object
  firebase: {
    apiKey: "AIzaSyB_WRz-U734QcP2BLJ37ZDfMuTIlRTGQbA",
    authDomain: "oshop-74448.firebaseapp.com",
    projectId: "oshop-74448",
    storageBucket: "oshop-74448.appspot.com",
    messagingSenderId: "693488861322",
    appId: "1:693488861322:web:e0a7dee23f8ff341942d73" 
  }
};
