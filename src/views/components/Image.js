import { h, Component } from 'preact';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const defaultProps = {

};

const Image = function Image({ children }) {
  return (
    <div>
      <img src={children} />
    </div>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
