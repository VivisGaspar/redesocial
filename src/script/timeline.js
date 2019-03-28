let USER_ID = window.location.search.match(/\?userId=(.+)/)[1];
console.log(USER_ID);

function addPostsToDB(postInput) {
    return database.ref('posts/' + USER_ID).push({ text: postInput });
}

function getPostsFromDB() {

}

function renderPosts() {

}

