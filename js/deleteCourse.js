var droppedCourses = [];

// This is when we delete a course and it will remove the classes
function deleteCourse(classType, idType) {
    var confirmation = confirm("are you sure you want to delete " + classType);
    if (confirmation) {
        $("." + classType + "C1").css("display", "none");
        $("." + classType + "T1").css("display", "none");
        $("." + classType + "T2").css("display", "none");
        $("." + classType + "T3").css("display", "none");
        $("#cc" + classType).css("display", "none");
        $("#" + idType).css("display", "none");
        droppedCourses.push(classType);
        dropCourse(classType,idType);
    }
}

//This function moves the dropped course to the drop course buckit
function dropCourse(classType,idType){
    $("#cc" + classType + "d").removeClass("hidden");
}

function commitDropCourses(){
    if( droppedCourses.length > 0){
    var confirmation = confirm("Are you sure you want to drop these courses?");
    if (confirmation) {
        droppedCourses.forEach(function(classType){
            $("#cc" + classType + "d").addClass("hidden");
        });
        droppedCourses = [];
    }
    }
}