import { h, Component } from 'preact';

import { on } from '../shared';

import Button from 'preact-mui/lib/button';
import Row from 'preact-mui/lib/row';
import Col from 'preact-mui/lib/col';

export default class Snackbar extends Component {
	constructor(props) {
		super(props);

		this.state = { open:false, message:'' };

		this.hide = () => this.setState({ open:false });

		this.show = (evt) => {
			this.setState({ open:true, message:evt.detail });
			setTimeout(this.hide, props.timeout || 1000);
		};
	}

	componentDidMount() {
		on('snackbar', this.show);
	}

  render() {
    return(
      <div>
        { this.state.open ?
          <Row className="-stackbar">
            <Col xs="9" md="10">
              <div class="mui--appbar-height mui--appbar-line-height">{this.state.message}</div>
            </Col>
            <Col xs="3" md="2">
              <div class="mui--appbar-height mui--appbar-line-height mui--pull-right">
								<Button color="accent"  size="small" onClick={ () => this.hide() } variant="raised">Close</Button>
							</div>
            </Col>
          </Row>
          :
          ''
        }
      </div>
    )
  }
}
