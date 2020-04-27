function check(form) {

    if (form.userid.value == "Tanguy" && form.pwd.value == "Tanguy") {

        return true;
    } else {
        alert("Error Password or Username")
        return false;
    }
}