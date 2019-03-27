
$(document).ready(function getEmailAndPassword(){
    $('#btn-sign-up').click(function (event){
        event.preventDefault()
        const email = $('#email').val();
        const password = $('#password').val();
        const name = $('#name').val();
        signUp(email, password, name);
    })
})

$(document).ready(function getInfoLogin(){
    $('#btn-sign-in').click(function (event){
        event.preventDefault()
        const emailSignIn = $('#email-sign-in').val();
        const passwordSignIn = $('#password-sign-in').val();
        signIn(emailSignIn, passwordSignIn);
    })
    
    
})