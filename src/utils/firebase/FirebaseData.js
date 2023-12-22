import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import { onMessage } from 'firebase/messaging'
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

const FirebaseData = () => {

  const setting = useSelector((state) => state.setting);


  if (setting.setting === null) {
    return <Loader screen='full' />;
  }

  const apiKey = setting.setting && setting.setting.firebase.apiKey;
  const authDomain = setting.setting && setting.setting.firebase.authDomain;
  const projectId = setting.setting && setting.setting.firebase.projectId;
  const storageBucket = setting.setting && setting.setting.firebase.storageBucket;
  const messagingSenderId = setting.setting && setting.setting.firebase.messagingSenderId;
  const appId = setting.setting && setting.setting.firebase.appId;
  const measurementId = setting.setting && setting.setting.firebase.measurementId;


  // const firebaseConfig = {
  //   apiKey: apiKey,
  //   authDomain: authDomain,
  //   projectId: projectId,
  //   storageBucket: storageBucket,
  //   messagingSenderId: messagingSenderId,
  //   appId: appId,
  //   measurementId: measurementId,
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyAGEqiJosyS1sKETbnqVOMVl-afZkhQLi0",
    authDomain: "farminsta-36505.firebaseapp.com",
    projectId: "farminsta-36505",
    storageBucket: "farminsta-36505.appspot.com",
    messagingSenderId: "735833259805",
    appId: "1:735833259805:web:976d3360ae85a2e624abf4",
    measurementId: "G-72JS9REWDT"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const auth = firebase.auth();

  const messaging = firebase.messaging();
  
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
 
  return { auth, firebase, messaging };
};

export default FirebaseData;