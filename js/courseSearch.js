function resetHiddenCourse(){
    $("#psych1xo3").addClass("hidden");
    $("#psych1xx3").addClass("hidden");
    $("#econ1bo3").addClass("hidden");
    $("#econ1bb3").addClass("hidden");
    $("#JC3search").addClass("hidden");
}

// Handling of form using js taken from stackoverflow http://stackoverflow.com/questions/5384712/capture-a-form-submit-in-javascript
function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    resetHiddenCourse();
    /* do what you want with the form */
    // $(".courseList").removeClass('hidden');

    var searchValue = $("*[name='searchVal']").val();
    switch (searchValue) {
        case "PSYCH 1XO3":
            $("#psych1xo3").removeClass("hidden");
            break;
        case "PSYCH 1XX3":
            $("#psych1xx3").removeClass("hidden");
            break;
        case "ECON 1BO3":
            $("#econ1bo3").removeClass("hidden");
            break;
        case "ECON 1BB3":
            $("#econ1bb3").removeClass("hidden");
            break;
        case "COMPSCI 1JC3":
            $("#JC3search").removeClass("hidden");
            break;
    }

    if(filterOpen && yearSearchVariable && programSearchVariable){
        if(yearSearchVariable == 1 && programSearchVariable == "Psychology"){
            $("#psych1xo3").removeClass("hidden");
            $("#psych1xx3").removeClass("hidden");   
        }
        if(yearSearchVariable == 1 && programSearchVariable == "Economics"){
            $("#econ1bo3").removeClass("hidden");
            $("#econ1bb3").removeClass("hidden");   
        }
        if(yearSearchVariable == 1 && programSearchVariable == "Computer Science"){
            $("#JC3search").removeClass("hidden");
        }
    }

    // You must return false to prevent the default form behavior
    return false;
}



var form = document.getElementById('searchBar');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}