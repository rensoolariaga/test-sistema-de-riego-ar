import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCKu8pTEJT3ZrDPGRH1Gun07YmEJDIviqo",
    authDomain: "project-d39ca.firebaseapp.com",
    projectId: "project-d39ca",
    storageBucket: "project-d39ca.appspot.com",
    messagingSenderId: "121946785094",
    appId: "1:121946785094:web:6952e521ea107ca88b5147"
  };
  
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };