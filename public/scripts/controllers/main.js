panaApp.controller('loginCtrl', function($scope , $facebook,$location,mainFactory,$localstorage,$rootScope) {


    $scope.isLoggedIn = false;
    $scope.login = function() {
        $facebook.login().then(function() {
            refresh();
        });
    }
    function refresh() {
        $facebook.api("/me").then(
            function(response) {console.log(response.name);
                $scope.welcomeMsg = "Welcome " + response.name;
                mainFactory.loginPersonName=$scope.welcomeMsg;
                $scope.isLoggedIn = true;
                $scope.loginUser=$location.path('/userHome');
            },
            function(err) {
                $scope.welcomeMsg = "Please log in";
            });
    }
    // refresh();
});
panaApp.controller('mainHomeCtrl',function($scope,mainFactory){
    $scope.loginPersonName =mainFactory.loginPersonName;
    $scope.IsCreateCourse = true;
    $scope.createCourse="Create Course";


});
panaApp.controller("createCourseCtrl",function($rootScope,$scope,$location,mainFactory){

    //$scope.loginPersonName =mainFactory.loginPersonName;
    $scope.IsCreateCourse = true;
    $scope.createCourse="Create Course";
    $scope.createCourseBox = true;
    $scope.saveCourseBox = false;
    $scope.AddNCourseName = "";


    $scope.saveCourse = function(){


        $scope.saveCourseBox = true;
        $scope.createCourseBox = false;
        mainFactory.setCreateCourse({course:$scope.AddNCourseName,venue:""});
        mainFactory.setRecommendCourses({course:$scope.AddNCourseName,venue:""});


    }
    $scope.backToUserHome = function(){

        $location.path("/userHome");
    }
    $scope.backToCreateCourse = function(){
        $scope.createCourseBox = true;
        $scope.saveCourseBox = false;
        $scope.AddNCourseName = "";
    }

    $scope.passFeatureCode = 2;
    $scope.IsCode = true;


    /*------------verify feature pass code start */
    $scope.passwordVerify = function(key){
        if($scope.passFeatureCode === key) {
//
            $scope.IsCode = false;
        }
    }
    /*-----------verify feature pass code end------------*/

});
panaApp.controller("userHomeCtrl",function ($rootScope,$scope,$routeParams,$location,mainFactory,$localstorage,$filter) {
        $scope.loginPersonName = mainFactory.loginPersonName;
        $localstorage.set('name', 'Badar');
        $scope.otherCourses=mainFactory.otherCourses;

        $scope.getCreateCourse = mainFactory.getCreateCourse();
        $scope.createCourseArr = mainFactory.createCourseArr;

        $scope.recommendedCourses = mainFactory.getRecommendCourses();
        $scope.recommendedCoursesArr = mainFactory.recommendedCoursesArr;


        $scope.joinCoursesArr = mainFactory.joinCoursesArr;


        $scope.IsCreateCourse = true;

        $scope.goToCourseList = function () {
        };
        $scope.setJoinedCourse = function (index) {
            $rootScope.currentCourse=mainFactory.joinCoursesArr[index];
            console.log("currentCourse:"+$rootScope.currentCourse);
            $location.path("courseHomePage");
        };

// serch for course
        $scope.find = "";
        $scope.showSearch=false;
        $scope.newItems = (mainFactory.getRecommendCourses()).slice(0);

//    $scope.$watch('find', function (newVal) {
//        $scope.showSearch=false;
//        $scope.newItems = $filter('filter')($scope.recommendedCourses, newVal);
//        $scope.showSearch=false;
//   })


        /*$scope.search = function () {
         $scope.showSearch=true;
         $scope.newItems =  $filter('filter')( $scope.recommendedCourses,$scope.find)
         console.log($scope.find);
         console.log($scope.newItems);
         }*/
        document.getElementById('search').addEventListener('keydown',function(e){
            //console.log((e.keyCode|| e.which));console.log(e+"badar");
            if((e.keyCode|| e.which)===13){
                $scope.$apply(function(){
                    $scope.showSearch=true;
                    $scope.newItems =  $filter('filter')( $scope.recommendedCourses,$scope.find)
                });
                console.log($scope.find);
                console.log($scope.newItems);
            }else{
                $scope.showSearch=false;
            }
        },true);

        /*Joined Courses*/












        $scope.getClasses = function (courseId) {
            if(!courseId.isJoin){
                mainFactory.getRecommendedCoursesArr().forEach(function(obj){
                    if(obj.id==courseId.id){
                        obj.isJoin=true;
                        mainFactory.joinCoursesArr.push(obj);
                        mainFactory.updateData();
                    }
                });
            }
            else{
                console.log("cannot join again");
            }
            //  mainFactory.getCreateCourse();
//            for (var i = 0; i <= $scope.createCourseArr.length; i++) {
//                var a= $scope.createCourseArr[i] ;
//                if (a.course == courseId.course)
//                {
//                    console.log(  "true"+i);
//                }
//                else
//                {
//                    console.log("false" +i);
//                }
//
//
//                console.log($scope.createCourseArr.indexOf(courseId));
//                console.log("NOT FOUND IN  CREATE so  you can add in join");
//                mainFactory.getCreateCourse();
//                mainFactory.getJoinCourses();
////            }
//            for(var a =0;a<=$scope.otherCourses.length;a++) {
//               console.log(($scope.otherCourses[a]).course);
//              if ($scope.otherCourses[a].course == courseId.course ) {
//              console.log(" NOT JOINARR so  you can add in join array");
//              //console.log($scope.joinCoursesArr.indexOf(courseId));
//
//                  alert("wowo");
//                   mainFactory.setJoinCourses(courseId);
//                  // mainFactory.setJoinCourses(courseId);
//                   $('#myModal').modal('show');
//                }
//               else {
//                   console.log("already joined22222222222222222222222222");
//               }
//
//            }

            // mainFactory.setJoinCourses(courseId);
//
//
            /*function findById(source, id) {
                source.forEach(function(obj){
                    if(obj.id==id){
                        return obj;
                    }
                });
                *//*return source.filter(function( obj ) {
                    // coerce both obj.id and id to numbers
                    // for val & type comparison
                    return obj.id === id;
                })[ 0 ];*//*
            }*/
                //alert("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                // courseId.isJoin=true;
                //courseId.isJoin=true;
                //$scope.joinCoursesArr[0]=courseId;
                //console.log($scope.recommendedCoursesArr);
                //$scope.recommendedCoursesArr[0].isJoin=true;
                //mainFactory.getRecommendCourses();
//                var  give = function(){
//                    return findById( $scope.recommendedCoursesArr,courseId.id);
//                };
                //var  give = findById(mainFactory.getRecommendedCoursesArr(),courseId.id);
                //console.log(give());
                //give.isJoin=true;
                //mainFactory.setJoinCourses(give);
                // var check=findById($scope.joinCoursesArr,corseId.id);
                // if(result==false){mainFactory.setJoinedCourse(result)}     // mainFactory.setJoinedCourse(courseId);
                //console.log(give.id);

                //console.log(give.course);
                //console.log(give.isJoin);
            //else console.log("cannot join again");
            // console.log(check.id);
            // console.log(check.id);
            // console.log(check.course);console.log(check.venue);


        }



    }
);
