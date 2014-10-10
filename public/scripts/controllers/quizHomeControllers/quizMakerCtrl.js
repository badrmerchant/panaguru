panaApp.controller("quizMakerCtrl", function ($scope, mainFactory, $rootScope, courseHomeFactory, $location,quizMakerFactory) {
    $scope.quizMakerHome = "Welcome to Quiz Maker";
    $scope.quizArray11 = [1, 2, 3, 4, 5];
    //$scope.makeQuiztaker = function () {

    $scope.quizArray1 = quizMakerFactory.getQuizs();
   console.log( $scope.quizArray1);
    //Get quizez
//}

    $scope.goToQuizHome = function (path) {alert(
        "saaaaaaaa"
    );
        $location.path(path);

    }

});