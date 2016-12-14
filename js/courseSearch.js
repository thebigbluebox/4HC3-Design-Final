// Handling of form using js taken from stackoverflow http://stackoverflow.com/questions/5384712/capture-a-form-submit-in-javascript
function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    
    /* do what you want with the form */
    $(".courseList").removeClass('hidden');
    // You must return false to prevent the default form behavior
    return false;
}

var form = document.getElementById('searchBar');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}