/*(function () {
	var mod = angular.module('crls_angular', [chart.js]);

	mod.controller('StatsController', function($scope, $http) {
		$http({
			method:'GET', url:'/stats'
		}).then(function successCallback(res) {
			$scope.nbQuestions = res.data.nbQuestions;
		},
		function errCallback(res) {
		});
	});
})();*/
angular.module("app", ["chart.js"])

  .controller("LineCtrl", function ($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })

  .controller("BarCtrl", function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  });

