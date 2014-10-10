/**
 * Created by Badar on 9/3/2014.
 */
panaApp.controller("createQuizCtrl", function ($scope, mainFactory, $rootScope, courseHomeFactory, $location, quizMakerFactory) {
   $scope.quizs=quizMakerFactory.guizs;
    //$scope.quizs;
    $scope.createQuiz=function(){
        quizMakerFactory.getQuizs().push($scope.obj);
        $scope.quizs=quizMakerFactory.getQuizs();
        quizMakerFactory.currentQuizIndex=quizMakerFactory.getQuizs().indexOf($scope.obj);
        $scope.obj={};
        $location.path('/addQuestion')
    };
    /*$scope.quizTitle = null;
    $scope.quizDescription = null;
    $scope.passingScore = null;
    $scope.proctoringKey = null;
    $scope.duration = null;
    $scope.noOfQuizAttemp = 0;
    // selectedCourseFromJoinedCourses['addQuiz']['quizTitle']=$scope.quizTitle;
    //var a = quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0]['quizTitle'];
   // console.log(a);

    var a = {
        quizTitle: "HTML",
        quizDescription: "WHAT IS STAND FOR HTML",
        passScore: "60",
        proctoringKey: "123",
        duration: "",
        'addQuestion': [
            {

                quizTitle: "MULTIPLE",
                questionTitle: "CSS3",
                question: "CSS3 STANDS FOR WHAT?",
                writeAnswer: ['SINGLE SELECT'],
                questionType: "RADIO"
            }
        ]};
    var sampQues = {
        quizTitle: "hrtghf",
        questionTitle: "CSShfghfg3",
        question: "CSS3 fghfghfg FOR WHAT?",
        writeAnswer: ['INGLE fSELECT'],
        questionType: "RADIO"
    };

    $scope.saveQuiz = function () {
        console.log("Form data: ", $scope.obj);
        quizMakerFactory.setAddQuiz($scope.obj);
        //console.log("quiz array: ", quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz']);
        $location.path('/addQuestion');

        //add questios
        *//*quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0].addQuestion.push(sampQues);
         console.log(quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0]);*//*
    };


    *//**
     *
     *
     *
     * create
     * Quiz
     *//*

    $scope.go = function (path) {
        $location.path(path);

    }*/
});