function getUsersFromDB(searchInput) {
    database.ref('users').once('value')
  .then(function(snapshot) {
      searchUsers(snapshot, searchInput);
  });
}

function searchUsers(snapshot, searchInput) {
    snapshot.forEach(function(childSnapshot) {
        let user = childSnapshot.val();
        let userArray = [user.name, user.lastName, user.username, childSnapshot.key];
        if (userArray.indexOf(searchInput) >= 0){
            printUsers(userArray);
        }
      });
}

