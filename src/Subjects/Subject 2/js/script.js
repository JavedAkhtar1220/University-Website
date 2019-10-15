// CLosing
document.querySelector(".close").addEventListener('click',
    function () {
        document.querySelector(".bg-modal").style.display = "none";
        document.querySelector("#checkingword").value = "";
        document.querySelector("#result").innerHTML = "";
    });
// Closing 

function clearFun() {
    document.querySelector("#checkingword").value = ""; 
    document.querySelector("#result").innerHTML = "";

}

// Palindrome Function 

document.getElementById("palindrome").addEventListener('click',
    function () {
        document.querySelector(".bg-modal").style.display = "flex";
        document.querySelector("#p-heading").innerHTML = "Palidrome Program";
        document.querySelector("#popup-heading").innerHTML = "Check whether it is palidrome or not";
        document.getElementById("output").onclick = function() {palindromeFun()};
    });
function palindromeFun() {
    var word = document.querySelector("#checkingword").value;
    var len = word.length;
    var wordArray = word.split('');
    var reverseWordArray = wordArray.reverse();
    var compareString = reverseWordArray.join('');

    if (word == "") {
        document.getElementById("result").innerHTML = "**Please fill out  input field first";
        document.getElementById("result").style.color = "red";
        return false;
    }
    if ((word.toUpperCase()) === (compareString.toUpperCase())) {
        document.getElementById("result").innerHTML = "The word is Palindrome";
        document.getElementById("result").style.color = 'blue ';
    } else {
        document.getElementById("result").innerHTML = "The word is Not Palindrome";
        document.getElementById("result").style.color = "blue";
        return false;
    }
}

// Palindrome Function 

// Even or Odd Program 

document.getElementById("evenOdd").addEventListener('click',
    function () {
        document.querySelector(".bg-modal").style.display = "flex";
        document.querySelector("#p-heading").innerHTML = "Even or Odd Program";
        document.querySelector("#popup-heading").innerHTML = "Check whether it is Even or Odd number";
        var wordtype = document.querySelector("#checkingword");
        wordtype.type = "number";
        document.getElementById("output").onclick = function() {evenOddFun()};
    });
    function evenOddFun() {
        var word = document.querySelector("#checkingword").value;
        
        if (word == "") {
            document.getElementById("result").innerHTML = "**Please fill out  input field first";
            document.getElementById("result").style.color = "red";
            return false;
        }
        
        if (word%2 == 0){
            document.getElementById("result").innerHTML = "Enter number is Even Number ";
            document.getElementById("result").style.color = "blue";
        }else {
            document.getElementById("result").innerHTML = "Enter Number is Odd Number ";
            document.getElementById("result").style.color = "blue";
        }
    };
