// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@angular/fire/app";

export const environment = {
  production: false,
  API_KEY:"706678183a3adde83b3c45b0eeb7cf3d",
  API_URL:"https://api.openweathermap.org/data/2.5/",

  firebase: {
    apiKey: "AIzaSyDnlUpnILRyIPW4g8q2wqgANGw7twV8KO8",   
    authDomain: "proyectoapp-28bb2.firebaseapp.com",   
    projectId: "proyectoapp-28bb2",   
    storageBucket: "proyectoapp-28bb2.appspot.com",   
    messagingSenderId: "1019149935467",   
    appId: "1:1019149935467:web:ea63427f71b7512455222e",   
    measurementId: "G-XK014Y9TD7"
},
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
