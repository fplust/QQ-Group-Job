angular.module('myApp')
	.controller("IndexCtrl",["$scope","$http","$cookies",function($scope, $http, $cookies){
		$http.get("/api/check_login/").success(function(response){
			if(response.status != "success"){
				location.href = "#/login";
			}
		})
		var sexOb = ['保密', '男', '女'];
		var eduOb = ['大专以下', '大专', '本科', '硕士', '硕士以上'];

		$http.get("/api/").success(function(response){
			if(response.status == "success"){
				$scope.email = response.data.email;
				$scope.username = response.data.username;
				$scope.qq = parseInt(response.data.qq);
				$scope.sex = sexOb[response.data.sex];
				$scope.age = response.data.age;
				$scope.yearsOfWorking = response.data.yearsOfWorking;
				$scope.school = response.data.school;
				$scope.education = eduOb[response.data.education];
			}else{
				$T.toast(response.msg)
			}
		}).error(function(){
			$T.toast("服务器错误,请联系系统管理员")
		})
		$scope.submit = function(){
			$http.put("/api/", {
				username: $scope.username,
				qq: $scope.qq,
				display: $scope.display,
				content: $scope.content
			}).success(function(response){
				if(response.status == "success"){
					$T.toast("更新成功");
					location.reload();
				}else{
					$T.toast(response.msg)
				}
			}).error(function(){
				$T.toast("服务器错误,请联系系统管理员")
			})
		}
	}])
	