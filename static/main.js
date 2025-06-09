window.onload = function () {
    //Reference the DropDownList.
    var year = document.getElementById("year-dropdown");

    //Loop and add the Year values to DropDownList.
    for (var i = 2026; i <= 2035; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        year.appendChild(option);
    }
};