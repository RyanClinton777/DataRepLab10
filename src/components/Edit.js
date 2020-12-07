import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory
import axios from 'axios' //import axious for promises

export class Edit extends React.Component {

constructor() {
	super();
	//bind the method to the instance of the class
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

componentDidMount() {
    console.log(this.props.match.params.id);//debug - print id to console.
    //use our get method to get the data for this movie
    axios.get("http://localhost:4000/api/movies/"+this.props.match.params.id)
    .then(response => {
        this.setState({
            //left side is state variables defined above, and we are getting the right-side variables from the server
            _id:response.data._id,
            title:response.data.title,
            year:response.data.year,
            poster:response.data.poster
        })
    })
    .catch( (error) => {
        //print error to console
        console.log(error);
    });
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
	//Display new details in an alert
	alert("---Movie changed---"+
            "\n_id: "+this.state._id+       
            "\nTitle: "+this.state.title+
			"\nYear: "+this.state.year+
			"\nPoster: "+this.state.poster
	);

	//send data to server using POST
    //put data into object
	const editedMovie = {
		title: this.state.title,
		year: this.state.year,
        poster: this.state.poster,
        _id: this.state._id
    }

    //use axios to send put request, to movies/_id and send a editedMovie object with the movie data
    axios.put("http://localhost:4000/api/movies/"+this.state._id, editedMovie)
    .then( res => {
        console.log(res.data); //debug
    })
    .catch( err => {
        console.log("Error in put(): "+err);
    });

}//end onSubmit

	render() {
        //this looks like html, but it is actually JSX
		return(
			//css file name
			<div className="App">
				<h1> Hello from Edit component.</h1>
				
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
						value="Edit Movie"
						></input>
					</div>
				</form>

			</div>
		)
	}
}