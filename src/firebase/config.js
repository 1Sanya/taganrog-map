import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const width = window.innerWidth;

const firebaseConfig = {
  apiKey: "AIzaSyCVl9VtDQWsZhN9--tB5bhKTz2zE7XtROQ",
  authDomain: "taganrog-map.firebaseapp.com",
  projectId: "taganrog-map",
  storageBucket: "taganrog-map.appspot.com",
  messagingSenderId: "85395453188",
  appId: "1:85395453188:web:0b7db9c3127488493b8c51",
};

const firebaseConfigMobile = {
  apiKey: "AIzaSyAtsjeEAiaOgRfOw_lHtvLgBOtA3EJ4n1w",
  authDomain: "taganrog-map-mobile.firebaseapp.com",
  projectId: "taganrog-map-mobile",
  storageBucket: "taganrog-map-mobile.appspot.com",
  messagingSenderId: "713065896797",
  appId: "1:713065896797:web:a3f04121927ab767f9e6b4",
};

if (firebase.apps.length === 0) {
  width > 768
    ? firebase.initializeApp(firebaseConfig)
    : firebase.initializeApp(firebaseConfigMobile);
}
export const storage = firebase.storage();
