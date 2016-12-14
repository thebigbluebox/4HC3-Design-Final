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
    }
}
