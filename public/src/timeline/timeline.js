let USER_ID = window.location.search.match(/(?<=userId=)(.*)(?=&)/)[1];

function addPostsToDB(postInput, privacy) {
  return database.ref('posts/' + USER_ID).push({
    text: postInput,
    like: 0,
    privacy: privacy
  });
}

function getPostsFromDB() {
  database.ref('posts/' + USER_ID).once('value')
    .then(function (snapshot) {
      renderPosts(snapshot);
    });
}

function renderPosts(snapshot) {
  snapshot.forEach(function (childSnapshot) {
    let post = childSnapshot.val();
    printPosts(post.text, post.like, post.privacy, childSnapshot.key);
  });
}

function deletePost(postContainer, key) {
  deletePostFromDB(key);
  postContainer.remove();
}

function deletePostFromDB(key) {
  database.ref(`posts/${USER_ID}/${key}`).remove();
}

function editPost(postP, newText, key) {
  $(postP).html(newText);
  editPostFromDB(newText, key);
}

function editPostFromDB(newText, key) {
  database.ref(`posts/${USER_ID}/${key}`).update({
    text: newText
  });
}

function addLikesToDB(likes, key) {
  database.ref(`posts/${USER_ID}/${key}`).update({
    like: likes
  });
}

function getInfoFromDB() {
  database.ref('users').once('value')
    .then(function (snapshot) {
      infoUser(snapshot);
    });
}

function infoUser(snapshot) {
  snapshot.forEach(function (childSnapshot) {
    let user = childSnapshot.val();
    let userArray = [user.name + " " + user.lastName];
    if (USER_ID === childSnapshot.key) {
      $('.full-name-post').text(userArray)
    }
  });
}
