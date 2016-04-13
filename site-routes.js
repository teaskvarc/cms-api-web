/**
 * Created by Tea on 4.4.2016.
 */
var mongoose = require('mongoose');

exports.init = function (server) {

   //ko v browser-ju kliknemo ENTER, pride get req., nasa domena je na /

    server.get('/', function (req, res) {

        // objekt skozi katerega bomo nasli article
        var Article = mongoose.model('Article');

        // da pa najdemo article
        Article.find(function (err, articleDocs) {

            // articles cilja na articles.ejs; kot drugi parameter posljemo vse podatke, ki jih dobimo ven iz baze in bomo operirali z ejs sintakso
            res.render('articles',{ articles:articleDocs });
        });

    });

    server.get('/projects', function (req, res) {

        var Project = mongoose.model('Project');

        Project.find(function (err, projectDocs) {

            res.render('projects', { projects:projectDocs });

        });

    });
};