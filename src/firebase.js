import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(
    {
        apiKey: "AIzaSyAL59ODaaJkz4DZNA_HbzacePeF_lPUE1o",
        authDomain: "qpwebsite.firebaseapp.com",
        projectId: "qpwebsite",
        storageBucket: "qpwebsite.appspot.com",
        messagingSenderId: "426471890403",
        appId: "1:426471890403:web:f76d61ca2c99180dc314d6",
        measurementId: "G-6WDNGY2SZW"
    }
);

 export const firestore = getFirestore(firebaseApp)
 export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)
 export const db={
    engineering:"Engineering",
    formatedDoc:doc=>{
      return{id:doc.id,...doc.data()}
    },
    getCurrentTimeStamp:serverTimestamp,
  }