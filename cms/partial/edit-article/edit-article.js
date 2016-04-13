angular.module('simpleCrud').controller('EditArticleCtrl',function($scope, $stateParams, articleService, $state){

    $scope.article = {};            // v ta object se bosta zapisala title in content iz html-ja, ko bomo vnasali vsebino

    var articleId = $stateParams.id;        // to je nacin kako pridemo do id-ja article. ID smo dobili ven iz URL-ja

    var articleList = articleService.model.list;

    angular.forEach(articleList, function (article, i) {

            if(article._id === articleId){
                $scope.article = article;
            }
    });

    
    $scope.onSaveClick = function() {

        articleService.update(articleId, $scope.article, function () {          // v service imamo napisano update, kjer pricakujemo id in articleData. ID = articleId, articleData = $scope.article

            $state.go('articles');

        });

        };

    $scope.onDeleteClick = function(){

       var removed = articleService.remove(articleId);   // v SERVICE bo poklical to funkcijo in izbrisal to iz array-a in sel nazaj na spodnji state!

            if(removed) {
                $state.go('articles');
            }
    };
});
