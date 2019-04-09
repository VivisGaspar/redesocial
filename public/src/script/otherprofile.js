$(document).ready(function () {
    getOtherUserFromDB();
});

let otherUserKey = window.location.search.match(/\&profile=(.+)/)[1];

function getOtherUserFromDB() {
    
    database.ref('users').once('value')
        .then(function (snapshot) {            
            searchOtherUser(snapshot);
        });
}

function searchOtherUser(snapshot) {
    console.log('oi1');
    snapshot.forEach(function (childSnapshot) {
        let user = childSnapshot.val();
        if (otherUserKey === childSnapshot.key) {
            console.log('oi');
            printOtherUserInfo(user.username, user.name, user.lastName, user.turma);
            getOtherUsersPostsFromDB(childSnapshot.key);
        };
    });
}

function getOtherUsersPostsFromDB(otherUserKey) {
    database.ref('posts/' + otherUserKey).once('value')
  .then(function(snapshot) {
      renderOtherUserPosts(snapshot);
  });
}

function renderOtherUserPosts(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        let post = childSnapshot.val();
        printOtherUserPosts(post.text, post.like, post.privacy, childSnapshot.key);
      });
}