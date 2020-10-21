import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory

export class Create extends React.Component {
	render() {
        //this looks like html, but it is actually JSX
		return(
			//css file name
			<div className="App">
				<h1> Hello from Create component.</h1>
			</div>
		)
	}
}