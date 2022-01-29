
import './form-input.styles.scss';

const FormInput = ({handleChange, label, value, ...props}) => {
	return (
		<div className='group'>
			<input type="text" className='form-input' onChange={handleChange} {...props}/>
			{
				label 
				? (
				<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
					{label}
				</label>
				)
				: null
			}
		</div>
	);
}

export default FormInput;