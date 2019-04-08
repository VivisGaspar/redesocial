$(document).ready(function () {
    getUsersFromDB();
});

let search = window.location.search.match(/\&search=(.+)/)[1];

function getUsersFromDB() {

    database.ref('users').once('value')
        .then(function (snapshot) {
            searchUsers(snapshot);
        });
}

function searchUsers(snapshot) {
    let searchArray = search.split(",");
    console.log(searchArray);
    snapshot.forEach(function (childSnapshot) {
        let user = childSnapshot.val();
        let userArray = [user.name, user.lastName, user.username, childSnapshot.key].map(function (i) {
            return i.toLowerCase();
        });
        for (peixinho of searchArray) {
            if (userArray.indexOf(peixinho) >= 0) {
                printUsers(userArray);
            }
        }
    });
}

