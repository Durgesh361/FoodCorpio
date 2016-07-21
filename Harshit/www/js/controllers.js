angular.module('starter.controllers', [])
/*
.controller('ContactCtrl',function($scope,$stateParams)
{
$scope.contactlist=
	[{
	'id': 1, 'name':'Delhi'
	},
	{
	'id': 2, 'name':'Jalandhar'
	},
	{
	'id': 3, 'name':'Goa'
	},
	{
	'id': 4, 'name':'Varanasi'
	},
	{
	'id': 5, 'name':'Mumbai'
	},
	{
	'id': 6, 'name':'Channai'
	},
	{
	'id': 7, 'name':'Surat'
	}]
$scope.contactfood=
	[{
	'id': 1, 'name':'Dhosa'
	},
	{
	'id': 2, 'name':'Biryani'
	},
	{
	'id': 3, 'name':'Bisi bele bath'
	},
	{
	'id': 4, 'name':'Bonda'
	},
	{
	'id': 5, 'name':'Chicken 65'
	},
	{
	'id': 6, 'name':'Chow mein'
	},
	{
	'id': 7, 'name':'Pizza'
	}]
});
*/
.controller('restaurantctrl',function($scope, $ionicModal, $timeout){
	console.log("Page is Working");
	//restaurant_menu
	$scope.restaurant = [
		{ image : 'img/McDonalds.jpg', title : 'McDonald', time : '45', price : '150'},
		{ image : 'img/Subway.jpg', title : 'Subway', time : '30', price : '200'},
		{ image : 'img/Domino.jpg', title : 'Domino', time : '30', price : '250'},
		{ image : 'img/Sagar_Ratna.jpg', title : 'Sagar Ratna', time : '30', price : '100'},
		{ image : 'img/Pizza_Hut.jpg', title : 'Pizza Hut', time : '20', price : '300'},
	];

	//Model
	$ionicModal.fromTemplateUrl('templates/restaurant.html',{
		scope:$scope}).then(function(modal){
			$scope.modal=modal;
		});
		$scope.openModal=function(){
			$scope.modal.show();
		};
		$scope.closeModal=function(){
			$scope.modal.hide();
		};


    $scope.user= {
        min:30,
        max:500,
        value:00
    }

});