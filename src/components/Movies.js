import React from 'react';
import { MovieItem } from './movieItem'; //import movieItem component

export class Movies extends React.Component {

    render() {
        //map splits a collection apart into individual items
        //was created for distributed computing, so large collections could be processed on mutliple computers
        //pass items from collection into MovieItem
        //creates new component for each item in array
        // => is an anonymous method, we create a function without signature
        //The parameter holds the current item as it goes through the collection, like a foreach statement.
        //We create an object to hold these details (movieObjFromMovies) and pass it into movieItem
        return this.props.moviesObjFromRead.map((currentMovie) => {
                return <MovieItem movieObjFromMovies = {currentMovie}></MovieItem>
            }
        );

        //(
            // <div>
            //     <h3>Hello from the movies</h3>
            //     {/* We use props(properies) to access properties of the class, including objects passed from parent */}
            //     <MovieItem></MovieItem>
            //     {console.log(this.props.moviesObj)}
            // </div>
        //)
    }

}