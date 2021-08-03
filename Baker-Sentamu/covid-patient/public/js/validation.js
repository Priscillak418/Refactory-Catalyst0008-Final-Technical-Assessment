// Test connection
let connect = 'Validation file connecting';
console.log(connect);


//REGISTER WASHER VALIDATIONS
const generalError = document.querySelectorAll('.general-error')

//surname
const surname = document.getElementById('surname');
const surnameError =  document.getElementById('surname-error');

//givename
const givename = document.getElementById('givename');
const givenError =  document.getElementById('givename-error');

//D.O.B
const dob = document.getElementById('dob');
const dobError =  document.getElementById('dob-error');

//Residence
const residence = document.getElementById('residence');
const resiError =  document.getElementById('residence-error');

//Occupation  
const occupation = document.getElementById('occupation');
const occuError =  document.getElementById('occupation-error');

//nationality
const nationality = document.getElementById('nationality');
const nationError =  document.getElementById('nationalityerror');

//Gender
const gender = document.getElementById('gender');
const genderError =  document.getElementById('gender-error');

//Category
const category = document.getElementById('category');
const catError =  document.getElementById('category-error');

//Submit Button sumbit-washer
const pressButton = document.getElementById('register-patient');

//Check for empty fields
let checkEmpty =()=> {
       
    requiredInputs = [surname, givename, dob, residence, occupation, nationality, category]
    errorCounter = 0

    for(let i=0; i<requiredInputs.length; i++){
         if(requiredInputs[i].value==""){
             errorCounter ++
             requiredInputs[i].style.border="1px solid red"
             generalError[i].textContent='This field is required';
         }         
    }

    if(errorCounter === 0){
        pressButton.setAttribute("type", "submit")
    }

    console.log(errorCounter);
}

pressButton.addEventListener('click', checkEmpty)

//Validate Surname
 let surfocusin =()=> {
    surname.style.border="1px solid #ced4da"
    generalError[0].textContent=''
    generalError[1].textContent=''
    generalError[2].textContent=''
    generalError[3].textContent=''
    generalError[4].textContent=''
    generalError[5].textContent=''
    generalError[6].textContent=''
}

let surInput =()=> {
    const nameEx = /^[A-Za-z]+$/

    if((surname.value.length > 1 && surname.value.length <16) && (nameEx.test(surname.value))) {
       surnameError.innerHTML='Looks fine';
       surnameError.style.color='green';
       surname.style.border="1px solid green"

    } else {
        surnameError.innerHTML='Should be between 1 to 16 alphabet characters';
        surnameError.style.color='red';
        surname.style.border="1px solid red"
               
    }
}

let surfocusOut =()=> {
    surname.style.border="1px solid #ced4da"
    surnameError.innerHTML='';
}

surname.addEventListener('focusin', surfocusin)
surname.addEventListener('input', surInput)
surname.addEventListener('focusout', surfocusOut)


//Validate Given Name
 let givenfocusin =()=> {
    givename.style.border="1px solid #ced4da"
}

let givenInput =()=> {
    const givenEx = /^[A-Za-z]+$/

    if((givename.value.length > 1 && givename.value.length <16) && (givenEx.test(givename.value))) {
       givenError.innerHTML='Looks fine';
       givenError.style.color='green';
       givename.style.border="1px solid green"

    } else {
        givenError.innerHTML='Must be 8 characters min starting with capital letter';
        givenError.style.color='red';
        givename.style.border="1px solid red"
               
    }
}

let givenfocusOut =()=> {
    givename.style.border="1px solid #ced4da"
    givenError.innerHTML='';
}

givename.addEventListener('focusin', givenfocusin)
givename.addEventListener('input', givenInput)
givename.addEventListener('focusout', givenfocusOut)