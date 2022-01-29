import React, { useEffect } from 'react';
import HomePage from "./pages/homepage/Home-page.component";
import {
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Shop from './pages/shop/shop.component';
import Contact from './pages/contact/contact.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import { Auth, createUserProfileDocument} from './firebase/firebase.utilz.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { onSnapshot } from "firebase/firestore";
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { ColletionPage } from './components/colletions-overview/collection-overview.component'
import { Footer } from './components/footer/footer.component'
/* 
	APP COMPONENT
*/

function App() {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(
		createStructuredSelector(
			{currentUser: selectCurrentUser}
		)
	);
	useEffect( () => {
		let unsubscribe ;
		const unsubFromAuth = Auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth)
				
				unsubscribe = onSnapshot(userRef, (snapshot) => {
					// console.log(snapshot.data())
					// console.log('STATE IN STORE CHANGED')
					dispatch(setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					}))
				}) 
			} else {
				dispatch(setCurrentUser(userAuth))
			}
		});

		return () => {
			unsubFromAuth();
			if(unsubscribe) unsubscribe();
		}
	}, [])

  return (
		<>
			<Header />
			<Routes>
				<Route 
					exact 
					path='/' 
					element={<HomePage />} 
				/>
				<Route 
					path='/shop' 
					element={<Shop />} 
				/>
				<Route 
					path='/shop/:category' 
					element={<ColletionPage />} 
				/>
				<Route 
					path='/contact'
					element={<Contact />}
				/>
				<Route
					exact
					path='/checkout'
					element={<CheckoutPage />}
				/>
				<Route 
					path='/sign-in'
					element={currentUser ? <Navigate to='/' /> : <AuthPage />}
				/>
				{/* <Route 
					path='*' 
					element={<EmptyPage />} 
				/> */}

			</Routes>
			<Footer />
		</>
  );
}

export default App;