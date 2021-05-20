import * as firebaseAdmin from 'firebase-admin';

import serviceAccount from "./serviceAccount.json"

if(!firebaseAdmin.apps.length) {
    
    firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
    storageBucket: process.env.STORAGE_BUCKET_URL
    });
}

export default firebaseAdmin;
