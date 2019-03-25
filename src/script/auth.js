var config = {
    apiKey: "AIzaSyC4-oq1Sj96_IJvy_wFxF7DoJRzDO5Lcks",
    authDomain: "educalab-52ee0.firebaseapp.com",
    databaseURL: "https://educalab-52ee0.firebaseio.com",
    projectId: "educalab-52ee0",
    storageBucket: "educalab-52ee0.appspot.com",
    messagingSenderId: "503327975641"
  };
  firebase.initializeApp(config);

  function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (){
        console.log("oi");
    })
    .catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
        //  if (errorCode == 'auth/weak-password') {
        //    alert('The password is too weak.');
        //  } else {
        //    alert(errorMessage);
        //  }
         console.log(error);
    });

  }