angular.module('simpleCrud').controller('ArticlesCtrl',function($scope, articleService){


    $scope.articles = articleService.model.list;

    $scope.onDeleteClick = function(id){                //tukaj sprejmemo ID iz html-ja

       articleService.remove(id);

    };

});
