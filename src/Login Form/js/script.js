function digitalClock() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    var time = h + ":" + m + " " + session;
    document.getElementById("clock").innerText = time;

}
setInterval(digitalClock, 1000);

var db = firebase.firestore();


let login = e => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    //Sign in existing user
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(solve => {
            window.location = "../Dashboard/index.html";
        })
        .catch(function (error) {
            // var errorCode = error.code; 
            // var errorMessage = error.message ;
            // console.log("error : ", errorMessage);
            swal("Error!", "Email or Password Incorrect!", "error");
        })
}

let googleSignup = e => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("results:", user)
            db.collection("users").doc(user.uid).set({
                uid: user.uid,
                username: user.displayName,
                email: user.email
            })
                .then(responce => {
                    // swal("success!");
                    console.log("success");
                    window.location = "../Dashboard/index.html";
                })
                .catch(error => {
                    // swal("Error!");
                    console.log("error")
                })
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error ", error)
            // ...
        })
}


let fbSignup = e => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result =>  {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        db.collection('users').doc(user.uid).set({
            uid: user.uid,
            username: user.displayName,
            email: user.email

        })
        .then(responce => {
            // swal("success!");
            console.log("success");
            window.location = "../Dashboard/index.html";
        })
        .catch(error => {
            // swal("Error!");
            console.log("error")
        })
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        // ...
      });

    
}


