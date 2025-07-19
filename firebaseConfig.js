import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Validates that all required environment variables are present
 * @returns {Object} The validated Firebase configuration object
 * @throws {Error} If any required environment variables are missing
 */
function validateFirebaseConfig() {
  const requiredVars = [
    'REACT_APP_FIREBASE_API_KEY',
    'REACT_APP_FIREBASE_AUTH_DOMAIN',
    'REACT_APP_FIREBASE_PROJECT_ID',
    'REACT_APP_FIREBASE_STORAGE_BUCKET',
    'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
    'REACT_APP_FIREBASE_APP_ID',
  ];

  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required Firebase environment variables: ${missing.join(', ')}. ` +
      'Please check your .env file and ensure all variables are set.',
    );
  }

  return {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
}

/**
 * Firebase configuration object
 * @type {Object}
 */
const firebaseConfig = validateFirebaseConfig();

/**
 * Firebase app instance
 * @type {FirebaseApp}
 */
const app = initializeApp(firebaseConfig);

/**
 * Firestore database instance
 * @type {Firestore}
 */
const db = getFirestore(app);

export { db };
