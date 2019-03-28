$(document).ready(function () {
    getSignUpInfo();
    getSignInInfo();
    initTimeline();
    $('#post-btn').click(getPostInput);
});

function getSignUpInfo() {
    $('#btn-sign-up').click(function (event) {
        event.preventDefault()
        const email = $('#email').val();
        const password = $('#password').val();
        const name = $('#name').val();
        signUp(email, password, name);
    })
}

function getSignInInfo() {
    $('#btn-sign-in').click(function (event) {
        event.preventDefault()
        const emailSignIn = $('#email-sign-in').val();
        const passwordSignIn = $('#password-sign-in').val();
        signIn(emailSignIn, passwordSignIn);
    })
}

function initTimeline() {

}

function getPostInput(event) {
    event.preventDefault();
    let postInput = $('#post-input').val();
   if(postInput) {
       addPosts(postInput);
       addPostsToDB(postInput);
   } else {
       alert("complete");
   }
   $("#post-input").val("");
}

function addPosts(postInput) {
$('#post-list').append(`
<li>${postInput}</li>
`)
}

function printPosts() {

}