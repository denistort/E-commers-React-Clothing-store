import './custom-button.styles.scss'
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => {
	const isGoogleButton = `${isGoogleSignIn ? 'google-sign-in' : ''}`;
	const isInverted = `${inverted ? 'inverted' : ''}`;
	return (
		<button className={`${isInverted} ${isGoogleButton} custom-button`} {...otherProps}>
			{children}
		</button>
	);
}
 
export default CustomButton;