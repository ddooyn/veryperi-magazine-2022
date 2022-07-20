import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBBdKwBBdN_XCIKYDWkuAxG5enEi5f4KtY',
  authDomain: 'veryperi-magazine.firebaseapp.com',
  projectId: 'veryperi-magazine',
  storageBucket: 'veryperi-magazine.appspot.com',
  messagingSenderId: '868550841168',
  appId: '1:868550841168:web:6440b3652d5685a16c9255',
  measurementId: 'G-YMHFZZRTB1',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
