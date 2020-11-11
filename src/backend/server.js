const express = require('express') //importing express
const app = express()
const port = 4000

//add cors prevention code - permission to make cross platform requests
//This is a security risk
const cors = require('cors'); //import
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//body parser code
const bodyParser = require('body-parser') //import body parser for parsing HTTP body
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

//'npm install -g nodemon' - (monitor) plugin that restarts server automatically when changed
//then run 'nodemon server.js'

//http get method request on port 4000 at base address
//url = root point
//takes req(uest) and res(ponse) as args, but we aren't doing anything with them at this point.
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

app.get('/api/movies', (req, res) => {
    //array of movies
    const movies = [
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
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
            "Title": "War of the Worlds",
            "Year": "2005",
            "imdbID": "tt0407304",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        }
    ]

    res.json({
        //pass array into object
        myMovies: movies
    });
})

app.get('/whatever', (req, res) => {
    res.send('Whatever')
})

//want to type in hello/name in url, and return hello name on the page.
//:parameter
//req.params.name to get parameter
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

app.get('/api/movies', (req, res) => {
    //some movie data in JSON format.
    const movies =
        [
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
            }
        ];

    //res.json used to send json data
    res.json({
        //object name: data
        myMovies: movies,
        message: "Data sent successfuly"
    });
})

app.post('/api/movies', (req, res) => {
    //Print movie details on server console
    console.log("Movie Recieved:");
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
})

//Returning a file, html file in this case.
app.get('/test', (req, res) => {
    //__dirname returns current directory
    //two underscores
    res.sendFile(__dirname + '/index.html');
})

//pulling data from GET request (data in URL)
app.get('/name', (req, res) => {
    console.log(req.query); //will show how the data is formatted as JSON
    res.send("[GET] Hello " + req.query.firstname + " " + req.query.lastname);
})

//pulling data from POST request (data sent securely)
//Need body--parser package to parse the body of a HTTP request
//https://expressjs.com/en/resources/middleware/body-parser.html
//npm install body-parser
//+ req.query.firstname +" "+ req.query.lastname
app.post('/name', (req, res) => {
    console.log(req.query); //will show how the data is formatted as JSON
    //we get the data from req.body for post, instead of query.
    res.send("[POST] Hello " + req.body.firstname + " " + req.body.lastname);
})

//configuration of the server
//app.listen starts server, and we pass in the port
//server listens for http requests being sent to it
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})