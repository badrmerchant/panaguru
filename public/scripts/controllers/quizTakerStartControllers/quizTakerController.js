/** badar ahmed sheikh where are you going
 * Created by Badar on 10/10/2014.
 */
panaApp.controller("quizTakerCtrl",function($scope,$rootScope,$location,quizMakerFactory){
   $scope.questions= quizMakerFactory.getQuizs()
    console.log( $scope.questions);
    $scope.currentTitle=$rootScope.currentCourse;
//    alert("hello");
})