import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory
import { Movies } from './Movies';
import axios from 'axios'; //axious for promises

export class Read extends React.Component {

    //state is the object we use to hold data, so we can pass between components
    state = {
        moviesArr: []
    }

    //method that is fired when a component becomes active
    componentDidMount() {
        //get() html method
        //then() if it happens successfuly
        //.catch if it is rejected
        axios.get("https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032")
        .then(response => {
            //Search is the name of the array in this particular json data, can use a JSON formatter online to get a better look.
            //curley brackets to use js in args?
            this.setState({moviesArr:response.data.Search});
        })
        .catch(function(error) {
            console.log(error);
        });
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