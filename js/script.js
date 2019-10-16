firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location = "src/Dashboard/index.html";
    }else {
        window.location = "src/Login\ Form/login.html";
    }
});