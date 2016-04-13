// v service posiljamo podatke na streznik. Service so globlani, lahko dostopamo od povsod in klicemo te funkcije
// articleService = na enem mestu imamo vse operacije, ki jih zelimo delati na enem mestu

angular.module('simpleCrud').factory('articleService',function($http) {     //'article' spremenimo v articleService


    // to nismo sami spisali, ampak prekopirali iz javascript GUID

     function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }


    var article = {
        model: {
            list   : [                                          // seznam vseh article, po default je prazen seznam// TO JE EDINI ARRAY, ki drzi podatke
                {
                    id      : guid(),
                    title   : 'Mama mia, it is crazy!',
                    date    :new Date(),
                    content :'aaaa bbbbb cccc'

                },
                {
                    id      : guid(),
                    title   : 'I am really happy!',
                    date    :new Date(),
                    content :'aaaa bbbbb cccc'

                }
            ],
            item   :  null
        },

//POST
        create:function(article, cb){                               // v create funkcijo si bomo poslali article objekt(gor smo ga sestavili). Tu ga posljemo na streznik. Nazaj s PROMISE dobimo podatek.

            $http.post('/api/article', article)                 // tukaj posljemo request na streznik (v routes.js)
                .then(function (res) {

                    console.log(res);
                    if(cb){
                        cb(res.data);
                    }
                });
        },

//DELETE
        remove:function(id){                                                    // funkcijo remove, lahko poklicemo na vec koncih

             var promise = $http.delete('/api/article/'+id);

            angular.forEach(article.model.list, function(item, i){           //item in i = arbitrarno, sami dolocimo ime.

                  if(id === item._id){
                      article.model.list.splice(i,1);                           // SPLICE

                  }
                });

        },
//PUT
        update:function(id, articleData, cb){                  // v to funkcijo posljemo podatke o article

            $http.put('/api/article/'+id, articleData)     // kot drugi parameter prilepimo podatke.         articleData = req.body!!!!
                .then(function(res){

                    if(cb){
                        cb(res.data);
                    }
                });
        },
//READ
        getAll:function(cb){

            var promise = $http.get('/api/articles');

            promise.then(function (res) {

                article.model.list = res.data;

                if(cb){
                    cb(res.data);
                }

            });
            return promise;
        }

    };

	return article;
});





