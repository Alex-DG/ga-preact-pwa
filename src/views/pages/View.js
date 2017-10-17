import { h, Component } from 'preact';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import Components from '../components';

const propTypes = {
  instances: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    component_Type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })),
};

const defaultProps = {
  instances: [],
};

export default class View extends Component {
  renderInstances() {
    const { instances } = this.props;
    if (instances) {
      return instances.map(({ _id, component_type: type, props }) => {
        if (!type) {
          return 'Loading...';
        }

        const { name } = type;
        const NamedComponent = Components[name];

        return <NamedComponent key={_id} {...props} />;
      });
    }
    return '';
  }

	render() {
    return (
  		<div>
        <Card>Dynamic Component Rendering</Card>
        {this.renderInstances()}
      </div>
  	);
  }
};
