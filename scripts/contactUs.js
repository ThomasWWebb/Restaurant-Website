function isEmpty(checkString) {
    if (checkString == "") {
        return true;
    }
    return false;
}

function isNumeric(num) {
    return !isNaN(num) && isFinite(num);
}

function isInteger(num) {
    if (isNumeric(num)) {
        return Number.isInteger(parseFloat(num))
    }
    return false;
}

function validateForm() {
    var validForm = true;
    var name = document.forms["contact-form"]["name"].value;
    if (isEmpty(name) || !isNaN(name)) {
        document.forms["contact-form"]["name"].className = "form-control is-invalid";
        validForm = false;
    } else {
        document.forms["contact-form"]["name"].className = "form-control is-valid";
    }

    var email = document.forms["contact-form"]["email"].value;
    if (isEmpty(email) || !isNaN(email) || email.includes("@") == -1) {
        document.forms["contact-form"]["email"].className = "form-control is-invalid";
        validForm = false;
    } else {
        document.forms["contact-form"]["email"].className = "form-control is-valid";
    }

    var phoneNum = document.forms["contact-form"]["phone"].value;
    if (!isEmpty(phoneNum)) {
        if (!(/^\d+$/.test(phoneNum))) {
            document.forms["contact-form"]["phone"].className = "form-control is-invalid";
            validForm = false;
        } else {
            document.forms["contact-form"]["phone"].className = "form-control is-valid";
        }
    } else {
        document.forms["contact-form"]["phone"].className = "form-control";
    } 

    document.forms["contact-form"]["reason-for-inquiry"].className = "form-control is-valid";

    var additionalInfo = document.forms["contact-form"]["additional-info"].value;
    if (!isEmpty(additionalInfo)) {
        document.forms["contact-form"]["additional-info"].className = "form-control is-valid";
    } else {
        document.forms["contact-form"]["additional-info"].className = "form-control";
    }

    if(!document.getElementById('choice-no').checked && !document.getElementById('choice-yes').checked) {
        document.getElementById('must-select-radio').style.display = "block";
        validForm = false;
    } else {
        document.getElementById('must-select-radio').style.display = "none";
    }

    console.log(document.forms["contact-form"]['day-choice']);
    var minChecked = false
    for (var index = 0; index < document.forms["contact-form"]['day-choice'].length; index++) {
        if (document.forms["contact-form"]['day-choice'][index].checked) {
            minChecked = true;
        }
    }
    if (!minChecked) {
        document.getElementById('must-select-days').style.display = "block";
        validForm = false;
    } else {
        document.getElementById('must-select-days').style.display = "none";
    }
    return validForm;
}

function submitForm() {
    if (validateForm()) {
        document.getElementById('success-submit').style.display = "block";
    }
    return false
}