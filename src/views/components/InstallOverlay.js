import { h, Component } from 'preact';
import { doc } from '../shared';

import Button from 'preact-mui/lib/button';
import Checkbox from 'preact-mui/lib/checkbox';

import IosIc from '../../static/icon/opt_ios.png'
import AndroidIc from '../../static/icon/opt_android.png'

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
			localStorage.setItem(name, checked);
    }
	}

	renderIcon(os) {
		switch (os) {
			case 'Android':
			return <img id="brower_ic" name="icon" src={AndroidIc} />;
				break;
			case 'iOS':
			return <img id="brower_ic" name="icon" src={IosIc} />;
				break;
			default:
			return '';
		}
	}

	renderLineArrow(os) {
		switch (os) {
			case 'Android':
			return <LineArrowSvg coords={'M 1050 10 q 200 -100 220 -400'}/>;
				break;
			case 'iOS':
			return <LineArrowSvg coords={'M 200 320 q -20 400 250 600'}/>;
				break;
			default:
			return <LineArrowSvg coords={''} />;
		}
	}

  handleCheckbID(os) {
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
		const os = getMobileOperatingSystem();
    return(
      <div>
        { this.state.visible ?
          <div id="install-overlay">
						{ this.renderLineArrow(os) }
            <div>
              <div id="overlay-text">
                <strong>This app can be "Added To Home Screen" </strong>{this.renderIcon(os)}
                <div id="overlay-btn">
                  <Button
                    color="accent"
                    variant="flat"
                    size=""
                    onClick={ this.handleClose }>Close</Button>
                </div>
              </div>
            </div>
            <div id={this.handleCheckbID(os)}>
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
