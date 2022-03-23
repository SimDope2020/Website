function formValidation() {
    var fn = document.contact.fname;
    var ln = document.contact.lname;
    var uemail = document.contact.email;
    var unumb = document.contact.number;
    var usub = document.contact.subject;
        if (fname_validation(fn,5,12)) {
            if (lname_validation(ln,5,12)) {
                if (ValidateEmail(uemail)) {
                    if (number_validation(unumb,5,10)){
                        if (subject_validation(usub,10,20)) {

                        }
                    }
                }
            }
        } return false;
    } 
    // function set for first name input field
    function fname_validation(fn,mx,my)
    {
        var fn_len = fn.value.length;
        if (fn_len == 0 || fn_len >= my || fn_len < mx)
    {
        alert("First Name should not be empty / length be between "+mx+" to "+my);
        fn.focus();
        return false;
    }
        return true;
    }
    // function set for last name input field
    function lname_validation(ln,mx,my)
    {
        var ln_len = ln.value.length;
        if (ln_len == 0 || ln_len >= my || ln_len < mx)
    {
        alert("Last Name should not be empty / length be between "+mx+" to "+my);
        ln.focus();
        return false;
    }
        return true;
    }
    // function set for the email input field
    function ValidateEmail(uemail)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
    {
        return true;
    }
        else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
    }
    // function set for the phone number
    function number_validation(unumb)
    { 
        var numbers = /^[0-9]+$/;
        if(unumb.value.match(numbers))
    {
        return true;
    }
        else
    {
        alert('Contact number must be valid / numeric values only');
        unumb.focus();
        return false;
    }
    }
    // function set for subject 
    function subject_validation(usub,mx,my)
    {
        var usub_len = usub.value.length;
        if (usub_len == 0 || usub_len >= my || usub_len < mx)
    {
        alert("Subject should not be empty / length be between "+mx+" to "+my);
        usub.focus();
        return false;
    }
        return true;
    }