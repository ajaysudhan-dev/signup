document
.getElementById("signinForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    const user =
    JSON.parse(localStorage.getItem("user"));

    if(!user){
        alert("Please register first");
        return;
    }

    if(
        email === user.email &&
        password === user.password
    ){
        window.location.href =
        "home.html";
    }
    else{
        alert("Invalid Email or Password");
    }

});

function togglePassword(id){

    const field =
    document.getElementById(id);

    field.type =
    field.type === "password"
    ? "text"
    : "password";
}