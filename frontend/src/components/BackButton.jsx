import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const BackButton = ({ url }) => {
	return (
		<Link to={url} className='btn btn-reverse btn-back'>
			<FaArrowCircleLeft /> Back
		</Link>
	);
};

BackButton.propTypes = {
	url: PropTypes.string
};
