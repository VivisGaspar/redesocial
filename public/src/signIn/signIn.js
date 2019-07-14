function signIn(emailSignIn, passwordSignIn) {
  firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn)
    .then(function (response) {
      const userId = response.user.uid
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