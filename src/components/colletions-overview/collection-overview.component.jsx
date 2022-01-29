import { useSelector } from 'react-redux';
import './collections-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import CollectionPreview from '../preview-collections/collection-preview.component';
import { selectCollections, selectCollection  } from '../../redux/shop/shop.selectors';

export const ColletionPage = () => {
	const { category } = useParams();
	const { collection } = useSelector(createStructuredSelector({ collection: selectCollection(category)}))
	const {id, ...otherProps} = collection;
	return (
		<main className='colletion-overview'>
			{	
				<CollectionPreview key={id} limit={false} {...otherProps} />
			}
		</main>
	);
}
 
export default ColletionPage;