var surName = document.querySelector('#surname');
var givenName = document.querySelector('#given-name');
var dob = document.querySelector('#dob');
var address = document.querySelector('#address');
var occupation = document.querySelector('#occupation');
var nationality = document.querySelector('#nationality');
var gender = document.querySelector('#gender');
var category = document.querySelector('#category');
var form = document.querySelector('#register')

// check for empty inputs
var requiredField = value => value === '' ? false : true;

// check length of input
var inputLength = (length, min, max) => length < min || length > max ? false : true;

//error function
var errorMsg = (input, message) => {
    var formField = input.parentElement;
    var error = formField.querySelector('small');
    error.textContent = message;
};

// Validate the surname
var checkSurname = () => {

    let valid = false;
    var min = 1,
        max = 16;
    var surname = surName.value.trim();

    if (!requiredField(surname)) {
        errorMsg(surName, ' Required field');
    } else if (!inputLength(firstname.length, min, max)) {
        errorMsg(firstName, `Name must be between ${min} and ${max} characters.`)
    } else {
        valid = true;
    }
    return valid;
}

// Validate the given name
var checkGivenname = () => {

    let valid = false;
    var min = 1,
        max = 16;
    var givename = givenName.value.trim();

    if (!requiredField(givename)) {
        errorMsg(givenName, ' Required field');
    } else if (!inputLength(givename.length, min, max)) {
        errorMsg(givenName, `Given name must be between ${min} and ${max} characters.`)
    } else {
        valid = true;
    }
    return valid;
}

var checkDate = () => {

    let valid = false;

    var birthDate = dob.value.trim();

    if (!requiredField(birthDate)) {
        errorMsg(dob, ' Required field');
    } else {
        valid = true;
    }
    return valid;
}

var checkAddress = () => {

    let valid = false;

    var patientAdd = address.value.trim();

    if (!requiredField(patientAdd)) {
        errorMsg(address, ' Required field');
    } else {
        valid = true;
    }
    return valid;
}

var checkOccupation = () => {

    let valid = false;
    var min = 5,
        max = 50;
    var PatientOccup  = occupation.value.trim();

    if (!requiredField(PatientOccup)) {
        errorMsg(occupation, ' Required field');
    } else if (!inputLength(PatientOccup.length, min, max)) {
        errorMsg(occupation, `Username must be between ${min} and ${max} characters.`)
    } else {
        valid = true;
    }
    return valid;
}
var checkNationality = () => {

    let valid = false;
    var min = 5,
        max = 20;
    var PatientNat  = nationality.value.trim();

    if (!requiredField(PatientOccup)) {
        errorMsg(occupation, ' Required field');
    } else if (!inputLength(PatientOccup.length, min, max)) {
        errorMsg(occupation, `Username must be between ${min} and ${max} characters.`)
    } else {
        valid = true;
    }
    return valid;
}


var checkGender = () => {

    let valid = false;

    var patientGender = gender.value.trim();

    if (!requiredField(patientGender)) {
        errorMsg(gender, ' Required field');
    } else {
        valid = true;
    }
    return valid;
}


// submit the form if valid
form.addEventListener('submit', function (e) {

    let isSurnameValid = checkSurname();
        isGivennameValid = checkGivenname();
        isDateValid = checkDate();
        isAddressValid = checkAddress();
        isOccValid = checkOccupation();
        isNatValid = checkNationality();
        isGenderValid = checkGender();  

    let isFormValid = isSurnameValid && 
        isGivennameValid && 
        isDateValid && 
        isAddressValid &&
        isOccValid && 
        isNatValid && 
        isGenderValid;

    if (!isFormValid) {
        e.preventDefault();
    }
});