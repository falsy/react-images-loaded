import React, { PureComponent } from 'react';
import Img from './Img';

class Example extends PureComponent {
	render() {
		return (
			<div>
				<Img imgLoaded={this.props.imgLoaded} src="https://lab.falsy.me/wp-content/uploads/2018/11/logo.png" alt="falsy logo" />
				<Img imgLoaded={this.props.imgLoaded} src="https://lab.falsy.me/wp-content/uploads/2018/11/logo.png" alt="falsy logo" />
				<Img imgLoaded={this.props.imgLoaded} src="https://lab.falsy.me/wp-content/uploads/2018/11/logo.png" alt="falsy logo" />
				<Img imgLoaded={this.props.imgLoaded} src="https://lab.falsy.me/wp-content/uploads/2018/11/logo.png" alt="falsy logo" />
				<Img imgLoaded={this.props.imgLoaded} src="https://lab.falsy.me/wp-content/uploads/2018/11/logo.png" alt="falsy logo" />
			</div>
		)
	}
}

export default Example