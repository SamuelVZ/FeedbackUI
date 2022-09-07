import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

function FeedbackList(props) {
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {props.feedback.map((f) => {
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={f.id}
                item={f}
                handleDelete={props.handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackList;
