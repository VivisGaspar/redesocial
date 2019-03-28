
const USER_ID = getUserId();

function getUserId() {
    var queryString = window.location.search;
    var regExpForUserId = new RegExp(/\?userId=(.+)/)[1];
    console.log(regExpForUserId);
    return queryString.match(regExpForUserId);
}


// let USER_ID = window.location.search.match(/\?id=(.*)/)[1];
// console.log(USER_ID);

function addPostsToDB(postInput) {
    return database.ref('tasks/' + USER_ID).push({ text: text });
}

function getPostsFromDB() {

}

function renderPosts() {

}

