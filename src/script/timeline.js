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
        printPosts(post.text, childSnapshot.key);
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