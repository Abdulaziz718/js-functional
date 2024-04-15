let btnLog = document.getElementById("btn-log")
let btn = document.getElementById("btn")
let btnBrowse = document.getElementById("btn-browse")
let btnSign = document.getElementById("btn-sign")

btnLog.addEventListener("click", (e)=>{
    button = e.target
    if(button.textContent == "Log In"){
        button.textContent = "Successfull!"
    }
    else if(button.textContent == "Successfull!"){
        button.textContent = "Log In"
    }
})

btn.addEventListener("click", (e)=>{
    but = e.target
    if(but.textContent == "Sign Up"){
        but.textContent = "Successfull!"
    }
    else if(but.textContent == "Successfull!"){
        but.textContent = "Sign Up"
    }
})

btnBrowse.addEventListener("click", (e)=>{
    but = e.target
    if(but.textContent == "Browse Web"){
        but.textContent = "Let's Go!"
    }
    else if(but.textContent == "Let's Go!"){
        but.textContent = "Browse Web"
    }
})

btnSign.addEventListener("click", (e)=>{
    but = e.target
    if(but.textContent == "Sign Up"){
        but.textContent = "Not registered!"
    }
    else if(but.textContent == "Not registered!"){
        but.textContent = "Sign Up"
    }
})
