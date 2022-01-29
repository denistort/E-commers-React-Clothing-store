import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart-dropdown/cart-dropdown.selectors';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = () => {
	const { items, total } = useSelector(
		createStructuredSelector(
			{ items: selectCartItems, total: selectCartTotal}
	)
)
	// removeItem
	return (
		<main className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>

				<div className='header-block'>
					<span>Description</span>
				</div>

				<div className='header-block'>
					<span>Quantity</span>
				</div>

				<div className='header-block'>
					<span>Price</span>
				</div>

				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>

			<div className='checkout-cart-items'>
				{
					items.length 
					? items.map(item => <CheckoutItem key={item.id} item={item}/>)
					: <div className='empty-checkout'>Nothing Here</div>
				}
			</div>

			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
			<div className='stripe-button-wrapper'>
				<StripeButton price={total}/>
			</div>
		</main>
	);
}
 
export default CheckoutPage;