import React from 'react';
import Card from "react-bootstrap/Card"; //for bootstrap card
import Button from "react-bootstrap/Button";//Import react bootstrap button
import axios from "axios"; //import axios for promises
import {Link} from 'react-router-dom';//Used to change the URL of the application

export class MovieItem extends React.Component {

    constructor() {
        super();
        //bind methods
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    //delete button clicked event handler
    DeleteMovie(e) {
        e.preventDefault(); //Prevents/cancels unintended calls of this method - Should have in every method that is called from an event

        //console.log("Delete: "+this.props.movieObjFromMovies._id);
        axios.delete("http://localhost:4000/api/movies/"+this.props.movieObjFromMovies._id)
        .then( () => {
            this.props.ReloadData(); //This method has been chained from React, to Movies, to movieItem.
        })
        .catch();
    }

    render() {
        return (
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
                    {/* Delete Button... "variant="danger" makes it red... We define our DeleteMovie method above. */}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    {/* Edit Link - change url to edit/(_id of movie). className part is just styling, makes it look like a button*/}
                    <Link to={"/edit/"+this.props.movieObjFromMovies._id} className="btn btn-primary">Edit</Link>

                </Card>
            </div>
        );
    }

}