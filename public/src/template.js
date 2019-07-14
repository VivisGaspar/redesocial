$(document).ready(function () {
  $('#btn-sign-up').click(getSignUpInfo);
  $('#btn-sign-in').click(getSignInInfo);
  $('#post-btn').click(getPostInput);
  $('#home-btn-sign-in').click(goSignIn);
  $('#home-btn-sign-up').click(goSignUp);
  $("#btn-search-users").click(getSearchUsers);
  $('#home-btn-return').click(returnHome);
  $('.btn-go-profile').click(goProfile);
  $('#btn-edit-profile').click(getInfoEdit);
  $('.btn-logout').click(goHome);
  $('.btn-go-timeline').click(goTimeline);
  $('#privacy-filter').change(changePrivacyFilter);
  getPostsFromDB();
  getUsersFromDB();
  getOtherUserFromDB();
});

function goSignIn(event) {
  event.preventDefault();
  window.location.replace('signIn.html')
}

function goSignUp(event) {
  event.preventDefault();
  window.location.replace('signUp.html')
}

function returnHome(event) {
  event.preventDefault();
  window.location.replace('index.html')
}

function goProfile() {
  window.location = 'myprofile.html?userId=' + USER_ID + '&profile'
}

function getInfoEdit(event) {
  event.preventDefault();
  let nameEdit = $('#name-profile').val();
  let lastNameEdit = $('#last-name-profile').val();
  let userClass = $('#user-class').val()
  printNewInfoUser(nameEdit, lastNameEdit, userClass);
}

function printNewInfoUser(nameEdit, lastNameEdit, userClass) {
  $("#new-profile").html(`
    <h3>Dados alterados com sucesso:</h3>
    <p>Nome: ${nameEdit}</p>
    <p>Sobrenome: ${lastNameEdit}</p>
    <p>Turma: ${userClass}</p>`)
  getInfoEditProfile(nameEdit, lastNameEdit, userClass);
}

function getSignUpInfo(event) {
  event.preventDefault();
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
    printPosts(postInput, 0, privacyInput, postId);
  } else {
    alert("Por favor complete seu post para publicá-lo");
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
    <div class="${filter} bg-white post-container" id='post-container-${key}'>
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
        <p id="displayName-${key}" class="full-name-post"></p>
      </div>
      <p class="post-timeline-text post-timeline-margin" id=text-${key}>${text}</p>
      <div class="d-flex justify-content-start align-items-baseline post-timeline-margin">
        <p id="likes-${key}" class="like-count">${likes}</p>
        <i class="far fa-heart post-timeline-margin" id="heart-${key}"></i>
      </div>
    </div>`
  );
  if (like > 0) {
    $(`#heart-${key}`).removeClass('far').addClass('fas fas-like');
  };
  getChangeOp(text, key);
  likePost(likes, key);
  getInfoFromDB();
}

function getChangeOp(text, key) {
  $(`#options-${key}`).hide()
  $(`#div-${key}`).click(function () {
    $(`#options-${key}`).toggle("display")
  });
  $(`#edit-${key}`).click(function () {
    let newText = prompt(`Altere sua publicação: ${text}`);
    let postP = $(`#text-${key}`);
    editPost(postP, newText, key);
  });
  $(`#del-${key}`).click(function () {
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

function changePrivacyFilter() {
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
};

function getSearchUsers(event) {
  event.preventDefault();
  let searchInput = $('#search-input').val().toLowerCase();
  let searchArray = searchInput.split(" ");
  window.location = 'search.html?userId=' + USER_ID + '&search=' + searchArray;
}

function printUsers(userArray) {
  let otherUserKey = userArray[3];
  $('#users-list').append(`
    <li id='profile-${otherUserKey}' class="list-group-item">
      <h4 class='mb-0 text-secondary'>${userArray[0].charAt(0).toUpperCase() + userArray[0].slice(1)} ${userArray[1].charAt(0).toUpperCase() + userArray[1].slice(1)}</h4>
      <p class="text-info">@${userArray[2]}</p>
    </li>
    `
  );
  goOtherProfile(otherUserKey);
}

function goOtherProfile(otherUserKey) {
  $(`#profile-${otherUserKey}`).click(function () {
    window.location = 'otherprofile.html?userId=' + USER_ID + '&profile=' + otherUserKey;
  })
}

function printOtherUserInfo(username, name, lastName, userClass) {
  $('#profile-info').append(`
    <i class="fas fa-user-circle other-profile-avatar m-3"></i>
    <h2 class='mb-0 text-secondary'>${name} ${lastName}</h2>
    <h6 class='text-info'>@${username}</h6>
    <h6 class='m-3 text-secondary'><i class="fas fa-graduation-cap"></i> turma: ${userClass ? userClass : 0}</h6>
    `
  );
}

function printOtherUserPosts(text, like, privacy, otherUserKey, name, lastName) {
  let likes = "";
  if (like > 0) {
    likes = like;
  }
  if (privacy === 'public-post') {
    $("#profile-posts").prepend(`
      <div class="bg-white post-container">
        <div class="d-flex justify-content-start">
          <i class="fas fa-user-circle create-post-avatar mt-2"></i>
          <p class="full-name-post mt-2"> ${name} ${lastName}</p>
        </div>
        <p id=text-${otherUserKey} class="post-timeline-text post-timeline-margin">${text}</p>
        <div class="d-flex justify-content-start align-items-baseline post-timeline-margin">
          <p id="likes-${otherUserKey}" class="like-count">${likes}</p>
          <i class="far fa-heart post-timeline-margin" id="heart-${otherUserKey}"></i>
        </div>
      </div>`
    );
  }
  if (like > 0) {
    $(`#heart-${otherUserKey}`).removeClass('far').addClass('fas fas-like');
  };
}

function goHome() {
  if (window.confirm("Sair da sua conta?")) {
    window.location.replace('index.html')
  }
}

function goTimeline() {
  window.location = 'timeline.html?userId=' + USER_ID + '&timeline'
}
