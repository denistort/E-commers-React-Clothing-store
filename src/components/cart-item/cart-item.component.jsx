import './cart-item.styles.scss';
import { ReactComponent as Delete } from '../../assets/delete.svg'
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cart-dropdown/cart-dropdown.actions';
const CartItem = ( { item } ) => {
	const {imageUrl, price, name, quantity} = item;
	const dispatch = useDispatch();
	const handleClickDeleteItem = () => dispatch(removeItem(item))
	return (
		<div className='cart-item'>
			<img src={imageUrl} alt={name} />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>{quantity} $ {price}</span>
				<Delete onClick={handleClickDeleteItem} className='svg-delete-button'/>
			</div>
		</div>
	);
}
 
export default CartItem;