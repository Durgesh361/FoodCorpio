angular.module('starter.controller',[])

.controller('parentCtrl', function($scope, $ionicModal, $timeout){
	console.log("Parent Control is Running");
	 $scope.hideotp = true;
	 $scope.showotp = function() {
        $scope.hideotp = false;
    };
});