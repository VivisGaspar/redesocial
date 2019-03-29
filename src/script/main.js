$(document).ready(function () {
    getSignUpInfo();
    getSignInInfo();
    $('#post-btn').click(getPostInput);
    $('#home-btn-sign-in').click(goSignIn);
    $('#home-btn-sign-up').click(goSignUp);
    
});

function goSignIn(event){
    event.preventDefault()
    window.location = 'signIn.html'
}

function goSignUp(event){
    event.preventDefault()
    window.location = 'signUp.html'
}



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

function getPostInput(event) {
    event.preventDefault();
    let postInput = $('#post-input').val();
    if (postInput) {
        let newPost = addPostsToDB(postInput);
        let postId = newPost.getKey();
        console.log(postId);
        printPosts(postInput, postId);
    } else {
        alert("complete");
    }
    $("#post-input").val("");
}

function printPosts(text, key) {
    

    $("#post-list").append(`
<div>
<div id="clickme" class="wrap-menu">
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>

        <div id="book" class="options">
            <ul>
                <li id="edit">Editar</li>
                <li id="del">Deletar</li>
            </ul>
        </div>
    </div>

    <select id='post-select'>
        <option value="editar">Editar</option>
        <option value="excluir" data-id=${key}>Excluir</option>
    <select/>
    <p>${text}</p>
</div>`
    );

    $(`#post-select`).change(function () {
        let value = $(this).val();
        if (value === "excluir") {
            if (confirm('quer excluir')) {
                console.log('user quer excluir');
            }
        }
    })
}



$("#book").hide()
$("#clickme").click(function () {
    $("#book").toggle("display")
});

$("#edit").click(function () {
    alert('Editar post');

});

$("#del").click(function () {
    alert('Deletar post');

});
