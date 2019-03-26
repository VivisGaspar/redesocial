
$(document).ready(function getEmailAndPassword(){
    $('#btn-sign-up').click(function (event){
        event.preventDefault()
        const email = $('#email').val();
        const password = $('#password').val();
        const name = $('#name').val();
        signUp(email, password, name);
    })
})