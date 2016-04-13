// inicializacija/ uvodna nastavitev

// polinkamo libraries, ,file

var express =       require('express');
var database =      require('./database');
var routes =        require('./routes');
var siteRouter=     require('./site-routes');
var bodyParser =    require('body-parser');
var server =        express();

// serve cms folder on /cms route

server.set('view engine','ejs');                    // s tem smo povedali express server-ju, da bomo uporabljali ejs-template
server.use('/cms', express.static('cms'));         // servira vsebino mape na server
server.use('/assets',express.static('assets'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true}));

database.connect(function () {               // tukaj naredimo povezavo na bazo. Povezava s file: database.js, zgoraj smo pa dali require
    
    require('./models/article');            // to je SCHEMA. Imeti moramo nacrt vsakega podatka, ki ga bomo shranili v bazo. Vsak user ima(name,surname, email,password), article ima(title,content)
    require('./models/project');
    
    server.listen(3000, function () {

        routes.init(server);
        siteRouter.init(server);
        console.log('Server running on port 3000');
    });
});