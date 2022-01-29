import './cart-icon.styles.scss';
import { ReactComponent as ShoppingICon } from '../../assets/122 shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart-dropdown/cart-dropdown.actions';
import { useSelector } from 'react-redux';
import { selectCarItemsCount } from '../../redux/cart-dropdown/cart-dropdown.selectors';
const CartIcon = () => {
	const itemsCount = useSelector(state => selectCarItemsCount(state))
	const dispatch = useDispatch();
	const onToogleCartHidden = () => dispatch(toggleCartHidden())
	return (
		<div onClick={onToogleCartHidden} className='cart-icon'>
			<ShoppingICon className='shopping-icon'/>
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
}
 
export default CartIcon;