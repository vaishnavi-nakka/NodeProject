var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// var genres = require('mongoose');

Genre = require('./models/genre');
Book = require('./models/book');
Template = require('./models/template');

var myId = mongoose.Types.ObjectId();

mongoose.connect('mongodb://localhost/template');
var db = mongoose.connection;

// Use body-parser and cookie-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// app.use(cookieParser);

app.get('/',function(req,res){
    res.send('please use /api/books or /api/genres');
});

// app.get('/api/genres', function(req,res){
//     Genre.getGenres(function(err,genres){
//         if(err){
//             throw err;
//         }
//         res.json(genres);
//     });
// });

// app.post('/api/genres', function(req,res){
//     var genre = req.body;
//     // genre._id = "4";
//     console.log(genre._id+"//////////");
//     console.log(genre+":::genre")
//     Genre.addGenre(genre, function(err,genre){
//         if(err){
//             throw err;
//         }
//         res.json(genre);
//     });
// });

app.post('/api/template/v1/templates', function(req,res){
    var template = req.body;
    // genre._id = "4";
    Template.addTemplate(template, function(err,template){
        if(err){
            throw err;
        }
        res.json(template);
    });
});

app.get('/api/template/v1/templates', function(req,res){
    Template.getTemplates(function(err,templates){
        if(err){
            throw err;
        }
        res.json(templates);
    });
});

app.get('/api/books/:_id', function(req,res){
    Book.getBookById(req.params._id, function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    })
})

// app.get('/api/genres/:_id', function(req,res){
//     Genre.getGenreById(req.params._id, function(err,genre){
//         if(err){
//             throw err;
//         }
//         res.json(genre);
//     })
// })

app.get('/api/template/v1/templates/:_id', function(req,res){
    Template.getTemplateById(req.params._id, function(err,template){
        if(err){
            throw err;
        }
        res.json(template);
    })
})

app.listen(3000);
console.log("starting... on port 3000");