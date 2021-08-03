

let form = document.querySelector("#covForm")
let sname = document.covForm.surname;
let gname = document.covForm.givenname;
let Dob = document.querySelector("#dob");
let resd = document.covForm.res;
let occ = document.covForm.occupation;
let nation = document.covForm.nationality;
let fd = document.covForm.field;

var isRequired = (value) => (value === "" ? false : true);
var isBetween = (length, min, max) => length < min || length > max ? false : true;
var isRequire = (value) => (value === "none" ? false : true);  
  
var isNameValid = (number) => {
  var re = /^[A-Z]([a-z])+$/;
  return re.test(number);
};

var showError = (input, message) => {
  // get the form-field element
  var formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  var error = formField.querySelector("small");
  error.textContent = message;
};
var showSuccess = (input) => {
  // get the form-field element
  var formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  var error = formField.querySelector("small");
  error.textContent = "";
};
// Validate the username field
var checksurname = () => {
  let valid = false;
  var min = 1,
    max = 16;
  var surname = sname.value.trim();
 
  if (!isRequired(surname)) {
    showError(sname, " Required field");
    sname.style.border="1px solid red"
  } else if (!isNameValid(surname)) {
    showError(sname, "Incorrect Format");
    sname.style.border="1px solid red"
  } else if (!isBetween(surname.length, min, max)) {
    showError(
       sname ,
      `Username must be between ${min} and ${max} characters.`
    );
    sname.style.border="1px solid red"
  } else {
    showSuccess(sname );
    sname.style.border="1px solid green"
    valid = true;
  }
  return valid;
};

// //validating select
var checkSelect = () => {
  let valid = false;
  var select = fd.value.trim();
  if (!isRequire(select)) {
    showError(fd, "Select Patient Category.");
    fd.style.border="1px solid red"
  } else {
    showSuccess(fd);
    fd.style.border="1px solid grey"
    valid = true;
  }

  return valid;
};
//validating DOB
var checkDob = () =>{
    let valid = false;
    var dateOfBirth = Dob.value.trim();
    if (!isRequired(dateOfBirth)) {
      showError(Dob, "This fill is required");
      Dob.style.border = "1px solid red"  
    }
    else{
        showSuccess(Dob);
        Dob.style.border = "1px solid green"
        valid = true;
    }
    return valid
};

//validating occupation
var checkJob = () =>{
    let valid = false;
    var job = occ.value.trim();
    if (!isRequired(job)) {
      showError(occ, "This fill is required");
      occ.style.border = "1px solid red"  
    }else if (!isNameValid(job)) {
    showError(occ, "This fill is required");
    occ.style.border="1px solid red"
    } 
    else{
        showSuccess(occ);
        occ.style.border = "1px solid green"
        valid = true;
    }
    return valid
};

//validating given name
var checkgiveName =()=>{
  let valid = false;
  var min = 1,
    max = 16;
  var givenname = gname.value.trim();
  if (!isRequired(givenname)) {
    showError(gname, "This fill is required");
    gname.style.border="1px solid red"
  }else if (!isNameValid(givenname)) {
    showError(gname, "This fill is required");
    gname.style.border="1px solid red"
  }else if (!isBetween(givenname.length, min, max)) {
    showError(
      gname ,
      `Username must be between ${min} and ${max} characters.`
    );
    gname.style.border="1px solid red"
  }else {
    showSuccess(gname);
    gname.style.border="1px solid green"
    valid = true;
  }
  return valid;
};

//validating place of residence
var checkPor =()=>{
  let valid = false;
  var min = 1,
    max = 20;
  var por = resd.value.trim();
  if (!isRequired(por)) {
      showError(resd, "This fill is required");
      resd.style.border = "1px solid red"  
    } else if (!isNameValid(por)) {
    showError(resd, "This fill is required");
    resd.style.border="1px solid red"
    }else if (!isBetween(por.length, min, max)) {
    showError(
      resd ,
      `Username must be between ${min} and ${max} characters.`
    );
    resd.style.border="1px solid red"
    }
    else{
        showSuccess(resd);
        resd.style.border = "1px solid green"
        valid = true;
    }
    return valid
};
//validating nationality
var checkNationality =()=>{
  let valid = false;
  var nationality = nation.value.trim();
  if(!isRequired(nationality)){
    showError(nation, "This fill is required");
    nation.style.border = "1px solid red"
  }
  else{
    showSuccess(nation);
    nation.style.border = "1px solid green"
    valid = true;
  }
  return valid
};



form.addEventListener("submit", function (e) {
  // prevent the form from submitting

  // validate forms
  let isSurnameValid = checksurname(),
   isSelectValid = checkSelect(),
   isDobValid = checkDob(),
   isJobValid = checkJob(),
   isGivennameValid = checkgiveName(),
   isPorValid = checkPor(),
   isNationalityValid = checkNationality()




  let isFormValid = isSurnameValid && isSelectValid && isDobValid && isJobValid && isGivennameValid && isPorValid && isNationalityValid;
 
  // submit to the server if the form is valid
  if (!isFormValid) {
    e.preventDefault();
  }
});
