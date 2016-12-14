// Finishes the entire transaction
function finish(){
    $("#completionPopup").css("display","block");
}



// This is when we delete a course and it will remove the classes
function deleteCourse(classType, id){
    $("." + classType).css("display","block");
}

// This will select the course that is clicked on
function selectValue(classType, id){
    $("." + classType).css("display","none");
    $("#id" + id).css("display", "block");
    return true;
}

// Adding a course from the search into the other bar
function addCourse(classTypes, ids){
//  Hide on the search side
 $("#").css("display","none");
//  Show up in the other panel
 $("#").css("display","block");
 $("#").css("display","block");
}

function showJc3(){
    $("#JC3search").css("display","none");
    $("#JC3new").css("display","block");
    $("#warningmessage").removeClass("hidden");
    $("#inital").addClass("hidden");
}

function selectCore(){
    $("#selectingCoreMessage").css("display","block");
    $("#warningmessage").css("display","none");
}
$(document)
$("#JC3new").click(function(){
    $("#JC3new").css("background-color","darkgray")
    selectCore();
});