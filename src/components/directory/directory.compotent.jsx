import React from 'react';
import { useSelector } from 'react-redux';
import { selectSections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';


export const Directory = () => {
	const sections = useSelector(state => selectSections(state));
	return (
		<div className='directory-menu'>
			{
			sections.map(({title, id, imageUrl, size, linkUrl}) => (
				<MenuItem 
					key={id} 
					title={title}
					imageUrl={imageUrl}
					size={size}
					linkUrl={linkUrl}
				/>
			))
			}
		</div>
	)
}
