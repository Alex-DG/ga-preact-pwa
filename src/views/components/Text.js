import {h, Component} from 'preact';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const defaultProps = {

};

const Text = function Text({ children }) {
  return (
    <p> {children} </p>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
