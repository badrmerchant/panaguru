/**
 * Created by Badar on 8/30/2014.
 */
panaApp.factory('courseHomeFactory',function($localstorage,$modal) {

    /**
     *
     */
    var courseHomePage=[];
    var addPageArray=[];
    function updateData(){
        $localstorage.setObject('user1',{courseHomePage:courseHomePage,addPageArray:addPageArray});
    }

    if(!localStorage.user)
        $localstorage.setObject('user1',{courseHomePage:courseHomePage,addPageArray:addPageArray});
    else {
        if($localstorage.getObject('user1').courseHomePage)

            courseHomePage = $localstorage.getObject('user1').courseHomePage;
      if ($localstorage.getObject('user1').addPageArray)

           addPageArray=$localstorage.getObject('user1').addPageArray;
    }

    var setCourseHomePage=function(title,textArea){

        courseHomePage.push({title:title,textArea:textArea});
        updateData();
        for(var i=0;i<courseHomePage.length;i++){
            //console.log(i+"index");
           console.log(courseHomePage[i].title+"factory");
            console.log(courseHomePage[i].textArea+"factory");
        }

    }
    var getCourseHomePage=function(){
        return courseHomePage;
    }



    /**
     * Add Page Tab  add title and    now save content  in courseHomeFactory
     */
    var setAddPageArray=function(title,textArea){

        addPageArray.push({title:title,textArea:textArea});
        updateData();
        for(var i=0;i<addPageArray.length;i++){
            console.log(i+"index");
            console.log(addPageArray[i].title);

        }

    }
    var getAddPageArray=function(){
        return addPageArray;
    }


return{
     addPageArray:addPageArray,
    courseHomePage:courseHomePage,
    setCourseHomePage:setCourseHomePage,
    getCourseHomePage:getCourseHomePage,
    setAddPageArray:setAddPageArray,
    getAddPageArray:getAddPageArray,

    updateData:updateData
};

})