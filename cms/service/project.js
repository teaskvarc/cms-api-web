angular.module('simpleCrud').factory('projectService',function($http) {


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


	var project = {
        model:{
            list  : [],
            item  : null
        },
        create:function(project, cb){

            $http.post('/api/project', project)
                .then(function (res) {

                    console.log(res);
                    if(cb){
                        cb(res.data)
                    }
                });
        },
        update:function (id, projectData,cb) {

            $http.put('/api/project/'+id, projectData)
                .then(function (res) {

                    if(cb){
                        cb(res.data);
                    }
                });

        },

        remove:function(id){

            var promise = $http.delete('/api/project/'+id);

            angular.forEach(project.model.list, function(item, i){

                if(id === item._id){
                    project.model.list.splice(i,1);

                }
            });
        },

        getAll:function (cb) {

            var promise = $http.get('/api/projects');

            promise.then(function (res) {

                project.model.list = res.data;

                if(cb){
                    cb(res.data);
                }
            });

            return promise;

        }

    };

	return project;
});
