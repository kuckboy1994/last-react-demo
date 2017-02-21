var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header.js';
import ComponentFooter from './components/footer.js';
import BodyIndex from './components/Indexbody.js';



class Index extends React.Component {
	render () {
		return (
			<div>	
				<ComponentHeader userId={123}></ComponentHeader>
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		)
	}
};


ReactDOM.render(
	<Index></Index>,
	document.getElementById('example')
);