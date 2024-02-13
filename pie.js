function setAdminCookie(isAdmin, days) {
    const stringValue = isAdmin.toString();
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `admin=${stringValue};expires=${expires.toUTCString()};path=/`;
}

function showErrorMessage() {
    // Display the error message
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
}

function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'GrandmaPieLover1934' && password === 'P1E$foRday$$$$$mn1934289') {
        setAdminCookie(true, 1);
        alert('Login successful! Redirecting to the dashboard.');
        window.location.href = 'pieSsssssuccess39393818903040991902390419039090190149090109190909033342.html';
    } else {
        setAdminCookie(false, 1);
        showErrorMessage();
        alert('Incorrect username or password. Please try again.');
    }
}


