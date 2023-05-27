const signupbtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const loginDiv = document.getElementById("login-div");
const logoutDiv = document.getElementById("logout-div");
const logoutBtn = document.getElementById("logout-btn");
const Heading = document.getElementById("heading");
const password = document.getElementById("password");
const profile = document.getElementById("profile")
const profilelink = document.getElementById("profile-link")
const signuplink = document.getElementById("signup-link")

signupbtn.addEventListener("click",() =>{
    // var heading = document.createElement("h1");
    Heading.innerHTML=`Welcome ${username.value}`;
    localStorage.setItem("username", username.value)
    loginDiv.style.display="none";
    profile.style.display="none"
    logoutDiv.style.display="block";
    // document.body.appendChild(heading);
});

signuplink.addEventListener("click",()=>{
    loginDiv.style.display="block";
    profile.style.display="none";
});

profilelink.addEventListener("click",()=>{
    loginDiv.style.display="none";
    profile.style.display="block";
});


logoutBtn.addEventListener("click",() =>{
    Heading.innerHTML="";
    username.value="";
    localStorage.removeItem('username')
    password.value="";
    loginDiv.style.display ="block";
    logoutDiv.style.display="none";
});


if(localStorage.getItem("username")){
    loginDiv.style.display="none";
    Heading.innerHTML = `Welcome ${localStorage.getItem("username")}`;
    loginDiv.style.display = "block";
}