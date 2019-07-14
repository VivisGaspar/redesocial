function signUp(email, password, name, lastName) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (response) {
      let getUsername = name + lastName;
      let username = getUsername.toLowerCase();
      const userId = response.user.uid
      database.ref('users/' + userId).set({
        name: name,
        lastName: lastName,
        username: username,
        email: email
      });
      window.location.replace('timeline.html?userId=' + userId + '&timeline')
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(errorCode, errorMessage);
    });
}