const $ = document
let registerOrLogin = $.getElementById("reglog")
let registerOrLoginBtn = $.getElementById("RL-btn")
let homeLink = $.getElementById("homeLink")
let registerLink = $.getElementById("registerLink")
let loginLink = $.getElementById("loginLink")
let tasksLink = $.getElementById("tasksLink")
let profileLink = $.getElementById("profileLink")
let titles = $.getElementById("titleBtn")
let main = $.getElementById("main")
let btn = $.getElementById("btn")
let leftBox = $.getElementById("left-box")
let rightBox = $.getElementById("right-box")
let username = $.getElementById("username")


registerOrLogin.addEventListener("click" , ()=>{
    registerOrLoginBtn.style.display = ""
})

registerLink.addEventListener("click" , ()=>{
    registerOrLoginBtn.style.display = "none"
    main.classList.remove("slide-in")
    main.classList.add("animate")
    setTimeout(()=>{
        leftBox.style.marginRight = "11rem"
        btn.innerHTML = '<form action="" class="w-[25rem] pt-14 pb-8 px-14 mt-[12rem] mb-[5rem] bg-gray-400 shadow-[2px_2px_20px_black] rounded-[20px] border-4 border-slate-400" style="display: flex; gap: 2vw; flex-direction: column;" id="register-form">\
        <h2 class="text-3xl mt-[-2rem] mx-auto mb-2 text-cyan-50 drop-shadow-[1px_.5px_.5px_black]" style="background-image: url(../images/inscriptublueprintprinting.jpg);background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; background-clip: text; color: transparent;">Register Form</h2>\
        <input type="text" placeholder="Username" required class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="username-input">\
        <input type="email" placeholder="Email" required class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="email-input">\
        <input type="password" placeholder="Password" required class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="password-input">\
        <input type="number" max="4" min="0" placeholder="Number of Boxes" class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="boxNumber-input">\
        <div style="display: none; flex-direction: column; gap: 1.5rem;"  id="boxNumber"></div>\
        <input type="text" placeholder="Work Experience" class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[0px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="workExperience-input">\
        <div class="pl-[4.5rem]">\
        <input type="submit" value="Register" class="p-2 border-0 outline-0 rounded-[5px] bg-lime-900 text-white shadow-[2px_2px_10px_black] mr-2 cursor-pointer">\
        <button class="inline-block p-2 border-0 outline-0 rounded-[5px] bg-red-900 text-white shadow-[2px_2px_10px_black] cursor-pointer" id="cancel-button" formnovalidate>Cancel</button></div></form>'

        let rgsForm =  $.getElementById("register-form")
        let usernameInput = $.getElementById("username-input")
        let emailInput = $.getElementById("email-input")
        let passwordInput = $.getElementById("password-input")
        let boxNumberInput = $.getElementById("boxNumber-input")
        let boxNumber = $.getElementById("boxNumber")
        let workExperienceInput = $.getElementById("workExperience-input")
        let cancelButton = $.getElementById("cancel-button")
        // let responsibilitys = ["troject manager" , "team member" , "normal user"]

        rgsForm.addEventListener("submit" , even=>{
            even.preventDefault()
            let userInfo = {
                username : usernameInput.value ,
                email : emailInput.value ,
                password : passwordInput.value ,
                proficiency :[],
                workExperience : workExperienceInput,
                // responsibility : responsibilitys[Math.floor(Math.random(responsibilitys.length)*3)]
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
            .then((data)=>{
                if (data === ""){
                    leftBox.style.marginRight = "3.5rem"
                    registerOrLogin.style.display = "none"
                    titles.innerHTML = ""
                    titles.innerHTML = '<li class="flex gap-1 p-2 pl-0 border-0 hover:border-b-2 hover:border-b-slate-700 transition-all duration-100 text-slate-600 drop-shadow-[1px_.5px_.5px_black]">\
                        <img src="../images/icons8-home-100.png" class="w-6" alt="">\
                        <b id="homeLink" class="cursor-pointer">Home</b></li>'
                    titles.innerHTML += '<li class="flex gap-1 p-2 border-0 hover:border-b-2 hover:border-b-slate-700 transition-all duration-100 text-slate-600 drop-shadow-[1px_.5px_.5px_black]">\
                        <img src="../images/icons8-task-100.png" class="w-6" alt="">\
                        <b id="projectsLink" class="cursor-pointer">Projects</b></li>'
                    titles.innerHTML += '<li class="flex gap-1 p-2 border-0 hover:border-b-2 hover:border-b-slate-700 transition-all duration-100 text-slate-600 drop-shadow-[1px_.5px_.5px_black]">\
                        <img src="../images/icons8-edit-account-100.png" class="w-6" alt="">\
                        <b id="profileLink" class="cursor-pointer">Profile</b></li>'

                    username.innerHTML = userInfo.username

                    $.getElementById("projectsLink").addEventListener("click" , ()=>{
                        main.classList.add("animate")
                        leftBox.style.marginRight = ""
                        setTimeout(()=>{
                            // بیاد و سپس اول فقط باید نام پروژه ها باشه و بعد اگه کار بر روی اون پروژه بزنه اون وقت میتونه جزئیات رو ببینه project  رفت بایدmain زمانی که 
                            fetch("", {
                                method: "PUT",
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({})
                            })
                            .then((res) => res.json())
                            .then((data) => {
                                btn.innerHTML += '<div id="projectsBox" class="w-[30rem] h-[30rem] mx-auto mt-[16rem] rounded-[20px] overflow-y-auto shadow-[2px_2px_10px_black_inset] bg-slate-400"></div>'
                                let html = ''
                                let projectsBox = $.getElementById("projectsBox")
                                data.forEach(element=>{
                                    html += '<div id="expandable" class="w-[30rem] h-[8rem] pt-11 border-black rounded-[10px] shadow-[2px_2px_10px_black_inset] bg-blue-50" style="display: flex; flex-direction: column; gap: 20px; transition: height 0.3s ease;">'
                                    html += '<p class="text-3xl text-slate-800 mx-auto pb-[2rem] drop-shadow-[1px_.5px_.5px_black]">Project...</p>'
                                    html += '<img id="toggle-icon" class="relative bottom-0 w-8 mx-auto cursor-pointer" src="https://icongr.am/material/chevron-up.svg?size=20&color=4d4c4c" alt="">'
                                    html += '</div>'
                                })

                                projectsBox.innerHTML += html

                                let isExpanded = false;
                                
                                $.querySelectorAll("expandable").forEach(elem =>{
                                    elem.addEventListener("click", () => {
                                        if (isExpanded) {
                                            elem.style.height = "8rem";
                                            elem.innerHTML = '<p class="text-3xl text-slate-800 mx-auto pb-[2rem] drop-shadow-[1px_.5px_.5px_black]">Project...</p>\
                                            <img id="toggle-icon" class="relative bottom-0 w-8 mx-auto cursor-pointer" src="https://icongr.am/material/chevron-up.svg?size=20&color=4d4c4c" alt="">\
                                            </div>'
                                        } else {
                                            elem.style.height = "16rem";
                                    
                                            elem.innerHTML = '<p class="text-3xl text-slate-800 mx-auto pb-[2rem] drop-shadow-[1px_.5px_.5px_black]">Project...</p>\
                                            <img id="toggle-icon" class="relative bottom-0 w-8 mx-auto cursor-pointer" src="https://icongr.am/material/chevron-up.svg?size=20&color=4d4c4c" alt="">\
                                            <div class="flex gap-20 ml-5">\
                                            <p class="drop-shadow-[1px_.5px_.5px_black] text-lime-600">Start Date: ' + 'تاریخ شروع' + '</p>\
                                            <p class="drop-shadow-[1px_.5px_.5px_black] text-red-600">End Date: ' + 'تاریخ پایان'+'</p>\
                                            </div>\
                                            <div class="mt-5 ml-3 mr-3 p-5  overflow-y-auto shadow-[2px_2px_10px_-2px_black] rounded-[5px] bg-slate-400 discript">\
                                            </div>\
                                            <button class="shadow-[2px_2px_10px_-2px_black] mx-auto px-16 py-2 bg-lime-700 rounded-[5px] taskBtn"><b class="drop-shadow-[1px_.5px_.5px_black] text-white">Click</b></button>'

                                            //اینجا رو شک دارم باید ببینم درست کار میکنه یا نه 
                                            $.querySelectorAll(".discript").forEach(des=>{
                                                des.innerHTML = '<p class="drop-shadow-[1px_.5px_.5px_black] text-white">'+'باید شرح وضایف قرار بگیرد'+'</p>'
                                            })

                                            $.querySelectorAll(".taskBtn").forEach(click=>{
                                                click.addEventListener("click" , ()=>{
                                                //انیمیشن باید قرار داده بشود 
                                                    fetch("", {
                                                        method: "PUT",
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify({})
                                                    })
                                                    .then((res) => res.json())
                                                    .then((data) => {
                                                        
                                                        leftBox.style.marginRight = "9rem"
                                                        btn.innerHTML = '<div id="taskBar" class="w-[30rem] h-[88%] mt-[10rem] pt-11 border-black rounded-[10px] shadow-[2px_2px_10px_black_inset] bg-blue-50" style="display: flex; flex-direction: column; gap: 2rem; transition: height 0.3s ease;">\
                                                        <div style="display: flex; flex-direction: column; gap: 1rem;">\
                                                        <p class="text-3xl text-slate-800 mx-auto pb-[2rem] drop-shadow-[1px_.5px_.5px_black]">Project...</p>\
                                                        <div class="flex gap-20 ml-5">\
                                                        <p class="drop-shadow-[1px_.5px_.5px_black] text-lime-600">Start Date:</p>\
                                                        <p class="drop-shadow-[1px_.5px_.5px_black] text-red-600">End Date:</p>\
                                                        </div>\
                                                        </div>\
                                                        <div class="drop-shadow-[1px_.5px_.5px_black]" style="display: flex; flex-direction: column; gap: 1rem;">\
                                                        <p class="ml-[1rem] text-lg">Tasks :</p>\
                                                        <div class="h-[25rem] ml-3 mr-3 p-5  overflow-y-auto shadow-[2px_2px_8px_-2px_black] rounded-[5px] bg-slate-400 discript">\
                                                        </div>\
                                                        </div>\
                                                        </div>'

                                                        let taskInfo = $.querySelector(".task-information")
                                                        let html = ''
                                                        data.forEach(info=>{
                                                            // باید داخل تگ پایین اطلاعات تسک رو قرار بدیم
                                                            html.innerHTML += '<p class="overflow-y-auto bg-blue-100 h-[8rem] rounded-[4px] mr-[1.2rem] shadow-lg taskP"></p>'
                                                            html.innerHTML += '<p class="mb-[-5px] drop-shadow-[1px_.5px_.5px_black] text-lg">Condition:</p>'
                                                            html.innerHTML += '<select name="" id="" class="w-[95%] outline-0 border-2 border-gray-300 rounded-[5px] bg-blue-100">'
                                                            html.innerHTML += '<option value="">In progress</option>'
                                                            html.innerHTML += '<option value="">Suspended</option>'
                                                            html.innerHTML += '<option value="">Done</option>'
                                                            html.innerHTML += '</select>'
                                                            html.innerHTML += '<form id="upload-form">'
                                                            html.innerHTML += '<label for="file-input" class="drop-shadow-[1px_.5px_.5px_black] inline-block mb-2">Choose an image:</label>'
                                                            html.innerHTML += '<input type="file" id="file-input" accept="image/*" class="drop-shadow-[1px_.5px_.5px_black]">'
                                                            html.innerHTML += '</form>'
                                                            html.innerHTML += '<button class="h-[2rem] rounded-[3px] shadow-[1px_1px_10px_-5px_black] bg-lime-600 mx-28 text-blue-50 sendBtn"><b class="drop-shadow-[1px_.5px_.5px_black]">Send</b></button>'
                                                            html.innerHTML += '</div>'
                                                        })

                                                        taskInfo.innerHTML +=html
                                                        

                                                                                                                // انتخاب همه دکمه‌های ارسال
                                                        $.querySelectorAll(".sendBtn").forEach(send => {
                                                            send.addEventListener("click", (event) => {
                                                                // پیدا کردن عنصر پدر برای دکمه فعلی
                                                                const parentDiv = event.target.closest(".taskP").parentElement;

                                                                // گرفتن مقدار از select
                                                                const selectValue = parentDiv.querySelector("select").value;

                                                                // گرفتن فایل از input
                                                                const fileInput = parentDiv.querySelector("#file-input");
                                                                const file = fileInput.files[0];

                                                                // ساختن داده JSON
                                                                const formData = new FormData();
                                                                formData.append("condition", selectValue);
                                                                if (file) {
                                                                    formData.append("file", file);
                                                                }

                                                                // ارسال داده به سرور
                                                                fetch("/upload", {
                                                                    method: "POST",
                                                                    body: formData,
                                                                })
                                                                    .then(response => response.json())
                                                                    .then(data => {
                                                                        console.log("Success:", data);
                                                                        alert("Data sent successfully!");
                                                                    })
                                                                    .catch(error => {
                                                                        console.error("Error:", error);
                                                                        alert("An error occurred while sending the data.");
                                                                    });
                                                            });
                                                        });

                                                    })
                                                })
                                            })
                                        }
                                        
                                        $.querySelector("toggle-icon").classList.toggle("rotated");
                                        isExpanded = !isExpanded;
                                });
                                })
                                
                            })
                        },600)
                    })
                    
                }
            })
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
                input.className = 'h-[2.5rem] rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_.5px_.5px_black] placeholder:text-blue-100 text-slate-600 w-[15rem] proficiency-input';
                input.style.backgroundImage = "url(../images/inscriptublueprintprinting.jpg)"
                input.style.backgroundPosition = "center"
                input.style.backgroundAttachment = "fixed"
                input.style.backgroundSize = "cover"
                input.style.backgroundRepeat = "no-repeat"
                boxNumber.appendChild(input);
            }
        });
        
        let registerForm = $.getElementById("register-form");
        registerForm.classList.add("form-animate");

        cancelButton.addEventListener("click" , function(){
            $.getElementById("register-form").classList.remove("form-animate")
            $.getElementById("register-form").classList.add("move-left")
            registerOrLogin.innerHTML = "Register/Login"
            registerOrLoginBtn.style.display = "none"

                setTimeout(() => {
                    leftBox.style.marginRight = "2.6rem"
                    
                    btn.innerHTML = '<main id="main" class="mt-[9.5rem] mb-0 grid grid-rows-2 grid-cols-2 gap-y-10 opacity-0">\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/loginRegister.png" alt="" class="w-[20rem] h-[20rem] rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/prf.jpg" alt="" class="w-[20rem] h-[20rem] rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/OIP (1).jpg" alt="" class="w-[20rem] h-[20rem] rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/loginRegister.png" alt="" class="w-[20rem] h-[20rem] rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                    </main>'
                    $.getElementById("main").classList.add("slide-in")
                    $.getElementById("main").classList.remove("opacity-0");
            }, 600);
        })
    } , 600)
})


