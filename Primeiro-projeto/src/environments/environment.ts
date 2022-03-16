// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAv3T11YMdrN-CTeUbp9kuMJf_gN4oFMr8",
    authDomain: "cursoudemybanco.firebaseapp.com",
    projectId: "cursoudemybanco",
    storageBucket: "cursoudemybanco.appspot.com",
    messagingSenderId: "667450032179",
    appId: "1:667450032179:web:f45d63a544b838fe246346",
    measurementId: "G-2WHWGF0W46"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


//codigo do firebase do cursoUdemy

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAv3T11YMdrN-CTeUbp9kuMJf_gN4oFMr8",
//   authDomain: "cursoudemybanco.firebaseapp.com",
//   projectId: "cursoudemybanco",
//   storageBucket: "cursoudemybanco.appspot.com",
//   messagingSenderId: "667450032179",
//   appId: "1:667450032179:web:f45d63a544b838fe246346",
//   measurementId: "G-2WHWGF0W46"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
