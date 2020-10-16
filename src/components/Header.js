import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory

export class Header extends React.Component {
	render() {
		return(
			//css file name
			 <div className="App">
				<h1> My header in another component.</h1>
			</div>
		)
	}
}