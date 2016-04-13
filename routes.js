// to je nas API - skupek route-ov/naslovov/URL-jev!!
// 4 tipi, ki grejo na te naslove: get, post, put, delete
//API-ji so: kje dejansko bo prisel podatek, kje se bo crpal, vse na web-u so URL-ji

var mongoose = require('mongoose');

exports.init = function (server) {

    console.log('Setup routes');


//ARTICLES

    server.get('/api/articles', function (req,res) {

        var Article = mongoose.model('Article');

        Article.find(function (err,docs) {

            res.send(docs);
        });
    });

    // put in delete(update in delete) sta si podobna, ker posodabljamo in brisemo specificen podatek mora imeti ID
    server.put('/api/article/:id', function (req,res) {

        var id = req.params.id;

        var Article = mongoose.model('Article');      // SKOZI MODEL DELAMO VSE OPERACIJE NA BAZO
       

        Article.findByIdAndUpdate(id, req.body, function (err,doc) {     // req.body = podatki, ki pridejo z request-om

            if(!err){
                res.send(doc);                      // doc = dokument, se pravi article
            }else {
                res.sendStatus(400);
            }
        });
    });

    server.delete('/api/article/:id',function (req,res) {

        var id = req.params.id;

        var Article = mongoose.model('Article');

        Article.findByIdAndRemove(id, function (err,doc) {

            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400);
            }
        });

    });

    // CREATE = ta funkcija se sprozi, ko prejmemo request
    server.post('/api/article',function (req,res) {

        var Article = mongoose.model('Article');

        var data = req.body;

        var title = data.title;
        var content = data.content;

        //tu smo ustvarili novo instanco
        var newArticle = new Article(data);

        newArticle.save(function (err) {

            console.log(err);
            res.send(data);
        });
    });

    //PROJECTS

    server.post('/api/project', function (req,res) {

        var Project = mongoose.model('Project');

        var data = req.body;
        var title = data.title;
        var content = data.content;

        var newProject = new Project(data);

        newProject.save(function (err) {
            console.log(err);
            res.send(data);
        });

    });

    server.get('/api/projects', function (req,res) {

        var Project = mongoose.model('Project');

        Project.find(function (err,docs) {

            res.send(docs);
        });

    });

    server.put('/api/project/:id', function (req,res) {

        var id = req.params.id;

        var Project = mongoose.model('Project');

        Project.findByIdAndUpdate(id, req.body, function (err, doc) {

            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400);
            }
        });

    });

    server.delete('/api/project/:id',function (req,res) {

        var id = req.params.id;

        var Project = mongoose.model('Project');

        Project.findByIdAndRemove(id, req.body, function (err,docs) {

            if(!err){
                res.send(docs);
            }else{
                res.sendStatus(400);
            }
        });
    });

};

