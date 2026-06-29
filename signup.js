const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const city = document.getElementById("city");
    const password = document.getElementById("password");
    const confirmPassword =
    document.getElementById("confirmPassword");

    let valid = true;

    document
    .querySelectorAll("p[id$='Error']")
    .forEach(error => error.textContent = "");

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
    /^\d{10}$/;

    const cityRegex =
    /^[A-Za-z ]+$/;

    const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if(name.value.trim() === ""){
        nameError.textContent = "Name required";
        valid = false;
    }

    if(!emailRegex.test(email.value)){
        emailError.textContent = "Invalid email";
        valid = false;
    }

    if(!phoneRegex.test(phone.value)){
        phoneError.textContent =
        "Phone must be 10 digits";
        valid = false;
    }

    if(!cityRegex.test(city.value)){
        cityError.textContent =
        "Only alphabets allowed";
        valid = false;
    }

    if(!passwordRegex.test(password.value)){
        passwordError.textContent =
        "Minimum 8 characters with letters and numbers";
        valid = false;
    }

    if(password.value !== confirmPassword.value){
        confirmError.textContent =
        "Passwords do not match";
        valid = false;
    }

    if(!valid) return;

    const user = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        city: city.value,
        password: password.value
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Registration Successful");

    window.location.href = "signin.html";
});

function togglePassword(id){

    const field = document.getElementById(id);

    field.type =
    field.type === "password"
    ? "text"
    : "password";
}