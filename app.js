//
// Define the 'app' module.
//
var app = angular.module('app', []);

//
// Application controller.
//
app.controller('AppCtrl', ['$scope', function($scope) {

        //
        // Setup the application data-model.
        //
        $scope.dataBindingTest = "Hello computer!";
    }]
);
