import './header.styles.scss'
import { Link, NavLink } from 'react-router-dom';
import { signOutFrom } from '../../firebase/firebase.utilz';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdow.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart-dropdown/cart-dropdown.selectors';
import { createStructuredSelector } from 'reselect';

const Header = () => {
	const { currentUser, isCartHidden } = useSelector(
		createStructuredSelector(
			{currentUser: selectCurrentUser, isCartHidden: selectCartHidden}
		)
	);
	return (
		<header className='header'>
			<div>
				<Link className='logo-container' to={'/'}>
					<Logo className='logo'/>
				</Link>
			</div>

			<nav className='options'>
				<NavLink 
					className={`option`} 
					to={'/shop'}
					style={({ isActive }) => {
						return {
							fontWeight: isActive ? "700" : ""
						};
					}}
				>
					Shop
				</NavLink>
				<NavLink 
					className={`option`} 
					to={'/contact'}
					style={({ isActive }) => {
						return {
							fontWeight: isActive ? "700" : ""
						};
					}}
				>
						Contact
				</NavLink>


				{
					!currentUser ?
					
					<NavLink 
						className={`option`} 
						to={'/sign-in'}
						style={({ isActive }) => {
						return {
							fontWeight: isActive ? "700" : ""
						};
						}}
					>
							SignIn
					</NavLink> 
					
					:  <span 
							className={`option sign-out-link`}
							onClick={signOutFrom}
							>
								SignOut
						</span> 
				}

				<CartIcon />
			</nav>

			{
				isCartHidden ? null : <CartDropdown />
			}
		</header>
	);
}

export default Header;