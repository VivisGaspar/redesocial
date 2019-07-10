function getUsersFromDB() {
  database.ref('users').once('value')
    .then(function (snapshot) {
      searchUsers(snapshot);
    });
}

function searchUsers(snapshot) {
  let search = window.location.search.match(/\&search=(.+)/)[1];
  let searchArray = search.split(",");
  snapshot.forEach(function (childSnapshot) {
    let user = childSnapshot.val();
    let usersArray = [user.name, user.lastName, user.username].map(function (i) {
      if (i) {
        return i.toLowerCase();
      }
      return i;
    });
    usersArray.push(childSnapshot.key);
    let userArray = [];
    for (userInfo of searchArray) {
      if (usersArray.indexOf(userInfo) >= 0) {
        userArray = usersArray;
      }
    }
    if (userArray.length > 0) {
      printUsers(userArray);
    }
  });
}
