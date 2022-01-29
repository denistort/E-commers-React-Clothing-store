import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Auth, createUserProfileDocument } from "../../firebase/firebase.utilz";
import './sign-up.styles.scss';
import { useState } from "react";
import { 
	createUserWithEmailAndPassword
	// signInWithRedirect
}from 'firebase/auth';
const SignUp = () => {
	
	const [formState, setFormState] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { 
			displayName, 
			email, 
			password,	
			confirmPassword,
		} = formState;

		if(password !== confirmPassword) {
			alert('password & confrimPassword dont match')
			return
		}


		try {
			const { user } =  await createUserWithEmailAndPassword(Auth, email, password);
			await createUserProfileDocument(user, displayName)
			setFormState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		} catch (error) {
			console.error(error, error.message)
		}
	}
	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormState(prevState => ({ ...prevState, [name]: value }))
	}

	return (
		<div className="sign-up">
			<h2>I do not have account</h2>
			<span>Sign up with your email and password</span> 
			
			<form onSubmit={handleSubmit}>
				<FormInput 
						name='displayName'
						type='text'
						handleChange={handleChange}
						label={'displayName'}
						value={formState.displayName}
						required
				/>

				<FormInput 
					name='email'
					type='email'
					handleChange={handleChange}
					label={'email'}
					value={formState.email}
					required
				/>

				<FormInput 
					name='password'
					type='password'
					handleChange={handleChange}
					label={'password'}
					value={formState.password}
					required
				/>


				<FormInput 
					name='confirmPassword'
					type='password'
					handleChange={handleChange}
					label={'confirm password'}
					value={formState.email}
					required
				/>
				<div>
					<CustomButton type='submit'>
						Submit
					</CustomButton>
				</div>

			</form>
		</div>
			
	);
}
 
export default SignUp;