const database = firebase.database();

function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (response) {
      console.log("oi");
      const userId = response.user.uid
      database.ref('users/' + userId).set({
        username: name,
        email: email
      });
      console.log(response)
      window.location = 'timeline.html?id=' + userId;
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

function signIn(emailSignIn, passwordSignIn) {
  firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn)
    .then(function (response) {
      console.log("logado");
      const userId = response.user.uid
      window.location = 'timeline.html?id=' + userId;
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