loginLink.addEventListener("click" , ()=>{
    registerOrLoginBtn.style.display = "none"
    main.classList.remove("slide-in")
    main.classList.add("animate")
    setTimeout(()=>{
        main.style.display = "none"
        leftBox.style.marginRight = "11rem"
        btn.innerHTML = '<form action="" class="w-[25rem] pt-14 pb-8 px-14 mt-[22rem] mb-[5rem] bg-gray-400 shadow-[2px_2px_20px_black] rounded-[20px] border-4 border-slate-400" style="display: flex; gap: 2vw; flex-direction: column;" id="login-form">\
        <h2 class="text-3xl mt-[-2rem] mx-auto mb-2 text-cyan-50 drop-shadow-[1px_.5px_.5px_black]" style="background-image: url(../images/inscriptublueprintprinting.jpg);background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; background-clip: text; color: transparent;">Login Form</h2>\
        <input type="text" placeholder="Username" required class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="username-input">\
        <input type="password" placeholder="Password" required class="h-10 rounded-[5px] shadow-[2px_2px_10px_black] bg-[#eff4fa] outline-none border-0 pl-4 placeholder:drop-shadow-[1px_1px_1px_gray] placeholder:text-blue-50 text-blue-50" style="background-image: url(../images/inscriptublueprintprinting.jpg); background-position: center; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;" id="password-input">\
        <div class="pl-[4.5rem]">\
        <input type="submit" value="Register" class="p-2 border-0 outline-0 rounded-[5px] bg-lime-900 text-white shadow-[2px_2px_10px_black] mx-auto cursor-pointer">\
        <button class="inline-block p-2 border-0 outline-0 rounded-[5px] bg-red-900 text-white shadow-[2px_2px_10px_black] cursor-pointer" id="cancel-button">Cancel</button></div></form>'

        let lgnForm = $.getElementById("login-form")
        let usernameInput = $.getElementById("username-input")
        let passwordInput = $.getElementById("password-input")
        let cancelButton = $.getElementById("cancel-button")
        lgnForm.addEventListener("submit" , even=>{
            even.preventDefault()
            let loginInfo = {
                username : usernameInput,
                password : passwordInput
            }

            fetch("" , {
                method:"GET",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(loginInfo)
            })
            .then((res) => res.text())
            .then((data)=>{
                if (data === ""){
                    main.style.display = ""
                    lgnForm.style.display = "none"
                    leftBox.style.marginLeft = "3.5rem"
                    registerOrLogin.style.display = "none"
                    titles.innerHTML = ""
                    titles.innerHTML = '<li class="flex gap-1 p-2 pl-0 border-0 hover:border-b-2 hover:border-b-slate-700 transition-all duration-100 text-slate-600 drop-shadow-[1px_.5px_.5px_black]">\
                        <img src="../images/icons8-home-100.png" class="w-6" alt="">\
                        <b id="homeLink" class="cursor-pointer">Home</b></li>'
                    titles.innerHTML += '<li class="flex gap-1 p-2 border-0 hover:border-b-2 hover:border-b-slate-700 transition-all duration-100 text-slate-600 drop-shadow-[1px_.5px_.5px_black]">\
                    <img src="../images/icons8-task-100.png" class="w-6" alt="">\
                    <b id="projectsLink" class="cursor-pointer">Projects</b></li>'
                    titles.innerHTML += '<li class="flex gap-1 p-2 border-0 hover:border-b-2 hover:border-b-slate-700 transition-all duration-100 text-slate-600 drop-shadow-[1px_.5px_.5px_black]">\
                    <img src="../images/icons8-edit-account-100.png" class="w-6" alt="">\
                    <b id="profileLink" class="cursor-pointer">Profile</b></li>'

                    username.innerHTML = loginInfo.username
                }
            })
        })

        const loginForm = document.getElementById("login-form");
        loginForm.classList.add("form-animate");

        cancelButton.addEventListener("click" , function(){
            $.getElementById("login-form").classList.remove("form-animate")
            $.getElementById("login-form").classList.add("move-left")
            registerOrLogin.innerHTML = "Register/Login"
            registerOrLoginBtn.style.display = "none"

                setTimeout(() => {
                    leftBox.style.marginRight = "2.6rem"
                    
                    btn.innerHTML = '<main id="main" class="mt-[9.5rem] mb-0 grid grid-rows-2 grid-cols-2 gap-y-10 opacity-0">\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/loginRegister.png" alt="" class="w-[20rem] h-[20rem] rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/prf.jpg" alt="" class="w-[20rem] h-[20rem] rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/OIP (1).jpg" alt="" class="w-[20rem] h-[20rem] rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tr-[10rem] rounded-bl-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="flip-container">\
                            <div class="flipper">\
                                <div class="front">\
                                    <img src="../images/loginRegister.png" alt="" class="w-[20rem] h-[20rem] rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                </div>\
                                <div class="back">\
                                    <p class="w-[20rem] h-[20rem] p-10 flex items-center justify-center bg-slate-400 text-white rounded-tl-[10rem] rounded-br-[10rem] shadow-[2px_2px_10px_black]">\
                                        <b class="drop-shadow-[1px_.5px_.5px_black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis nulla culpa at reprehenderit nam voluptates voluptatibus facere?</b>\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                    </main>'
                    $.getElementById("main").classList.add("slide-in")
                    $.getElementById("main").classList.remove("opacity-0");
            }, 600);
        })
    },600)
})




