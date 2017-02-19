var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header.js';

class Index extends React.Component {
	render () {
		return (
			<div>	
				<ComponentHeader></ComponentHeader>
				<h2>这是页面的主体</h2>
			</div>
		)
	}
};


ReactDOM.render(
	<Index></Index>,
	document.getElementById('example')
);