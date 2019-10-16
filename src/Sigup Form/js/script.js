function digitalClock() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    var time = h + ":" + m + " " + session;
    document.getElementById("clock").innerText = time;

}
setInterval(digitalClock , 1000);

const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
    console.log('user :', user);
});

let signup = e => {
    const username = document.querySelector("#username").value;
    const mobileNumber= document.querySelector("#mobileNumber").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
        return db.collection('users').doc(data.user.uid).set({
            uid:  data.user.uid ,
            username,
            mobileNumber,
            email,
        })
        .then(() =>{
            swal("Good job!", "Your account has been created successfully!", "success")
            .then(() => {
                window.location = "../Login\ Form/login.html";
            });
        });
    })
    .catch(function(error) {
        var errorCode = error.code; 
        var errorMessage = error.message ;
        // console.log("error : ", errorMessage);
        swal("Error!",errorMessage,"error");
    })
};

















