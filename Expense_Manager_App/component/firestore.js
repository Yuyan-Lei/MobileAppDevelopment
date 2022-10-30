// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_MEASUREMENT_ID, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_API_KEY } from '@env';

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of expenses from your database
export async function getExpenses() {
    const expenseCol = collection(db, 'expenses');
    const expenseSnapshot = await getDocs(expenseCol);
    const expenseList = expenseSnapshot.docs.map(doc => doc.data());
    return expenseList;
}

// Add a new expense into db.
export async function addExpenses(expense) {
    await addDoc(collection(db, "expenses"), {
        description: expense.description,
        price: expense.price
    });
}

// Delete an existing expense from db.
export async function deleteExpense(expenseId) {
    await deleteDoc(doc(db, 'expenses', expenseId));
}

// Flip the important status of an entry in db.
export async function flipImportant(expenseId) {
    const colRef = doc(db, 'expenses', expenseId);
    await getDoc(colRef)
        .then((doc) => {
            if (doc.data().important) {
                updateDoc(colRef, {
                    important: false
                });
            } else {
                updateDoc(colRef, {
                    important: true
                });
            }
        });
}