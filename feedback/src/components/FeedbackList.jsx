import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((f) => {
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={f.id} item={f} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
