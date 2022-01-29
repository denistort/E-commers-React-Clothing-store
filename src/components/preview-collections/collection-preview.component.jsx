import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ name, title, items, routeName, limit = 4}) => {
	return (
		<div className='collection-preview'>

			<h1 className='title'>
				<Link to={`/shop/${routeName}`}>
					{title ? title.toUpperCase() : name.toUpperCase()}
				</Link>
				</h1>
			<div className='preview'>
				{	
					!limit 
						? items.map(item => <CollectionItem key={item.id} item={item} />)
						: items
								.filter((_, idx) => idx < limit)
								.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</div>
		</div>
	);
}
 
export default CollectionPreview;