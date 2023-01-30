import React from 'react';
import PropTypes from 'prop-types';

import { SectionStyles, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <Title>{title}</Title>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
