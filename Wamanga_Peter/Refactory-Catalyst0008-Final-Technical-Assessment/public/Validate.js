// Declare variables to pick inputs from form
var surName = document.getElementById('surName');
var givenName = document.getElementById('givenName');
var dob = document.getElementById('dob');
var address = document.getElementById('address');
var occupation = document.getElementById('occupation');
var nationality = document.getElementById('nationality');




//for the Error IDs
var surNameError = document.getElementById('surNameError');
var givenNameError = document.getElementById('givenNameError');
var dobError = document.getElementById('dobError');
var addressError = document.getElementById('addressError');
var occupationError = document.getElementById('occupationError');
var nationalityError = document.getElementById('nationalityError');


// // For the regular expressions to be used 
var nameReg = /([A-Za-z]){1,16}/;
var addressReg = /([A-Za-z]){1,20}/;
var occupationReg = /([A-Za-z]){5,50}/;
var nationalityReg = /([A-Za-z]){5,20}/;



//then we create a function that will be using the above variables to validate

let validateform =() => {   
    // This is for surName validation
    if (!(surName.value.match(nameReg))) {
    surNameError.innerHTML = ' This field is required ';
    surName.style.border = "1px solid red"
    return false;
    } else {
        surNameError.innerHTML = '';
        surName.style.border = "1px solid green"
    } 
    
    if (!(givenName.value.match(nameReg))) {
        givenNameError.innerHTML = ' This field is required ';
        givenName.style.border = "1px solid red"
        return false;
        } else {
            givenNameError.innerHTML = '';
            givenName.style.border = "1px solid green"
        } 
   
    //Date of birth validation
    if(dob.value==""  ){
        dob.style.border = "1px solid red"
        dobError.innerHTML ="This field is required"
        return false;
        } else {
        dob.style.border = "1px solid green"
        dobError.innerHTML =""    
            }   

    //This is for the address validation
    if (!(address.value.match(addressReg))) {
        addressError.innerHTML = ' This field is required ';
        address.style.border = "1px solid red"
        return false;
        } else {
            addressError.innerHTML = '';
            address.style.border = "1px solid green"
        } 
   //occupation
   if (!(occupation.value.match(occupationReg))) {
    occupationError.innerHTML = ' This field is required ';
    occupation.style.border = "1px solid red"
    return false;
    } else {
        occupationError.innerHTML = '';
        occupation.style.border = "1px solid green"
    }

   //nationality
   if (!(nationality.value.match(nationalityReg))) {
    nationalityError.innerHTML = ' This field is required ';
    nationality.style.border = "1px solid red"
    return false;
    } else {
        nationalityError.innerHTML = '';
        nationality.style.border = "1px solid green"
    }

                               
  
    //GENDER
    if(gender.value== ''  ){
        gender.style.border = "1px solid red"
        genderError.innerHTML ="This field is required"
    return false;
    } 
    else {
        gender.style.border = "1px solid green"
        genderError.innerHTML ='' 
        
            } 

 
  

return true;
}



