

panaApp.controller("courseHomeCtrl",function($scope,mainFactory,$rootScope,courseHomeFactory,$location,quizMakerFactory){
    if($rootScope.currentCourse==""){
        $location.path('/userHome')
    }
    var joinCoursesArr= mainFactory.getJoinCourses();
     //console.log(joinCoursesArr[0].isJoin);
    var joinCoursesArr=joinCoursesArr;
    // console.log($rootScope.currentCourse);

    $scope.currentTitle=$rootScope.currentCourse;
    $scope.isAddPage=false;
    $scope.isAddForm=false;
    $scope.isShowContent=false;

    $scope.AddPage=function(){
        //alert('hello');
        $scope.isAddForm=false;
        $scope.isShowContent=true;
    }
    $scope.addDataInTree=function(){
        $scope.isAddForm=true;
       // $scope.isAddForm=true;
        $scope.isShowContent=false;
    }

    $scope.isShowPage=false;
    /*$scope.addPage=function(){
        $scope.isAddPage=false;
     $scope.isShowContent=true;
    }*/



    $scope.selectedItem = {};

    $scope.options = {
    };

    $scope.remove = function(scope) {
        scope.remove();
    };

    $scope.toggle = function(scope) {
        scope.toggle();
    };

    $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.items.push({
            id: nodeData.id * 10 + nodeData.items.length,
            title: nodeData.title + '.' + (nodeData.items.length + 1),
            items: []
        });
    };
//Add Page content


    $scope.addCourseContent=function() {

        courseHomeFactory.setCourseHomePage($scope.title, $scope.textArea);

        var a1= courseHomeFactory.getCourseHomePage();
//        console.log(a1);
//        a1.forEach(function(v){
//            console.log(v.title);
//        })
// for(var i=0;i< a1.length;i++) {
//     console.log(a1[i]['title']+"ctrl");
//     console.log((a1[i])['textArea']+"ctrl");
// }
//go to quiz maker
    }
        $scope.go=function(path){

                $location.path(path);

        }
//start quiz
$scope.startQuizInfo=function(){

  $scope.quizs=  quizMakerFactory.getQuizs();
   $scope.quizs.forEach(function(entry){console.log(entry)});
    }

});