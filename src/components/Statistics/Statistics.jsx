import React from 'react';
import PropTypes from 'prop-types';

import { List, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, totalFeeds, positivePercentage }) => {
  return (
    <List>
      <Item key="good">good: {good}</Item>
      <Item key="neutral">neutral: {neutral}</Item>
      <Item key="bad">bad: {bad}</Item>
      <Item key="total">total: {totalFeeds}</Item>
      <Item key="percentage">Positive feedbacks: {positivePercentage}%</Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeeds: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
