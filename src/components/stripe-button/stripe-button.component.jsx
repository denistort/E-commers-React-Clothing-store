import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const convertToCents = price * 100;
	const publishableKey = 'pk_live_51KNA2pEYQwLwxA9HUybz1dOC3GgtmAH0hSyjxZmFWMex0n4Dd3CsDz7Q6mmKyWHifYMZF1FJ3x2BNxIeicl9ofcW00vmuqLHPR';
	const onToken = token => console.log(token)
	
	return (
		<StripeCheckout 
			name="Crw clothing By Denis Korablev"
			ComponentClass="div"
			panelLabel="Pay now"
			currency="USD"
			amount={convertToCents}
			email="denismakste@gmail.com"
			bitcoin={true}
			billingAddress
			shippingAddress
			description={`Your total: ${price}`}
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}
 
export default StripeButton;