
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './sign-in-and-sign-up.styles.scss'
const AuthPage = () => {
	return ( 
		<main className='auth-page'>
			<SignIn />
			<SignUp />
		</main>
	);
}
 
export default AuthPage;