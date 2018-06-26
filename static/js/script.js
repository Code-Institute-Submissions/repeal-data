function dropdownFunction() {
    document.getElementById("constituency_checker").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("constituency_search");
    filter = input.value.toUpperCase();
    var div = document.getElementById("constituency_checker");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        }
        else {
            a[i].style.display = "none";
        }
    }
}

