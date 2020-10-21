import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory
import { Movies } from './Movies';

export class Read extends React.Component {
    //state is the object we use to hold data, so we can pass between components
    state = {
        //we want to pass this data into the movies component
        moviesArr: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]
            
    }

    //render is where the logic happens
	render() {
		return(
			//css file name
			<div className="App">
				<h1> Hello from Read component.</h1>
                {/* create object, use it to pass our array into the a movies component */}
                <Movies moviesObjFromRead = {this.state.moviesArr}></Movies>
			</div>
		)
	}
}