/**
 * Created by Badar on 9/4/2014.
 */
panaApp.controller("addQuestionCtrl", function ($scope, mainFactory, $rootScope, courseHomeFactory, $location, quizMakerFactory) {
    $scope.questions=quizMakerFactory.makeQuizTaker;
   var questionArray=[];
    $scope.arrGroupQuestion = [];
    $scope.go = function (path) {

        location.path(path);
    };


//    $scope.add1 = function () {
//        //console.log(a);
//        objectAdd1 = {};//alert("badar ahmed sheikh");
//        $scope.arrGroupQuestion.push(objectAdd1);
//    };


    /**
     * add true and false question add in quizMakerFactory
     */
//    $scope.saveBoolean = function () {
//        alert("boolean");
//        //questionArray.push($scope.obj);
//        //quizMakerFactory.selectedCourseFromJoinedCourses.addQuestion($scope.obj);
//       var a=quizMakerFactory.setAddQuestion($scope.obj)
//        quizMakerFactory.setAddQuestion(a);
//
//    };

    $scope.quizs=quizMakerFactory.quizs;
    $scope.saveQuestion = function () {console.log("ssss");
        quizMakerFactory.quizs[quizMakerFactory.currentQuizIndex].questions.push($scope.obj);
        $scope.obj={};
    };




/**
     * Multiple  choice question add in quizMakerFactory
     */

    $scope.checked = false;

    $scope.$watch('checked', function () {

        if ($scope.checked == true) {
            $scope.obj.quesType = "Single select";

        }
        else {
            $scope.obj.quesType = "Multiple select";

        }
    });

    $scope.xcv=function(){
        $scope.multipleChoice=false;
        $scope.showQuestionType=true;
    }
//
//    $scope.saveMultiple = function () {
//
//     quizMakerFactory.quizs[quizMakerFactory.currentQuizIndex].questions.push($scope.obj);
//     $scope.obj={};
//
//        //questionArray.push($scope.obj);
//    var a=$scope.obj;
//
//        quizMakerFactory.setAddQuestion(a);
////        $scope.obj = {
////            "quesType": "Multiple select",
////            "answers": []
////        };
//
//    }
//        $scope.makeFullQuizData=function(){
//          //  quizMakerFactory.setAddQuestion(questionArray);
//          quizMakerFactory.makeQuizTaker.addQuiz=quizMakerFactory.getAddQuiz();
//
//          quizMakerFactory.makeQuizTaker.addQuestion=quizMakerFactory.getAddQuestion();
//
//
//        }





    /**
     * Group  Question has   boolean and multiple
     */


})