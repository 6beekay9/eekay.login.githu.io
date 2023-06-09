function togglePasswordVisibility() {
    var passwordInput = document.getElementById("cr-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
