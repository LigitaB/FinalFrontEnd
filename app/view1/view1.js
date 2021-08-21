'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope','$http' ,function ($scope, $http) {
        var myvar1 = 10; // lokālais mainīgais
        console.log($scope);
        $scope.myvar2 = 20; // definēts skopā, tāpēc parādīs frontend
        $scope.myvar2 = $scope.myvar2 + 5;


        $scope.showAlert = function () {
            alert('abc');

        }
        $http.get("https://murmuring-scrubland-99528.herokuapp.com/api/rest/Account.svc/accounts")
            .then(function (response) {
                $scope.arrRec = response.data;
                console.log($scope.arrRec);
            }).catch(function (error) {
            console.log(error);
        });
    }]);