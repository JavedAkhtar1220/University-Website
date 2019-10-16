
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAe7ng0MmXkDW38pSICDT7cX9jYEghoAEA",
    authDomain: "university-site-54604.firebaseapp.com",
    databaseURL: "https://university-site-54604.firebaseio.com",
    projectId: "university-site-54604",
    storageBucket: "university-site-54604.appspot.com",
    messagingSenderId: "294947643251",
    appId: "1:294947643251:web:4f9dc2c3d0458e2077ef06",
    measurementId: "G-5P43RN8H2Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let logout = e => {
    firebase.auth().signOut().then(function() {
        window.location = "../../Login\ Form/login.html";
      }).catch(function(error) {
        alert("Error",error);
      });
}
