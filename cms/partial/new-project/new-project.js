angular.module('simpleCrud').controller('NewProjectCtrl',function($scope, projectService, $state){

    // na OBJECT project se pripnejo: name in description iz html-ja
    $scope.project = {};

    $scope.onSaveClick = function () {

        projectService.create($scope.project, function () {

            $state.go('projects');
        });

    };

});
