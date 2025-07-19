/**
 * Firebase Configuration Module
 *
 * Initializes Firebase app and Firestore database for the LIFE-OF-A-P2L project.
 * This module handles the secure configuration of Firebase services using environment variables.
 *
 * @author Affan Aziz Pritul (P2L)
 * @description Part of the Legacy-Class AI interaction documentation system
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Validates that all required Firebase environment variables are present
 * @returns {Object} Validated configuration object
 * @throws {Error} If any required environment variable is missing
 */
function validateFirebaseConfig() {
  const requiredEnvVars = [
    'REACT_APP_FIREBASE_API_KEY',
    'REACT_APP_FIREBASE_AUTH_DOMAIN',
    'REACT_APP_FIREBASE_PROJECT_ID',
    'REACT_APP_FIREBASE_STORAGE_BUCKET',
    'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
    'REACT_APP_FIREBASE_APP_ID',
  ];

  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required Firebase environment variables: ${missingVars.join(', ')}. `
      + 'Please check your .env file and ensure all Firebase configuration values are set.',
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
 * Initialize Firebase application with validated configuration
 * @returns {Object} Firebase app and database instances
 */
function initializeFirebase() {
  try {
    const firebaseConfig = validateFirebaseConfig();

    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);

    // Initialize Firestore database
    const db = getFirestore(app);

    // eslint-disable-next-line no-console
    console.log('✅ Firebase initialized successfully for LIFE-OF-A-P2L project');

    return { app, db };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Firebase initialization failed:', error.message);

    // In development, provide helpful guidance
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('💡 To fix this issue:');
      // eslint-disable-next-line no-console
      console.log('   1. Copy .env.example to .env');
      // eslint-disable-next-line no-console
      console.log('   2. Fill in your Firebase project credentials');
      // eslint-disable-next-line no-console
      console.log('   3. Restart your development server');
    }

    throw error;
  }
}

// Initialize Firebase once and export the instances
const { app, db } = initializeFirebase();

/**
 * Firestore database instance
 * @type {import('firebase/firestore').Firestore}
 */
export { db };

/**
 * Firebase app instance
 * @type {import('firebase/app').FirebaseApp}
 */
export { app };

/**
 * Default export for backward compatibility
 */
export default { db, app };
