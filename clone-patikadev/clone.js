
let email="b.busraayilmaz@gmail.com"
let password="12345"

localStorage.setItem("email",email)
localStorage.setItem("password",password)

let inputEmailDOM = document.querySelector("#exampleInputEmail1")
let inputPasswordDOM = document.querySelector("#exampleInputPassword1")

let btnDOM = document.querySelector('#btnlogin')

btnDOM.addEventListener('click', check)

let SDOM= document.querySelector('#success')
let EDOM= document.querySelector('#error')

let option ={
    animation:true,
    delay:2000
};

var successElement = new bootstrap.Toast(SDOM, option)
var errorElement = new bootstrap.Toast(EDOM, option)



function check(){
    if(inputEmailDOM.value== localStorage.getItem("email") && inputPasswordDOM.value== localStorage.getItem("password") ) {
        successElement.show();
        console.log("dfdd")
    } else{
        errorElement.show();
        console.log("dfdd64656")
    }

}

