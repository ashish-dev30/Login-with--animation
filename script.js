
function submitLogin() {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const emailIcon = document.getElementById('emailIcon');
    const passwordIcon = document.getElementById('passwordIcon');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let valid = true;

    // Reset errors
    emailError.style.display = "none";
    passwordError.style.display = "none";
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    emailIcon.style.display = "none";
    passwordIcon.style.display = "none";

    // Email blank check
    if (email === '') {
        emailError.textContent = "Email can't be blank";
        emailError.style.display = "block";
        emailInput.classList.add("error");
        emailIcon.style.display = "block";
        valid = false;
    }

    // Password check
    if (password === '') {
        passwordError.textContent = "Password can't be blank";
        passwordError.style.display = "block";
        passwordInput.classList.add("error");
        passwordIcon.style.display = "block";
        valid = false;
    } else if (password.length < 6 || !/\d/.test(password)) {
        passwordError.textContent = "Please enter a valid password (min 6 characters & include a number)";
        passwordError.style.display = "block";
        passwordInput.classList.add("error");
        passwordIcon.style.display = "block";
        valid = false;
    }

    if (!valid) return false;

    showCustomAlert("Thank You!");
    emailInput.value = '';
    passwordInput.value = '';
    return false;
}

function showCustomAlert(message) {
    const customAlert = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");

    alertMessage.textContent = message;
    customAlert.style.display = "flex";
}

function closeAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";
}


// Enable Enter key to close custom alert
document.addEventListener("keydown", function (event) {
    const customAlert = document.getElementById("customAlert");
    if (customAlert.style.display === "flex" && event.key === "Enter") {
        closeAlert();
    }
});

// const toggleEye = document.getElementById("toggleEye");
// const passwordInput = document.getElementById("passwordInput");

// toggleEye.addEventListener("click", function () {
//     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);
//     this.textContent = type === "password" ? "👁️" : "🙈";
// });

// const togglePassword = document.getElementById("togglePassword");
// const password = document.getElementById("password");

// togglePassword.addEventListener("click", function () {
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);

//     this.classList.toggle("fa-eye");
//     this.classList.toggle("fa-eye-slash");
// })


const passwordInput = document.getElementById("passwordInput");
const toggleEye = document.getElementById("toggleEye");
const eyeIcon = toggleEye.querySelector("i");

toggleEye.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";

    // Toggle icon
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
});

