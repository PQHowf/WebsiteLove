// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCFZcM7dTCTbeFMcvfY8eNxrGIIbtRxkFk",
  authDomain: "lab7-11a72.firebaseapp.com",
  projectId: "lab7-11a72",
  storageBucket: "lab7-11a72.firebasestorage.app",
  messagingSenderId: "651814493575",
  appId: "1:651814493575:web:d5f5b614d5707c104ac722",
  measurementId: "G-L6DMZJWLWN",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  db,
  collection,
  addDoc,
  app,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  doc,
  getDoc,
};
