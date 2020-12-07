import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory
import { Movies } from './Movies';
import axios from 'axios'; //axious for promises

export class Read extends React.Component {

    constructor() {
        super();
        //bind method
        this.ReloadData = this.ReloadData.bind(this);
    }

    //state is the object we use to hold data, so we can pass between components
    state = {
        moviesArr: []
    };

    //method that is fired when a component becomes active
    componentDidMount() {
        //get() html method
        //then() if it happens successfuly
        //.catch if it is rejected
        //You can get a CORS exception when making cross origin request, in this case from :3000 to :4000, might as well be two completely seperate websites.
        //need permssion from the server to do that to avoid this exception
        axios.get("http://localhost:4000/api/movies")
            .then((response) => {
                //Search is the name of the array in this particular json data, can use a JSON formatter online to get a better look.
                //curley brackets to use js in args?
                //using myMovies object now
                this.setState({ moviesArr: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //Used to reload data on page when edits/deletes are performed.
    //Note couldn't figure out where I was referencing this method, or the objects since they have same name, else would have used different names. Copied to get it working, was having trouble.
    ReloadData() {
        axios.get("http://localhost:4000/api/movies")
            .then((response) => {
                //Search is the name of the array in this particular json data, can use a JSON formatter online to get a better look.
                //curley brackets to use js in args?
                //using myMovies object now
                this.setState({ moviesArr: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //render is where the logic happens
    render() {
        return (
            //css file name
            <div className="App">
                <h1> Hello from Read component.</h1>
                {/* create object, use it to pass our array into the a movies component */}
                {/* MovieItem > Movie > Read
                    We want to call the reloadData method in this class, from it's grandchild (MovieItem)
                    To do this, we need to pass down a reference to our component 
                    Passing down object called reloadDataRead, with the method along with it.
                    */}
                <Movies moviesObjFromRead={this.state.moviesArr} ReloadData={this.ReloadData} ></Movies>
            </div>
        )
    }
}