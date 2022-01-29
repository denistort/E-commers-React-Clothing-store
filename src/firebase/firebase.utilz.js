import { 
	getFirestore, 
	addDoc, 
	collection, 
	getDocs, 
	getDoc, 
	doc, 
	setDoc, 
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { 
	signInWithPopup, 
	GoogleAuthProvider, 
	getAuth,   
	signInWithEmailAndPassword,
	signOut,
}from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCK1k0yOsuFIhcCripoXYv0aLCnnhDqawM",
  authDomain: "crw-clothing-ca6fa.firebaseapp.com",
  projectId: "crw-clothing-ca6fa",
  storageBucket: "crw-clothing-ca6fa.appspot.com",
  messagingSenderId: "513725582531",
  appId: "1:513725582531:web:f628d6e7d2fb43d26ca676",
  measurementId: "G-8WJYVXBEF6"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const Auth = getAuth();


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInGoogleMethod = async (event) => {
	event.preventDefault();
	try {
		const userCredentials = await signInWithPopup(Auth, provider);
		console.log(userCredentials)
	} catch (error) {
		console.log(error)
		console.log(error.code)
		console.log(error.message)
	}
}
export const signInWithPassAndEmail = (email, password) => signInWithEmailAndPassword(Auth, email, password)
/* 
	SIGN OUT ASYNC FUNCTION
*/
export const signOutFrom = async () => {
	try {
		await signOut(Auth);
		console.log('YOU SIGN OUT');
	} catch(error) {
		console.log(error)
		console.error(error.code)
		console.warn(error.message)

	}
}

/* 

DB SERVICE

*/

const db = getFirestore();

const addToCollection = async (user, collectinName) => {
	try {
		const docRef = await addDoc(collection(db, collectinName), user);
	
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}
const getDocsFromCollection = async (collectinName) => {
	try {
		const querySnapshot = await getDocs(collection(db, collectinName));
		console.log(querySnapshot)
	} catch (error) {
		console.log(error)
	}
}

const createDoc = async (ref, obj) => {
	try {
		await setDoc(ref, obj)
	} catch (error) {
		console.loog('Error when created document ' + error.message, error.code)
	}
}

/* */
export const createUserProfileDocument = async (userAuth, ...additionalData) => {
	if(!userAuth) return;
	const userRef = doc(db, `users/${userAuth.uid}`)
	const snapshot = await getDoc(userRef);
	if(!snapshot.exists()) {
		const {
				displayName, 
				email, 
				emailVerified, 
				phoneNumber,
				photoURL
			} = userAuth;
		const createdAt = new Date();
		await createDoc(userRef, { 
				displayName, 
				email, 
				createdAt, 
				emailVerified,
				phoneNumber,
				photoURL,
				...additionalData});
	}


	return userRef;
}