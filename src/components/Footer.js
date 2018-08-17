import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <p>
      Show:
      <FilterLink filter="all">All</FilterLink>{' '}
      <FilterLink filter="active">Active</FilterLink>{' '}
      <FilterLink filter="completed">Completed</FilterLink>
    </p>
  );
};

export default Footer;
