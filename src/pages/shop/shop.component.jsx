import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/preview-collections/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './shop.styles.scss';

const Shop = () => {
	const shopData = useSelector(state => selectCollections(state))
	return (
		<>
			<main className='shop-page'>
				{
					Object.keys(shopData).map((key) => {
						const {id, ...otherProps } = shopData[key];
						return <CollectionPreview key={id} {...otherProps} />})
				}
				
			</main>
		</>
	);
}
 
export default Shop;