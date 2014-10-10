
/**
 * Created by Badar on 9/12/2014.
 */

panaApp.factory('quizMakerFactory', function ($localstorage, $modal) {
    var addQuiz;
    var addQuestion=[];
    var quizs=[];
    function updateData(){
        $localstorage.setObject('user2',{quizs:quizs});
    }





    if(!localStorage.user)
        $localstorage.setObject('user2',{quizs:quizs});
    else
        if ($localstorage.getObject('user2').quizs)
          quizs=$localstorage.getObject('user2').quizs;


    var makeQuizTaker=
    {
        'addPages': [],
        addQuiz: [

        ],
      addQuestion: [

        ],
        'addLater': []


    };

    function setQuizs(a) {


        quizs.push(a);
      updateData();

    }
    function getQuizs() {

        updateData();
        return quizs;

    }

    function setAddQuestion(a) {

              addQuestion.push(a);


    }
    function getAddQuestion(){

        return addQuestion;
    }
//console.log(selectedCourseFromJoinedCourses);
    function upDate() {
    }


    return {
        makeQuizTaker:makeQuizTaker,
        setAddQuestion:setAddQuestion,
        getAddQuestion: getAddQuestion,
        getQuizs:getQuizs,
        setQuizs:setQuizs,
        quizs:quizs,
         updateData:updateData
    }


});
