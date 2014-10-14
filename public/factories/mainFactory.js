panaApp.factory('mainFactory',function($localstorage,$modal){
    var loginPersonName="";
    var otherCourses=[{id:'0',course:"Physics",venue:"SSUET",isJoin:false},
        {id:'1',course:"Chemistry", venue:"Saylani",isJoin:false},{id:'2',course:"Biology",venue:"SSUET",isJoin:false},{id:'3',course:"computer",venue:"Saylani",isJoin:false},{id:'4',course:"Account",venue:"SSUET"},
        {id:'5',course:"Finance", venue:"saylani",isJoin:false},{id:'6',course:"Islam",venue:"saylani",isJoin:false},{id:'7',course:"Econom",venue:"SSUET",isJoin:false},{id:'8',course:"Stat",venue:"Saylani"},
        {id:'9',course:"MySql",venue:"SSUET",isJoin:false}];
    var createCourseArr=[];
    var joinCoursesArr=[];
    var recommendedCoursesArr=[];
//    var courseObj={title:"Chemistry", class:[
//        {title:"saylani", quiz:[]},
//        {title:"ssuet"}
//    ]};
    function updateData(){
        $localstorage.setObject('user',{courseCreated:createCourseArr,joinCoursesArr:joinCoursesArr,recommendedCoursesArr:recommendedCoursesArr});
    }

    if(!localStorage.user)
        $localstorage.setObject('user',{courseCreated:createCourseArr,joinCoursesArr:joinCoursesArr,recommendedCoursesArr:recommendedCoursesArr});
    else {
        if($localstorage.getObject('user').courseCreated)

            createCourseArr = $localstorage.getObject('user').courseCreated;
        if($localstorage.getObject('user').joinCoursesArr)
            joinCoursesArr = $localstorage.getObject('user').joinCoursesArr;
        if($localstorage.getObject('user').recommendedCoursesArr)
            recommendedCoursesArr = $localstorage.getObject('user').recommendedCoursesArr;
    }
    //////
    var getRecommendedCoursesArr=function(){
        return recommendedCoursesArr
    };
    ///////
    var setCreateCourse=function(course){
        createCourseArr.push(course);
        updateData()


    }
    var getCreateCourse=function(){

        return createCourseArr;
    };


    var  setJoinCourses=function(course){

        joinCoursesArr.push(course);
        updateData();
    }
    var getJoinCourses=function(){console.log("getJoinCoursed");

        return joinCoursesArr;
    }
    var setRecommendCourses=function(course) {
        recommendedCoursesArr=otherCourses.concat(createCourseArr);
        //recommendedCoursesArr.push(course);
        updateData()
    }
    var getRecommendCourses=function(){

        return recommendedCoursesArr;
    }
    return{
        loginPersonName:loginPersonName,
        setCreateCourse:setCreateCourse,
        getCreateCourse:getCreateCourse,
        setJoinCourses:setJoinCourses,
        getJoinCourses:getJoinCourses,
        createCourseArr:createCourseArr,
        recommendedCoursesArr:recommendedCoursesArr,
        joinCoursesArr:joinCoursesArr,
        setRecommendCourses:setRecommendCourses,
        getRecommendCourses:getRecommendCourses,
        otherCourses:otherCourses,
        updateData:updateData,
        getRecommendedCoursesArr:getRecommendedCoursesArr
    };

});
