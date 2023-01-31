// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries  https://sendiate-app-default-rtdb.firebaseio.com

// Your web app's Firebase configuration  

export const environment = {
  firebase: {
    apiKey: "AIzaSyCTd9drH-CSYX8RjYIt9Vsz2-EcKNiYfv0",
    authDomain: "sendiate-app.firebaseapp.com",
    databaseURL: "https://uber-clone-3da42-default-rtdb.firebaseio.com/",
    projectId: "sendiate-app",
    storageBucket: "sendiate-app.appspot.com",
    messagingSenderId: "13295298952",
    appId: "1:13295298952:web:204a1a28fa97b9b811723d",
    measurementId: "G-Y4L0RWJRVR"
  },
  production: false
};

