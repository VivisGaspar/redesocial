$(document).ready(function () {
    $('#btn-sign-up').click(getSignUpInfo);
    $('#btn-sign-in').click(getSignInInfo);
    $('#post-btn').click(getPostInput);
    $('#home-btn-sign-in').click(goSignIn);
    $('#home-btn-sign-up').click(goSignUp);
    $('#home-btn-return').click(returnHome);
    
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


// function goProfile() {
//     firebase.auth().createUserWithEmailAndPassword()
//       .then(function (response) {
//         console.log("oi");
//         const userId = response.user.uid
//         // database.ref('users/' + userId).set({
//         //   name: name,
//         //   lastName: lastName,
//         //   email: email
//         // });
//         console.log(response)
//         window.location = 'profile.html?userId=' + userId;
//       })
//       .catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if (errorCode == 'auth/weak-password') {
//           alert('The password is too weak.');
//         } else {
//           alert(errorMessage);
//         }
//         console.log(errorCode, errorMessage);
//       });
//   }