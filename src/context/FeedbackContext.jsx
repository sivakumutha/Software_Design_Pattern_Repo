// src/context/FeedbackContext.js
import { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

// eslint-disable-next-line react/prop-types
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(null);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
