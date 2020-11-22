import React from 'react';
import Card from "react-bootstrap/Card"; //for bootstrap card

export class MovieItem extends React.Component {

    render() {
        return(
            <div>
                {
                /* <h3>{this.props.movieObjFromMovies.Title}</h3>
                <p>{this.props.movieObjFromMovies.Year}</p>
                <img src = {this.props.movieObjFromMovies.Poster} width="200" height="300"></img> 
                */
                }

                {/* Bootstrap card to display moveitem details - Title, Poster and Year */}
                <Card>
                    <Card.Header> {this.props.movieObjFromMovies.title} </Card.Header>
                    <Card.Body>
                        {/* <blockquote> tags are used to signify that a section is quoted from another source.*/}
                                    <img src={this.props.movieObjFromMovies.poster}></img>
                                    <footer>
                                        {this.props.movieObjFromMovies.year} 
                                    </footer>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}