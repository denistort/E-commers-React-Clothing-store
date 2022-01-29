import { useDispatch } from 'react-redux';
import { addItem, decremQuantity, removeItem } from '../../redux/cart-dropdown/cart-dropdown.actions';
import './checkout-item.styles.scss';
const CheckoutItem = ({ item }) => {
	const { imageUrl, name, price, quantity } = item;
	const dispatch = useDispatch();
	const onRemoveItem = () => dispatch(removeItem(item));
	const onDecrementQuantity = () => dispatch(decremQuantity(item))
	const onIncrementQuantity = () => dispatch(addItem(item))
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>


			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={onDecrementQuantity}>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={onIncrementQuantity}>&#10095;</div>	
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={onRemoveItem} >&#10005;</div>

		</div>
	);
}
 
export default CheckoutItem;