import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart-dropdown/cart-dropdown.actions";
import { selectCartItems } from "../../redux/cart-dropdown/cart-dropdown.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
const CartDropdown = () => {
	const items = useSelector(state => selectCartItems(state))
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClickNavigate = () => {
		navigate('/checkout')
		dispatch(toggleCartHidden());
	}
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					items.length 
						? items.map(item => <CartItem key={item.id} item={item} />)
						: <span className="emptyCart">Your cart is empty</span>  
				}
			</div>	
			<CustomButton onClick={handleClickNavigate} >GO TO CHECKOUT</CustomButton>
		</div>
	);
}
 
export default CartDropdown;