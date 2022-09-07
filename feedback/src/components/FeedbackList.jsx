import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList(props) {
  return (
    <div className="feedback-list">
      {props.feedback.map((f) => {
        return (
          <FeedbackItem key={f.id} item={f} handleDelete={props.handleDelete} />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.object.isRequired,
};
export default FeedbackList;
