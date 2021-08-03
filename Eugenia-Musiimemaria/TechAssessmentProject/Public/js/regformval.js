//Access the form elements
let surname = document.getElementById("surname")
let givenName = document.getElementById("givenName")
let dob = document.getElementById("dob")
let residence = document.getElementById("residence")
let occupation = document.getElementById("occupation")
let nationality = document.getElementById("nationality")
let field = document.getElementById("field")

//Access the small tags that hold the error string
let errorSurname = document.getElementById("errorSurname")
let errorGivenName = document.getElementById("errorGivenName")
let errordob = document.getElementById("errordob")
let errorResidence = document.getElementById("errorResidence")
let errorOccupation = document.getElementById("errorOccupation")
let errorNationality = document.getElementById("errorNationality")
let errorField = document.getElementById("errorField")

//Regular Expressions
var date = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/
let alphaRegex = /^[A-Za-z\s]+$/

//They should be above 1 year and below 150 years however, the formular is off by 36 months
dobVal = (inputdate) => {
    let date = inputdate.replace(/-/gi, ", ")
    let today = new Date().getTime()
    let bd = new Date(date).getTime()
    return (today - bd)/(1000*60*60*24*30*12) >= 1 && (today - bd)/(1000*60*60*24*30*12) <= 153 ? true : false
}

surname.addEventListener("input", checkSurnameField = () => {
    if (surname.value.length < 1 || surname.value.length > 16 || !surname.value.match(alphaRegex)) {
        surname.style.border = "1px solid red"
        errorSurname.innerHTML = "This field is required"
        errorSurname.style = "color: red"
    } else {
        surname.style.border = "1px solid green"
        errorSurname.innerHTML = ""
    }
})

givenName.addEventListener("input", checkGivenNameField = () => {
    if (givenName.value.length < 1 || givenName.value.length > 16 || !givenName.value.match(alphaRegex)) {
        givenName.style.border = "1px solid red"
        errorGivenName.innerHTML = "This field is required"
        errorGivenName.style = "color: red"
    } else {
        givenName.style.border = "1px solid green"
        errorGivenName.innerHTML = ""
    }
})

dob.addEventListener("input", checkdobField = () => {
    if (!dobVal(dob.value)) {
        dob.style.border = "1px solid red"
        errordob.innerHTML = "This field is required"
        errordob.style = "color: red"
    } else {
        dob.style.border = "1px solid green"
        errordob.innerHTML = ""
    }
})

residence.addEventListener("input", checkResidenceField = () => {
    if (residence.value.length < 1 || residence.value.length > 20 || !residence.value.match(alphaRegex)) {
        residence.style.border = "1px solid red"
        errorResidence.innerHTML = "This field is required"
        errorResidence.style = "color: red"
    } else {
        residence.style.border = "1px solid green"
        errorResidence.innerHTML = ""
    }
})

occupation.addEventListener("input", checkOccupationField = () => {
    if (occupation.value.length < 5 || occupation.value.length > 50 || !occupation.value.match(alphaRegex)) {
        occupation.style.border = ("1px solid red")
        errorOccupation.innerHTML = "This field is required"
        errorOccupation.style = "color: red"
    } else {
        occupation.style.border = "1px solid green"
        errorOccupation.innerHTML = ""
    }
})

nationality.addEventListener("input", checkNationalityField = () => {
    if (nationality.value.length < 5 || nationality.value.length > 20 || !nationality.value.match(alphaRegex)) {
        nationality.style.border = "1px solid red"
        errorNationality.innerHTML = "This field is required"
        errorNationality.style = "color: red"
    } else {
        nationality.style.border = "1px solid green"
        errorNationality.innerHTML = ""
    }
})

field.addEventListener("click", checkSelectField = () => {
    if (field.value == "--Select Category--") {
        field.style.border = "1px solid red"
        errorField.innerHTML = "Select Patient Category"
        errorField.style = "color: red"
    } else {
        field.style.border = "1px solid green"
        errorField.innerHTML = ""
    }
})

// Prevents the form from submitting if any of the fields do not meet the validation criteria
validatePatient = (event) => {
    let val = 0

    if (surname.value.length < 1 || surname.value.length > 16 || !surname.value.match(alphaRegex)) {
        surname.style.border = "1px solid red"
        errorSurname.innerHTML = "This field is required"
        errorSurname.style = "color: red"
        val++
    }

    if (givenName.value.length < 1 || givenName.value.length > 16 || !givenName.value.match(alphaRegex)) {
        givenName.style.border = "1px solid red"
        errorGivenName.innerHTML = "This field is required"
        errorGivenName.style = "color: red"
        val++
    }

    if (!dobVal(dob.value)) {
        dob.style.border = "1px solid red"
        errordob.innerHTML = "This field is required"
        errordob.style = "color: red"
        val++
    }

    if (residence.value.length < 1 || residence.value.length > 20 || !residence.value.match(alphaRegex)) {
        residence.style.border = "1px solid red"
        errorResidence.innerHTML = "This field is required"
        errorResidence.style = "color: red"
        val++
    }

    if (occupation.value.length < 5 || occupation.value.length > 50 || !occupation.value.match(alphaRegex)) {
        occupation.style.border = ("1px solid red")
        errorOccupation.innerHTML = "This field is required"
        errorOccupation.style = "color: red"
        val++
    }

    if (nationality.value.length < 5 || nationality.value.length > 20 || !nationality.value.match(alphaRegex)) {
        nationality.style.border = "1px solid red"
        errorNationality.innerHTML = "This field is required"
        errorNationality.style = "color: red"
        val++
    }

    if (field.value == "--Select Category--") {
        field.style.border = "1px solid red"
        errorField.innerHTML = "This field is required"
        errorField.style = "color: red"
        val++
    }

    if (val > 0) {
        event.preventDefault()
    }
}