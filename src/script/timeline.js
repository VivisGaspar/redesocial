
$(document).ready(function () {
    getPostsFromDB();
});

let USER_ID = window.location.search.match(/\?userId=(.+)/)[1];
console.log(USER_ID);

function addPostsToDB(postInput) {
    return database.ref('posts/' + USER_ID).push({ text: postInput });
}

function getPostsFromDB() {
    database.ref('posts/' + USER_ID).once('value')
  .then(function(snapshot) {
      renderPosts(snapshot);
  });
}

function renderPosts(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        let post = childSnapshot.val();
        console.log(post);
        printPosts(post.text, childSnapshot.key);
      });
}

