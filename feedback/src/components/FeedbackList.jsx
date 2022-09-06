import FeedbackItem from './FeedbackItem';

function FeedbackList(props) {
  return (
    <div className="feedback-list">
      {props.feedback.map((f) => {
        return <FeedbackItem key={f.id} item={f} />;
      })}
    </div>
  );
}
export default FeedbackList;
