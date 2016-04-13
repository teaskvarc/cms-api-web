angular.module('simpleCrud').controller('ProjectsCtrl',function($scope, projectService){


    $scope.projects = projectService.model.list;

    $scope.deleteProject = function(id){

        projectService.remove(id);

    };

});
