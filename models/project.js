// ta minimum lahko copy paste

// tukaj noter definiramo Schemo posameznega modela/nacrt

var mongoose = require('mongoose');

var Schema = mongoose.Schema({

    title           : {type:String, required:true},            // tudi parametre spreminjamo v name, surname itd
    content         : String,
    dateCreated     : { type:Date, default:Date.now}
});

mongoose.model('Project', Schema);         // spreminjamo 'Article' v npr. 'User' ali 'Project'