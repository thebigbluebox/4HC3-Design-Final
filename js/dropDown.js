function dropDownFunc(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("show");
}

function filterFunction(inputId,dropdownId) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    div = document.getElementById(dropdownId);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function toggleDiv(id) {
    document.getElementById(id).classList.toggle("show");
}