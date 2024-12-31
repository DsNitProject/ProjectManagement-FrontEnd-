
const $ = document
let registerForm =  $.getElementById("register-form")
let usernameInput = $.getElementById("username-input")
let emailInput = $.getElementById("email-input")
let passwordInput = $.getElementById("password-input")
let boxNumberInput = $.getElementById("boxNumber-input")
let boxNumber = $.getElementById("boxNumber")
let workExperienceInput = $.getElementById("workExperience-input")
let cancelButton = $.getElementById("cancel-button")

//  ============================================================================== 

registerForm.addEventListener("submit" , even=>{
    even.preventDefault()
    let userInfo = {
        username : usernameInput.value ,
        email : emailInput.value ,
        password : passwordInput.value ,
        proficiency :[],
        workExperience : workExperienceInput
    }

    let proficiencysInfo = $.querySelectorAll(".proficiency-input")
    proficiencysInfo.forEach(info=>{
        if (info.value != ""){
            userInfo.proficiency.push(info.value)
        }
    })

    fetch("" , {
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(userInfo)
    })
    .then((res)=>res.text())
    .then((data)=>console.log(data))
})

boxNumberInput.addEventListener("change" , function(){
    boxNumber.style.display = "flex"
    boxNumber.innerHTML = ""
    let numberOfBoxes = parseInt(boxNumberInput.value); 
    if (numberOfBoxes === 0){
        boxNumber.style.display = "none"
    }
    for(let i = 0 ; i < numberOfBoxes ; i++){
        let input = $.createElement('input');
        input.type = 'text';
        input.placeholder = 'proficiency';
        input.className = 'h-[2.5rem] rounded-[5px] shadow-[2px_2px_10px_-4px_black_inset] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-slate-400 text-slate-600 w-[15rem] proficiency-input';
        boxNumber.appendChild(input);
    }
});

cancelButton.addEventListener("click" , function(){
    // In this next part, the key should return to the home panel.
})

