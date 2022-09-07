import Card from './shared/Card';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

function FeedbackItem(props) {
  return (
    <Card>
      <div className="num-display">{props.item.rating}</div>
      <button
        className="close"
        onClick={() => props.handleDelete(props.item.id)}
      >
        <MdDeleteForever color="red" />
      </button>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
