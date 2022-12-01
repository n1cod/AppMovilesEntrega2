// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@angular/fire/app";

export const environment = {
  production: false,
  API_KEY:"706678183a3adde83b3c45b0eeb7cf3d",
  API_URL:"https://api.openweathermap.org/data/2.5/",

  firebase: {
  apiKey: "AIzaSyBvnyvwZKDBsYVt4g1c5VqBSrZT7-kwuuk",
  authDomain: "tellevo-ortiz-m.firebaseapp.com",
  projectId: "tellevo-ortiz-m",
  storageBucket: "tellevo-ortiz-m.appspot.com",
  messagingSenderId: "978654870759",
  appId: "1:978654870759:web:e22c6ec9e8fac189887642",
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
