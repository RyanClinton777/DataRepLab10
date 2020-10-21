import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component {

    render() {
        //map splits a collection apart into individual parts
        //was created for distributed computing, so large collections could be processed on mutliple computers
        //pass individual object into MovieItem
        //creates new component for each item in array
        // => is an anonymous method, we create a function without signature
        return this.props.moviesObj.map((movie) => {
                return <MovieItem myMovie = {movie}></MovieItem>
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