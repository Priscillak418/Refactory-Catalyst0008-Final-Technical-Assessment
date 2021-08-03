let validation =()=>{
    let Surname = document.washer.surname;
    let givenName = document.washer.givenname;
    

    //Errors
    let SurnameError = document.getElementById('surnameError');
    let givenNameError = document.getElementById('givennameError');

    //Regular expressions
    var NameReg = /^[A-Z]([a-z])+$/;

    //surname validation
    if (Surname.value.length < 8) {
        SurnameError.innerHTML = ' Name Should be atleast 8 Characters ';
        SurnameError.style = 'color:red; font-size:10px;'
        Surname.style.border = "1px solid red"
        return false;
    } else if (Surname.value.length >= 8 && Surname.value.match(NameReg)) {
        SurnameError.innerHTML = '';
        Surname.style.border = "1px solid green"
    } else if (!(Surname.value.length <= 8 && Surname.value.match(NameReg))) {
        SurnameError.innerHTML = 'Name start with Capital letter ';
        SurnameError.style = 'color:red; font-size:10px;'
        Surname.style.border = "1px solid red"
        return false;
    } else if (Surname.value.length = 0) {
        SurnameError.innerHTML = ''
    }
    //Given name validation
    if (givenName.value.length < 8) {
        givenNameError.innerHTML = ' Name Should be atleast 8 Characters ';
        givenNameError.style = 'color:red; font-size:10px;'
        givenName.style.border = "1px solid red"
        return false;
    } else if (givenName.value.length >= 8 && givenName.value.match(NameReg)) {
        givenNameError.innerHTML = '';
        givenName.style.border = "1px solid green"
    } else if (!(givenName.value.length <= 8 && givenName.value.match(NameReg))) {
        givenNameError.innerHTML = 'Name start with Capital letter ';
        givenNameError.style = 'color:red; font-size:10px;'
        givenName.style.border = "1px solid red"
        return false;
    } else if (givenName.value.length = 0) {
        givenNameError.innerHTML = 'Last name must be filled';
        givenName.style.border = "1px solid red"

    }
}