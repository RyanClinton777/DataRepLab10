import React from 'react';

export class MovieItem extends React.Component {

    render() {
        return(
            <div>
                <h3>{this.props.myMovie.Title}</h3>
                <p>{this.props.myMovie.Year}</p>
                <img src = {this.props.myMovie.Poster} width="200" height="300"></img>
            </div>
        );
    }

}