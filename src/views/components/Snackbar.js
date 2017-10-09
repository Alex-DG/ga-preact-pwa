import { h, Component } from 'preact';

import { on } from '../shared';

import Button from 'preact-mui/lib/button';
import Row from 'preact-mui/lib/row';
import Col from 'preact-mui/lib/col';

export default class Snackbar extends Component {
	constructor(props) {
		super(props);

		this.state = { open:false, message:'' };

		this.hide = () => this.setState({ open:false, message:'' });

		this.show = (evt) => {
			this.setState({ open:true, message:evt.detail });
			setTimeout(this.hide, props.timeout || 2000);
		};

		this.reload = () => {
			this.setState({ open:false, message:'' }, window.location.reload());
		};
	}

	componentDidMount() {
		on('snackbar', this.show);
	}

	renderSnackBtn(text) {
		if (text) {
			switch (text) {
				case 'New content available, reload the page':
				return <Button color="accent" size="small" onClick={ this.reload } variant="raised">Reload</Button>;
					break;
				default: // just Hide
				return <Button color="accent" size="small" onClick={ this.hide } variant="raised">Close</Button>;
			}
		}
	}

  render() {
		const {message} = this.state;
    return(
      <div>
        { this.state.open ?
          <Row className="-stackbar">
            <Col xs="9" md="10">
              <div class="mui--appbar-height mui--appbar-line-height">{message}</div>
            </Col>
            <Col xs="3" md="2">
              <div class="mui--appbar-height mui--appbar-line-height mui--pull-right">
								{ this.renderSnackBtn(message) }
							</div>
            </Col>
          </Row>
          :
          <div className="bob"></div>
        }
      </div>
    )
  }
}
