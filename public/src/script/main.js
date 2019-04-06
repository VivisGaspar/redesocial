$(document).ready(function () {
    $('#btn-sign-up').click(getSignUpInfo);
    $('#btn-sign-in').click(getSignInInfo);
    $('#post-btn').click(getPostInput);
    $('#home-btn-sign-in').click(goSignIn);
    $('#home-btn-sign-up').click(goSignUp);
    $('#home-btn-return').click(returnHome);
    $('#btn-go-profile').click(goProfile);
});

function goSignIn(event) {
    event.preventDefault()
    window.location = 'signIn.html'
}

function goSignUp(event) {
    event.preventDefault()
    window.location = 'signUp.html'
}

function returnHome(event) {
    event.preventDefault()
    window.location = 'index.html'
}

function goProfile(event) {
    event.preventDefault()
    var user = firebase.auth().currentUser;
    // var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }


    window.location = 'profile.html?userId=' + uid;
}

function getSignUpInfo(event) {
    event.preventDefault()
    const email = $('#email').val();
    const password = $('#password').val();
    const name = $('#name').val();
    const lastName = $('#last-name').val();
    signUp(email, password, name, lastName);
}

function getSignInInfo(event) {
    event.preventDefault()
    const emailSignIn = $('#email-sign-in').val();
    const passwordSignIn = $('#password-sign-in').val();
    signIn(emailSignIn, passwordSignIn);
}

function getPostInput(event) {
    event.preventDefault();
    let postInput = $('#post-input').val();
    let privacyInput = $('#privacy-post').val();
    if (postInput) {
        let newPost = addPostsToDB(postInput, privacyInput);
        let postId = newPost.getKey();
        console.log(postId);
        printPosts(postInput, 0, privacyInput, postId);
    } else {
        alert("complete");
    }
    $("#post-input").val("");
}




function printPosts(text, like, privacy, key) {
    let likes = "";
    let printPrivacy = "";
    if (like > 0) {
        likes = like;
    }
    if (privacy === "public-post") {
        printPrivacy = "Público";
        filter = "public"
    } else {
        printPrivacy = "Privado";
        filter = "private"
    }
    $("#post-list").prepend(`
        <div class="${filter} bg-white" id='post-container-${key}'>
            <div class="d-flex justify-content-end align-items-baseline">
                <p class="post-timeline-margin">${printPrivacy}</p>   
                <div id='div-${key}' class="wrap-menu">
                <i class="fas fa-ellipsis-v post-timeline-margin"></i>
                    <div id='options-${key}'>
                        <ul>
                            <li id=edit-${key}>Editar</li>
                            <li id=del-${key}>Deletar</li>
                        </ul>
                    </div>
                </div>          
            </div> 
            <div class="d-flex justify-content-start post-timeline-margin">
                <i class="fas fa-user-circle create-post-avatar"></i>
                <p class="full-name-post">Nome Completo</p>  
            </div> 
            <p class="post-timeline-text post-timeline-margin" id=text-${key}>${text}</p>
            <div class="d-flex justify-content-start align-items-baseline post-timeline-margin">
                <p id="likes-${key}" class="like-count">${likes}</p>
                <i class="far fa-heart post-timeline-margin" id="heart-${key}"></i>
            </div>           
        </div>`
    );

    // <div class="dots">
    //                     <div class="dot"></div>
    //                     <div class="dot"></div>
    //                     <div class="dot"></div>
    //                 </div>

    if (like > 0) {
        $(`#heart-${key}`).removeClass('far').addClass('fas fas-like');
    };

    getChangeOp(text, key);
    likePost(likes, key);
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

function likePost(likes, key) {
    $(`#heart-${key}`).click(function () {
        if (likes > 0) {
            likes = parseInt(likes);
        }
        likes += 1;
        $(`#likes-${key}`).html(likes);
        if (likes > 0) {
            $(`#heart-${key}`).removeClass('far').addClass('fas fas-like');
        };
        addLikesToDB(likes, key);
    })
}

$('#privacy-filter').change(function () {
    let choice = $('#privacy-filter option:selected').text();
    if (choice === 'Todos') {
        $('.private').show()
        $('.public').show()
    } else if (choice === 'Privado') {
        $('.public').hide()
        $('.private').show()
    } else if (choice === 'Público') {
        $('.private').hide()
        $('.public').show()
    }
});
