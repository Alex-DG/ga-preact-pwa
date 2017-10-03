import { h, Component } from 'preact';
import { doc } from '../shared';

import Button from 'preact-mui/lib/button';
import Checkbox from 'preact-mui/lib/checkbox';

import { getMobileOperatingSystem, isMobilePlatform } from '../../utils/mobile';

import LineArrowSvg from './LineArrowSvg';

export default class InstallOverlay extends Component {

	constructor(props) {
		super(props);
    this.state = {visible:isMobilePlatform()};

    this.handleClose = () => {
      this.setState({visible:false})
    }

    this.handleClick = (evt) => {
      const name = evt.target.name;
      const checked = evt.target.checked;
      console.log(name + ": " + checked);
    }
	}

	renderLineArrow() {
		const os = getMobileOperatingSystem();
		switch (os) {
			case 'Android':
			return <LineArrowSvg coords={'M 650 100 q 200 -100 220 -500'}/>;
				break;
			case 'iOS':
			return <LineArrowSvg coords={'M 200 320 q -20 400 250 600'}/>;
				break;
			default:
			return <LineArrowSvg coords={''} />;
		}
	}

  handleCheckbID() {
    const os = getMobileOperatingSystem();
		switch (os) {
			case 'Android':
			return "overlay-checkb-android";
				break;
			case 'iOS':
			return "overlay-checkb-ios";
				break;
			default:
			return '';
		}
  }

  render() {
    return(
      <div>
        { this.state.visible ?
          <div id="install-overlay">
						{ this.renderLineArrow() }
            <div>
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
            <div id={this.handleCheckbID()}>
              <Checkbox
                name="pref_overlay"
                label="Don't show it again"
                onChange={this.handleClick}
              />
            </div>
          </div>
          :
          ''
        }
      </div>
    )
  }
}
