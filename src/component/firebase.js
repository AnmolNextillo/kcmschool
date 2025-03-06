import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyCyiGw3HTqyRTDMsxvOH54RvGBJ4dYKkm0",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCyiGw3HTqyRTDMsxvOH54RvGBJ4dYKkm0",
    authDomain: "kcmschool-42161.firebaseapp.com",
    projectId: "kcmschool-42161",
    storageBucket: "kcmschool-42161.firebasestorage.app",
    messagingSenderId: "46360016606",
    appId: "1:46360016606:web:c3b530296c1b391110744f",
    measurementId: "G-EHHPMMB76W"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
