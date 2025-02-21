 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
   apiKey: "AIzaSyAE3hZAKeOSUy-kWs6om77Bbrmx3QsiAkM",
   authDomain: "ecomerce-final-28b0c.firebaseapp.com",
   projectId: "ecomerce-final-28b0c",
   storageBucket: "ecomerce-final-28b0c.firebasestorage.app",
   messagingSenderId: "889787374318",
   appId: "1:889787374318:web:2d28ca191d3aa2586ab1ff"
 };



 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export { db };

