import { h, Component } from 'preact';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const defaultProps = {

};

const Title = function Title({ children }) {
  return (
    <h2>
      {children}
    </h2>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
