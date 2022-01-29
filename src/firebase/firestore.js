import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCK1k0yOsuFIhcCripoXYv0aLCnnhDqawM",
  authDomain: "crw-clothing-ca6fa.firebaseapp.com",
  projectId: "crw-clothing-ca6fa",
  storageBucket: "crw-clothing-ca6fa.appspot.com",
  messagingSenderId: "513725582531",
  appId: "1:513725582531:web:f628d6e7d2fb43d26ca676",
  measurementId: "G-8WJYVXBEF6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();



const userW = {
	first: "Alan",
	middle: "Mathison",
	last: "Turing",
	born: 1912
};
const addToCollection = async (user, collectinName) => {
	try {
		const docRef = await addDoc(collection(db, collectinName), user);
	
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}
const getDocFromCollection = async (collectinName) => {
	try {
		const querySnapshot = await getDocs(collection(db, collectinName));
		console.log(querySnapshot)
	} catch (error) {
		console.log(error)
	}
}
addToCollection(userW, 'users');
getDocFromCollection('users');