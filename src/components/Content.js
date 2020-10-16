import React from 'react'; //leave class blank and type source for autcomplete options
import '../App.css'; // ../ is parent directory

export class Content extends React.Component {
    //Shows Hello world and current time.
    render() {
        return (
            //css file name
            <div className="App">
                <h1> Hello World. </h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}