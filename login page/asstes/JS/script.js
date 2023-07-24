const usernames = [
    admin01,
    admin02,
    admin03
]
const passwords = [
    123,
    234,
    345,
]
let username01 = admin01
let password01 = 123
let username02 = admin02
let password02 = 234
let username03 = admin03
let password03 = 345
let usernameEl = document.getElementById("Username")
let passwordEl = document.getElementById("Password")
let loginBtn = document.getElementById("Login-btn")

loginBtn.addEventListener("click",function login(){
    if (username01==password01 || username02==password02 || username03==password03 ) {
        this.innerHTML
        
    }
    else{
        prompt("you still have", counter,"attempts")
    }
})

