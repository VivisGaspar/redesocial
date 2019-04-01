$(document).ready(function () {
    getSignUpInfo();
    getSignInInfo();
    $('#post-btn').click(getPostInput);
    $('#home-btn-sign-in').click(goSignIn);
    $('#home-btn-sign-up').click(goSignUp);
});

function goSignIn(event) {
    event.preventDefault()
    window.location = 'signIn.html'
}

function goSignUp(event) {
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
            <div id='div-${key}' class="wrap-menu">
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div id='options-${key}'>
                    <ul>
                        <li data-id=edit-${key}>Editar</li>
                        <li data-id=del-${key}>Deletar</li>
                    </ul>
                </div>
            </div>    
            <p>${text}</p>
        </div>`
    );

    getChangeOp(key);
}

function getChangeOp(key) {
    $(`#options-${key}`).hide()
    $(`#div-${key}`).click(function () {
        $(`#options-${key}`).toggle("display")
    });
    $(`li[data-id=edit-${key}]`).click(function () {
        console.log(key);
        alert('Editar post');
    });
    $(`li[data-id=del-${key}]`).click(function () {
        console.log(key);   
        alert('Deletar post');
    });
}