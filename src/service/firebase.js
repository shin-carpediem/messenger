import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import "firebase/firestore";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
enableIndexedDbPersistence(db);
// const analytics =
getAnalytics(app);
// const fireStore =
getFirestore(app);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      // const credential = GoogleAuthProvider.credentialFromResult(res);
      // const token = credential.accessToken;
      // const user = res.user;
      console.log(res.user);
    })
    .catch((err) => {
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // const email = err.email;
      // const credential = GoogleAuthProvider.credentialFromError(err);
      console.log(err.user);
    });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
