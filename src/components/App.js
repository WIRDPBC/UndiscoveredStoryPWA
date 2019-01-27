import React from 'react';
import PropTypes from 'prop-types'
import {MuiThemeProvider, getMuiTheme} from '@material-ui/core'
import AppShell from './AppShell';
import Theme from './Theme';

class App extends React.Component {
	render() {
		return (
			<div>Hello World</div>
		
				// <AppShell title="PWA with React">
				// 	{this.props.children}
				// </AppShell>
			
		);
	}
}

App.propTypes = {
	children: PropTypes.node
};

export default App;
