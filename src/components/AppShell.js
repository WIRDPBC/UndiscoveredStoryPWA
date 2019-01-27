import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
// import {Layout, Header, Navigation, Content, Textfield, Drawer} from 'react-mdl';
import {AppBar, Drawer, MenuItem, ContentLink} from '@material-ui/core'
export default class AppShell extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			title: props.title || 'PWA with React'
		};

		this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
		this.handleRequestChange = this.handleRequestChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggleDrawer() {
		this.setState({open: !this.state.open});
	}

	handleRequestChange(open) {
		this.setState({open});
	}

	handleClose(e) {
		console.log(e.nativeEvent);
		this.setState({open: false});
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={this.handleRequestChange}
					>
					<MenuItem primaryText="Users" leftIcon={<ContentLink/>} containerElement={<Link to="/users"/>} onTouchTap={this.handleToggleDrawer}/>
					<MenuItem primaryText="Contact" leftIcon={<ContentLink/>} containerElement={<Link to="/contact"/>} onTouchTap={this.handleToggleDrawer}/>
					<MenuItem primaryText="Github" leftIcon={<ContentLink/>} target="_blank" href="https://github.com/" onTouchTap={this.handleToggleDrawer}/>
				</Drawer>
				<AppBar
					title={this.state.title}
					onLeftIconButtonTouchTap={this.handleToggleDrawer}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					/>
				<div id="content" style={{width: '90%', margin: 'auto', marginTop: '30px'}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

AppShell.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};
