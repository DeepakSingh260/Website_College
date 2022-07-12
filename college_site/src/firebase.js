import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqfyY-4K9BiOK_b2q_MRlzpyUGPMOFBU",
  authDomain: "college-website-52b15.firebaseapp.com",
  databaseURL: "https://college-website-52b15-default-rtdb.firebaseio.com",
  projectId: "college-website-52b15",
  storageBucket: "college-website-52b15.appspot.com",
  messagingSenderId: "601211411642",
  appId: "1:601211411642:web:1bb9f6ec8f0f5e8785b683",
  measurementId: "G-XSZQHCY1FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;