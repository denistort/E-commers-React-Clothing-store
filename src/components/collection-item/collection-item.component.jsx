import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart-dropdown/cart-dropdown.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	const dispatch = useDispatch();
	// addItem('item')

	const handleClickAddItem = () => dispatch(addItem(item));
	return (
		<div className='collection-item'>
			<div role="img" aria-label={`${name} image of product`} className='image' style={{
				backgroundImage: `url(${imageUrl})`
			}}>
			</div>

			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<CustomButton inverted onClick={handleClickAddItem}>
				Add to cart
			</CustomButton>
		</div>
	);
}
 
export default CollectionItem;