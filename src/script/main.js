$(document).ready(function getEmailAndPassword(){
    $('#btn-sign-up').click(function (){
        // event.preventDefault()

        const email = $('#email').val();
        const password = $('#password').val();

        signUp(email, password);
    })
})