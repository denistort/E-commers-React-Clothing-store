import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInGoogleMethod } from "../../firebase/firebase.utilz";
import { signInWithPassAndEmail } from "../../firebase/firebase.utilz";
import './signIn.styles.scss'
const SignIn = () => {
	const [signIn, setSignIn] = useState({
		email: '',
		password: ''
	});
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = signIn;
		try {
			await signInWithPassAndEmail(email, password)
		} catch (error) {
			console.error(`Sign error ${error.code}: ${error.message}`)
		}
	}
	const handleChange = (e) => {
		const { value, name } = e.target;
		setSignIn(prevState => ({ ...prevState, [name]: value }))
	}
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput 
					name='email'
					type='email'
					handleChange={handleChange}
					label={'email'}
					value={signIn.email}
					required
				/>

				<FormInput 
					name='password'
					type='password'
					handleChange={handleChange}
					label={'password'}
					value={signIn.password}
					required
				/>

				<div className="sign-in-footer">
					<CustomButton type='submit'>
						Sign In
					</CustomButton>
					
					<CustomButton 
					
						isGoogleSignIn={'wewe'} 
						onClick={signInGoogleMethod} 
					>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
			
	);
}
 
export default SignIn;