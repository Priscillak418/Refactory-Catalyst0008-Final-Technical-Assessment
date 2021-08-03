// accessing elements by name
var surname = document.forms["regform"]["surname"];
var givenname = document.forms["regform"]["givenname"];
var dob = document.forms["regform"]["dob"];
var por = document.forms["regform"]["por"];
var occupation = document.forms["regform"]["occupation"];
var category = document.forms["regform"]["category"];
var nationality = document.forms["regform"]["nationality"];

// accessing error  elements by id
var snameErr = document.getElementById("snameErr");
var gnameErr = document.getElementById("gnameErr");
var dobErr = document.getElementById("dobErrr");
var porErr = document.getElementById("porErr");
var occupErr = document.getElementById("occupErr");
var natErr = document.getElementById("natErr");
var catErr = document.getElementById("catErr");

//  regular expressions
var namereg = /^[A-Za-z]+$/;



var Validate =()=>{
    
    // validating Surname
    if(surname.value ==''){
        surname.style.border="1px solid red";
        snameErr.textContent = "This field is Required";
        return false;
    } else if(fullname.value.length <1 || fullname.value.length >16){
        fullname.style.border="1px solid red";
        name_error.textContent = "Characters must be between 1 and 16";
        return false;
    } else if(!fullname.value.match(namereg)){
        surname.style.border="1px solid red";
        snameErr.textContent = "Invalid entry";
        return false;
    }else{
        surname.style.border="1px solid green";
        snameErr.textContent = "";
        surname.focus();
    }

    // Validating givenname
    if(givenname.value ==''){
        givenname.style.border="1px solid red";
        gnameErr.textContent = "This field is Required";
        return false;
    } else if(givenname.value.length <1 || givenname.value.length >16){
        givenname.style.border="1px solid red";
        gnameErr.textContent = "Characters must be between 1 and 16";
        return false;
    } else if(!givenname.value.match(namereg)){
        givenname.style.border="1px solid red";
        gnameErr.textContent = "Invalid entry";
        return false;
    }else{
        givenname.style.border="1px solid green";
        gnameErr.textContent = "";
        givenname.focus();
    }
    
   

    // validating dateofbirth
    if(dob.value ==''){
        dob.style.border= "1px solid red";
        dobErr.textContent = "This field is Required";
        return false;
    }else{
        dob.style.border= "1px solid green";
        dobErr.textContent = "";
        dob.focus();
     
    }
    
    // validating place of Residence
    if(por.value ==''){
        por.style.border="1px solid red";
        porErr.textContent = "This field is Required";
        return false;
    } else if(por.value.length <1 || por.value.length >20){
        por.style.border="1px solid red";
        porErr.textContent = "Characters must be between 1 and 20";
        return false;
    } else if(!por.value.match(namereg)){
        por.style.border="1px solid red";
        porErr.textContent = "Invalid entry";
        return false;
    }else{
        por.style.border="1px solid green";
        porErr.textContent = "";
        por.focus();
    }
    
 
    // validating occupation
    if(occupation.value ==''){
        occupation.style.border="1px solid red";
        occupErr.textContent = "This field is Required";
        return false;
    } else if(occupation.value.length <5 || occupation.value.length >50){
        occupation.style.border="1px solid red";
        occupErr.textContent = "Characters must be between 5 and 50";
        return false;
    } else if(!fullname.value.match(namereg)){
        occupation.style.border="1px solid red";
        occupErr.textContent = "Invalid entry";
        return false;
    }else{
        occupation.style.border="1px solid green";
        occupErr.textContent = "";
        occupation.focus();
    }


     // validating nationality
     if(nationality.value ==''){
        nationality.style.border="1px solid red";
        natErr.textContent = "This field is Required";
        return false;
    } else if(nationality.value.length <5 || nationality.value.length >50){
        occupation.style.border="1px solid red";
        natErr.textContent = "Characters must be between 5 and 50";
        return false;
    } else if(nationality.value.match(namereg)){
        nationality.style.border="1px solid red";
        natErr.textContent = "Invalid entry";
        return false;
    }else{
        nationality.style.border="1px solid green";
        natErr.textContent = "";
        nationality.focus();
    }

//    validating category
if(this.category.value==""){
    catErr.textContent = "This field is Required";
    this.gcategory.style.border="1px solid red";
    this.category.focus();
    return false;
    
}else{
    category.style.border="1px solid green";
    catErr.textContent = "";
    category.focus();
}

}

