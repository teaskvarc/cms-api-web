angular.module('simpleCrud').controller('EditProjectCtrl',function($scope, $stateParams, projectService, $state){

    $scope.project = {};

    var projectId = $stateParams.id;

    var projectList = projectService.model.list;

    angular.forEach(projectList, function (project, i) {

        if(project._id === projectId){

            $scope.project = project;
        }

    });

    $scope.onSaveClick = function () {

        projectService.update(projectId, $scope.project, function () {

            $state.go('projects');
        });
    };

    $scope.deleteProject = function(){

      var removed = projectService.remove(projectId);

        if(removed){
            $state.go('projects');
        }
    };
});
