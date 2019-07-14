function getOtherUserFromDB() {
  database.ref('users').once('value')
    .then(function (snapshot) {
      searchOtherUser(snapshot);
    });
}

function searchOtherUser(snapshot) {
  snapshot.forEach(function (childSnapshot) {
    let user = childSnapshot.val();
    let otherUserKey = window.location.search.match(/\&profile=(.+)/)[1];
    if (otherUserKey === childSnapshot.key) {
      printOtherUserInfo(user.username, user.name, user.lastName, user.userClass);
      getOtherUsersPostsFromDB(childSnapshot.key, user.name, user.lastName);
    };
  });
}

function getOtherUsersPostsFromDB(otherUserKey, name, lastName) {
  database.ref('posts/' + otherUserKey).once('value')
    .then(function (snapshot) {
      renderOtherUserPosts(snapshot, name, lastName);
    });
}

function renderOtherUserPosts(snapshot, name, lastName) {
  snapshot.forEach(function (childSnapshot) {
    let post = childSnapshot.val();
    printOtherUserPosts(post.text, post.like, post.privacy, childSnapshot.key, name, lastName);
  });
}
