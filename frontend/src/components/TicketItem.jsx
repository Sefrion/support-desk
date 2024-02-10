import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TicketItem = ({ ticket }) => {
	return (
		<div className='ticket'>
			<div>{new Date(ticket.createdAt).toLocaleString('ru-RU')}</div>
			<div>{ticket.product}</div>
			<div className={`status status-${ticket.status}`}>{ticket.status}</div>
			<Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
				View
			</Link>
		</div>
	);
};

TicketItem.propTypes = {
	ticket: PropTypes.object
};

export default TicketItem;
