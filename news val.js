function newsValidation() {
    var fln = document.forms["newsf"]["name"].value;
    if (fln == "") {
        alert("Name must be filled out!");
        return false;
    }
    var mail = document.forms["newsf"]["mail"].value;
    if (mail == "") {
        alert("Email must be filled out!");
        return false;
    } 
}