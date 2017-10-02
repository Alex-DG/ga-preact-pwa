import { h, Component } from 'preact';
import { doc } from '../shared';
import Button from 'preact-mui/lib/button';
import { getMobileOperatingSystem, isMobilePlatform } from '../../utils/mobile';
import LineArrowSvg from './LineArrowSvg';

export default class InstallOverlay extends Component {

	constructor(props) {
		super(props);
    this.state = {visible:isMobilePlatform()};

    this.handleClose = () => {
      this.setState({visible:false})
    }
	}

	renderLineArrow() {
		const os = getMobileOperatingSystem();
		switch (os) {
			case 'Android':
			return <LineArrowSvg coords={'M 650 100 q 200 -100 220 -580'}/>;
				break;
			case 'iOS':
			return <LineArrowSvg coords={'M 200 320 q -20 400 250 670'}/>;
				break;
			default:
			return <LineArrowSvg coords={''} />;
		}
	}

  render() {
    return(
      <div>
        { this.state.visible ?
          <div id="install-overlay">
						{ this.renderLineArrow() }
            <div id="overlay-text">
              <strong>You can Add To Home screen this website on your device.</strong>
              <div id="overlay-btn">
                <Button
                  color="accent"
                  variant="raised"
                  size="small"
                  onClick={ this.handleClose }>Close</Button>
              </div>
            </div>
          </div>
          :
          ''
        }
      </div>
    )
  }
}
