# firebase Setup
```
npm install firebase
```
## `.env.local`
```
REACT_APP_apiKey=AIzaSyA1sYxvatZSXm6oHW_9UZ7vKdFc9fM-Mkw
REACT_APP_authDomain=practice-firebase-name.firebaseapp.com
REACT_APP_projectId=practice-firebase-name
REACT_APP_storageBucket=practice-firebase-name.appspot.com
REACT_APP_messagingSenderId=41444968529
REACT_APP_appId=1:41444968529:web:a21d42a6cd15e2f69d1070


REACT_APP_imgbb_key=b48bac8036e837af62ebb46276d3838d
```
## `simplified .env.local+`
```
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```
## `firebase.config.js`
```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export default app;