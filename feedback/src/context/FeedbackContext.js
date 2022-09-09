import { createContext, useState, useEffect } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const data = await fetch('/feedback').then((response) => response.json());
    setFeedback(data);
    setIsLoading(false);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const data = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    }).then((response) => response.json());

    setFeedback([data, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateEditFeedback = async (id, updatedItem) => {
    const data = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    }).then((response) => response.json());

    setFeedback(
      feedback.map(
        (item) => {
          if (item.id === id) {
            setFeedbackEdit({ item: {}, edit: false });
            return {
              ...item,
              ...data,
            };
          } else {
            return item;
          }
        }
        // item.id === id
        //   ? {
        //       ...item,
        //       ...updatedItem,
        //     }
        //   : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, //state
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback, //function
        updateEditFeedback,
      }}
    >
      {children}{' '}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
