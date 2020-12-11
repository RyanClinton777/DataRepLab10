const express = require('express') //importing expressJS - allows us to concisely handle get and post requests like: app.get('/whatever', (req, res) => {});
const app = express()
const port = 4000
const cors = require('cors'); //Allows cross platform requests
const bodyParser = require('body-parser') //body parser for parsing HTTP body
const mongoose = require("mongoose"); //MongoDB objet modelling tool. Designed for AJAX, supports promises and callbacks.
const path = require("path"); //include path for filepath operations

//mongodb+srv://admin:root@cluster0.fatuj.mongodb.net/<dbname>?retryWrites=true&w=majority
//Obviously would not put this here in a real project, just doing it for convenience since this is just a lab

//---cors prevention code - permission to make cross platform requests
//This is a security risk
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//configuration for the build, telling express where to find the build and static folders
app.use(express.static(path.join(__dirname, "../build")));
app.use("/static", express.static(path.join(__dirname, "build//static")));

//---body parser code
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

//---MONGOOSE - Connect to DB, create schema and model
const connectionString = "mongodb+srv://admin:root@cluster0.fatuj.mongodb.net/movies?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser: true});
//define movie schema, mongodb doesn't have any schemas by default so this can provide a bit of structure
const schema = mongoose.Schema;
var movieSchema = new mongoose.Schema({
    title:String,
    year:String,
    poster:String
});
//create movie model - ("name of collection on database", schema variable)
//We use this to interact with the database
var movieModel = mongoose.model("movie", movieSchema);

//http get method request on port 4000 at base address
//url = root point
//takes req(uest) and res(ponse) as args, but we aren't doing anything with them at this point.
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
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

//movies page no args (all)
app.get('/api/movies', (req, res) => {
    //some movie data in JSON format.
    // const movies =
    //     [
    //         {
    //             "Title": "Avengers: Infinity War",
    //             "Year": "2018",
    //             "imdbID": "tt4154756",
    //             "Type": "movie",
    //             "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //             "Title": "Captain America: Civil War",
    //             "Year": "2016",
    //             "imdbID": "tt3498820",
    //             "Type": "movie",
    //             "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         }
    //     ];
    
    //use our movieModel to find() all(no args) in the movies table, send as response
    //pass in a callback method that returns the data as json
    movieModel.find((err, data)=> {
        //send response with data
        res.json(data);
    });

    //res.json used to send json data
    // res.status(200).json({
    //     //object name: data
    //     myMovies: movies,
    //     message: "Data sent successfuly"
    // });
})

//movies page search for specific movie
//Every mongodb item has an id
app.get("/api/movies/:id", (req, res)=> {
    console.log(req.params.id);

    movieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    });
});

app.post('/api/movies', (req, res) => {
    //Print movie details on server console
    console.log("Movie Recieved on server:");
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    
    //save documents to database (uses mongo save())
    movieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    });

    res.send("Movie added.");
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

//app.put();

app.delete("/api/movies/:id", (req, res) => {
    console.log("Delete movie: "+req.params.id);
    //takes ID of item to delete, and callback function
    movieModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data); //send back some data, don't really need it
        //Can handle error in here as well.
    });
});

//Update a movie, identified by its id
//put for updates
//note: always look for missing / in urls if 404 error pops up
app.put('/api/movies/:id', (req, res) => {
    console.log("Update movie: "+req.params.id);
    console.log(req.body);

    //find document by id and update it using the new data in req.body
    movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, data)=> {
            //send the data
            res.send(data);
        })
});

//"*" path = any URL not accounted for above, send index file (from build)
app.get("*", (req, res) => {
    // "/.." goes up a directory, so it goes back out of backend, >build>index.html
    res.sendFile(path.join(__dirname+"/../build/index.html"));
});

//configuration of the server
//app.listen starts server, and we pass in the port
//server listens for http requests being sent to it
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})