import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory

export class Create extends React.Component {

constructor() {
	super();
	//bind the method to the instance of the class
	//Just a weird thing you have to do, else you get weird random errors.
	this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
	this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
	this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

	this.onSubmit = this.onSubmit.bind(this);

	//Define state variables - you don't have to define state itself, always there.
	this.state = {
		title:'',
		year:'',
		poster:'',
	};
}

//event handlers for value changes
//can use a single onChange handler, see react forms documentation - extra marks in project.
onChangeMovieTitle(event) {
	this.setState({
		title: event.target.value
	});
}

onChangeMovieYear(event) {
	this.setState({
		year: event.target.value
	});
}

onChangeMoviePoster(event) {
	this.setState({
		poster: event.target.value
	});
}

//submission event handler for form
onSubmit(e) {
	//just shows the entered details in an alert
	alert("---Movie added---"+
			"\nTitle: "+this.state.title+
			"\nYear: "+this.state.year+
			"\nPoster: "+this.state.poster
	);
}

	render() {
        //this looks like html, but it is actually JSX
		return(
			//css file name
			<div className="App">
				<h1> Hello from Create component.</h1>
				
				{/* Form for movie info */}
				{/* onSubmit={this.onSubmit},  onChange={this.onChangeMovieTitle} etc is setting event handlers*/}
				<form onSubmit={this.onSubmit} >
					{/* title */}
					<div className="form-group">
						<label>Add Movie Title:</label>
						<input 
							className="form-control"
							type="text" 
							value={this.state.title}
							onChange={this.onChangeMovieTitle}
						></input>
					</div>

					{/* year */}
					<div className="form-group">
						<label>Add Movie Year:</label>
						<input 
							className="form-control"
							type="text" 
							value={this.state.year}
							onChange={this.onChangeMovieYear}
						></input>
					</div>

					{/* poster */}
					<div className="form-group">
						<label>Add Movie Poster:</label>
						<input 
							className="form-control"
							type="text" 
							value={this.state.poster}
							onChange={this.onChangeMoviePoster}
						></input>
					</div>

					{/* submit button */}
					<div>
						<input
						type="submit"
						value="Add Movies"
						></input>
					</div>
				</form>

			</div>
		)
	}
}