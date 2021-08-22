
document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    if (userEmail.value == "kawsar@gmail.com" && userPassword.value == "1234") {
        window.location.href = '../banking.html';
    }
});




