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

function printPosts(text, like, key) {
    let likes = "";
    if(like > 0) {
        likes = like;
    }
    $("#post-list").append(`
        <div id='post-container-${key}'>
            <div id='div-${key}' class="wrap-menu">
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div id='options-${key}'>
                    <ul>
                        <li id=edit-${key}>Editar</li>
                        <li id=del-${key}>Deletar</li>
                    </ul>
                </div>
            </div>    
            <p id=text-${key}>${text}</p>
            <i class="far fa-heart" id="heart-${key}"></i>
            <p id="likes-${key}">${likes}</p>
        </div>`
    );

    if(like > 0) {
        $(`#heart-${key}`).removeClass('far').addClass('fas');
    };

    getChangeOp(text, key);
    likePost(key);
}

function getChangeOp(text, key) {
    $(`#options-${key}`).hide()
    $(`#div-${key}`).click(function () {
        $(`#options-${key}`).toggle("display")
    });
    $(`#edit-${key}`).click(function () {
        console.log(key);
        let newText = prompt(`Altere sua publicação: ${text}`);
        let postP = $(`#text-${key}`);
        editPost(postP, newText, key);
    });
    $(`#del-${key}`).click(function () {
        console.log(key);
        if (window.confirm("Excluir publicação?")) {
            let postContainer = $(`#post-container-${key}`);
            deletePost(postContainer, key);
        }
    });
}

function likePost(key) {
    $(`#heart-${key}`).click(function () {
        let curtidas = $(this);
        curtidas.val(Number(curtidas.val()) + 1);        
        $(`#likes-${key}`).html(curtidas.val());
        let likes = curtidas.val();
        addLikesToDB(likes, key);
    })
}





