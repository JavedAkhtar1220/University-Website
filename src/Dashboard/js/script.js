
let logout = e => {
    firebase.auth().signOut().then(function() {
        window.location = "../Login\ Form/login.html";
      }).catch(function(error) {
        alert("Error",error);
      });
}
const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
  db.collection('users').doc(user.uid).get()
  .then(doc => {
    if (doc.exists) {
      console.log("Data : ",doc.data());
      let currentUser = doc.data();
      document.getElementById("displayName").innerHTML = currentUser.username;
    }else {
      console.log("No such document");
    }
  })
})