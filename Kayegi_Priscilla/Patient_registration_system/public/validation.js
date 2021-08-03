let validation =()=>{
    let Surname = document.washer.surname;

    //Errors
    let SurnameError = document.getElementById('surnameError');

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
}