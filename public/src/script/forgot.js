const database = firebase.database();

const actionCodeSettings = {
    url: 'https://localhost:8080/signIn.html',
    handleCodeInApp: true
};

function setForgot(email) {
    firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
    .then(function () {
        console.log('Link enviado por email!');
        localStorage.setItem('emailForSignIn', email);
    })
    .catch(function (error) {
        console.error(error);
    });
}

function getForgot(event) {
    event.preventDefault();
    const email = $('#email').val();
    setForgot(email);
}

$(document).ready(function () {
    $('#btn-forgot').click(getForgot);
});

