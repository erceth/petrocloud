angular.module("app",["ui.router","controller.home","controller.userDetail","controller.postDetail"]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"templates/home.html",controller:"homeCtrl"}).state("post",{url:"/post/:postID",templateUrl:"templates/postDetail.html",controller:"postDetailCtrl"}).state("user",{url:"/user/:userID",templateUrl:"templates/userDetail.html",controller:"userDetailCtrl"})}]).controller("AppCtrl",["$scope",function(e){e.test="eric"}]),angular.module("controller.home",["service.user"]).controller("homeCtrl",["$scope","User",function(e,t){e.home="no place like it!",t.getUsers()}]),angular.module("controller.postDetail",[]).controller("postDetailCtrl",["$scope",function(e){e.home="post"}]),angular.module("controller.userDetail",[]).controller("userDetailCtrl",["$scope",function(e){e.home="user"}]),angular.module("service.user",[]).service("User",["$http",function(e){return{getUsers:function(){console.log("calling all users")}}}]);