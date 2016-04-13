angular.module('simpleCrud').controller('NewArticleCtrl',function($scope, articleService, $state){  // kar zelimo uporabljati, moramo vkljuciti tukaj noter in sicer po imenu, kot smo ga naredili

    $scope.article = {};                      //  ustvarili smo objekt, ki bo drzal podatke

    $scope.createArticle = function(){            //execute create function in articleService and pass the article data to it

        articleService.create($scope.article, function () {             // article data is gathered from the html template using ng-model attributes

            $state.go('articles');

        });

    };

});
