// Finishes the entire transaction
function finish() {
    $("#completionPopup").css("display", "block");
}



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

// This will select the course that is clicked on
function selectValue(classType, id) {
    $("." + classType).css("display", "none");
    $("#id" + id).css("display", "block");
    return true;
}

// Adding a course from the search into the other bar
function addCourse(classTypes, ids) {
    //  Hide on the search side
    $("#").css("display", "none");
    //  Show up in the other panel
    $("#").css("display", "block");
    $("#").css("display", "block");
}

function showJc3() {
    $("#JC3search").css("display", "none");
    $("#JC3new").css("display", "block");
    $("#warningmessage").removeClass("hidden");
    $("#inital").addClass("hidden");
    $("#numberCoursesLeft").html("1");
    $("#finishButton").removeClass("red");
}

$("#JC3new").click(function () {
    $("#JC3new").css("background-color", "darkgray")
    selectCore();
    $(".JC3C1").css("display", "block");
});

function selectCore() {
    $("#selectingCoreMessage").css("display", "block");
    $("#warningmessage").css("display", "none");
}

// These two variables will determine if the hover below will be set
var C1 = true;
var T = true;
$(".JC3C1").click(function () {
    $(".JC3C1").css("color", "gray")
    hoverByClass("JC3C1", "#BAF2BB", "#BAF2BB");
    // disable hover coloring
    $(".JC3T1").css("display", "block");
    $(".JC3T2").css("display", "block");
    $(".JC3T3").css("display", "block");
    $("#selectingCoreMessage").css("display", "none");
    $("#selectinTutorialMessage").css("display", "block");
});

$(".JC3T1").click(function () {
    $(".JC3T1").css("color", "gray")
    hoverByClass("JC3T1", "#F2E2BA", "#F2E2BA");
    // disable hover coloring
    $(".JC3T2").css("display", "none");
    $(".JC3T3").css("display", "none");

    $("#numberCoursesLeft").html("0");
    $("#finishButton").addClass("red");
    $("#inital").css("display", "block");
    $("#JC3new").css("background-color", "#27AE60")
});

$(".JC3T2").click(function () {
    $(".JC3T2").css("color", "gray")
    hoverByClass("JC3T2", "#F2E2BA", "#F2E2BA");
    // disable hover coloring
    $(".JC3T1").css("display", "none");
    $(".JC3T3").css("display", "none");

    $("#numberCoursesLeft").html("0");
    $("#finishButton").addClass("red");
    $("#inital").css("display", "block");
    $("#JC3new").css("background-color", "#27AE60")
});

$(".JC3T3").click(function () {
    $(".JC3T3").css("color", "gray")
    hoverByClass("JC3T1", "#F2E2BA", "#F2E2BA");
    // disable hover coloring
    $(".JC3T1").css("display", "none");
    $(".JC3T2").css("display", "none");

    $("#numberCoursesLeft").html("0");
    $("#finishButton").addClass("red");
    $("#inital").css("display", "block");
    $("#JC3new").css("background-color", "#27AE60")
});

// code sourced from http://stackoverflow.com/questions/12786810/hover-on-element-and-highlight-all-elements-with-the-same-class
function hoverByClass(classname, colorover, colorout = "transparent") {
    var elms = document.getElementsByClassName(classname);
    for (var i = 0; i < elms.length; i++) {
        elms[i].onmouseover = function () {
            for (var k = 0; k < elms.length; k++) {
                elms[k].style.backgroundColor = colorover;//colorover;
            }
        };
        elms[i].onmouseout = function () {
            for (var k = 0; k < elms.length; k++) {
                elms[k].style.backgroundColor = colorout;
            }
        };
    }
}

hoverByClass("JC3C1", "yellow", "#BAF2BB");

hoverByClass("JC3T1", "yellow", "#F2E2BA");
hoverByClass("JC3T2", "yellow", "#F2E2BA");
hoverByClass("JC3T3", "yellow", "#F2E2BA");


//hoverByClass("","yellow");