import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
	const classString = size ? size : '';
	const navigate = useNavigate();	
	const onClickHandlerNavigate = () => navigate(`/${linkUrl}`)
	return (
		<div 
			className={`${classString} menu-item`}
			onClick={onClickHandlerNavigate}
		>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}} >

			</div>
			<div className="content">
				<h2 className='title'>{title.toUpperCase()}</h2>
				<span className="subtitle">SHOPNOW</span>
			</div>
		</div>
	);
}
 
export default MenuItem;