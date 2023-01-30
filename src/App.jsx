import { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const optionsKeys = getOptionsKeys();
  const optionsValues = getOptionsValues();
  const total = totalFeedback();
  const percentage = positiveFeedbackPercentage();

  const leaveFeedback = e => {
    const currenOption = e.target.textContent;

    if (currenOption === 'good') {
      setGood(prevState => prevState + 1);
    } else if (currenOption === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  function getOptionsKeys() {
    return Object.keys(options);
  }

  function getOptionsValues() {
    return Object.values(options);
  }

  function totalFeedback() {
    return optionsValues.reduce((acc, feed) => acc + feed, 0);
  }

  function positiveFeedbackPercentage() {
    return Math.floor((good * 100) / total);
  }

  return (
    <>
      <Section title="Please leave feedback!">
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeeds={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
