// Show Password 
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("pass-eye").style.opacity = "0.6";
    }else {
        x.type = "password";
        document.getElementById("pass-eye").style.opacity = "1";
    }
}
// Show Confirm Password 
function showConfirmPassword() {
    var y = document.getElementById("confirmPassword");
    if (y.type === "password") {
        y.type = "text";
        document.getElementById("cpass-eye").style.opacity = "0.6";
    }else {
        y.type = "password";
        document.getElementById("cpass-eye").style.opacity = "1";
    }
}





$(document).ready(function() {
    $("#e-username").hide();
    $("#e-mobileNumber").hide();
    $("#e-email").hide();    
    $("#e-password").hide();
    $("#e-confirmPassword").hide();

    var username_err = true ;
    var mobileNumber_err = true ;
    var email_err = true ;
    var password_err = true ;
    var confirmPassword_err = true ;


    // Validation for Username 
    $("#username").keyup(function(){
        username_check();
    });
    function username_check() {
        var username_val = $("#username").val();
         
        if(username_val.length == "") {
            $("#e-username").show();
            $("#e-username").html("**Please fill the username");
            $("#e-username").focus();
            username_err = false ;
            return false ;
        }else {
            $("#e-username").hide();
        }

        if((username_val.length <5) || (username_val.length > 20))  {
            $("#e-username").show();
            $("#e-username").html("**Username must be 5 to 20 characters long");
            $("#e-username").focus();
            username_err = false ;
            return false ;
        }else {
            $("#e-username").hide();
        }
    }

    // Validation for mobile number 
    $("#mobileNumber").keyup(function(){
        mobileNumber_check();
    });

    function mobileNumber_check() {
        var mobileNumber_val = $("#mobileNumber").val();
        if (mobileNumber_val == "" ) {
            $("#e-mobileNumber").show();
            $("#e-mobileNumber").html("**Please fill Mobile Number");
            $("#e-mobileNumber").focus();
            mobileNumber_err = false ;
            return false ;
        }else {
            $("#e-mobileNumber").hide();
        }
        
        
        if (mobileNumber_val.charAt(0) != 0) {
            $("#e-mobileNumber").show();
            $("#e-mobileNumber").html("**Mobile Number must start with 03");
            $("#e-mobileNumber").focus();
            mobileNumber_err = false ;
            return false ;
        }else {
            $("#e-mobileNumber").hide();
        }
        if (mobileNumber_val.charAt(1) != 3) {
            $("#e-mobileNumber").show();
            $("#e-mobileNumber").html("**Mobile Number must start with 03");
            $("#e-mobileNumber").focus();
            mobileNumber_err = false ;
            return false ;
        }else {
            $("#e-mobileNumber").hide();
        }

        if (mobileNumber_val.length != 11) {
            $("#e-mobileNumber").show();
            $("#e-mobileNumber").html("**Lenght must be equal to 11");
            $("#e-mobileNumber").focus();
            mobileNumber_err = false ;
            return false ;
        }else {
            $("#e-mobileNumber").hide();
        }
    }

    // Validatio For Email 

    $("#email").keyup(function(){
        email_check();
    });
    function email_check() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ;
        var email_val = $("#email").val();
        
        if (email_val == "") {
            $("#e-email").show();
            $("#e-email").html("Please fill the email");
            $("#e-email").focus();
            email_err = false ;
            return false ;
        }else {
            $("#e-email").hide();
        }

        if (pattern.test(email_val)) {
            $("#e-email").hide();
        }else {
            $("#e-email").show();
            $("#e-email").html("Enter a valid Email");
            $("#e-email").focus();
            email_err = false ;
            return false ;
        }



    }


    // Validation for Password 
    $("#password").keyup(function(){
        password_check();
    });


    function password_check() {
        var password_val = $("#password").val();
        if (password_val == "") {
            $("#e-password").show();
            $("#e-password").html("**Please fill the Password");
            $("#e-password").focus();
            password_err = false ;
            return false ;
        }else {
            $("#e-password").hide();
        }

        if ((password_val.length <8) || (password_val.length > 20)) {
            $("#e-password").show();
            $("#e-password").html("**Password must be 8 to 20 charaters long");
            $("#e-password").focus();
            password_err = false ;
            return false ;
        }else  {
            $("#e-password").hide();
        }

        // Validation for Comfirm Password 
        $("#confirmPassword").keyup(function(){
            confirmPassword_check();
        });
    
    
        function confirmPassword_check() {
            var confirmPassword_val = $("#confirmPassword").val();
            var password_val = $("#password").val();
            if (confirmPassword_val != password_val) {
                $("#e-confirmPassword").show();
                $("#e-confirmPassword").html("**Password not match");
                $("#e-confirmPassword").focus();
                confirmPassword_err = false ;
                return false ;
            }else {
                $("#e-confirmPassword").hide();
            }
        }
    }

    $(".btn").click(function(){
        username_err = true ;
        mobileNumber_err = true ;
        email_err = true ;
        password_err = true ;
        confirmPassword_err = true ; 
        
        username_check();
        mobileNumber_check();
        email_check();
        password_check();
        // confirmPassword_check() ;
        if ((username_err == true) && (mobileNumber_err == true) && (email_err == true) && (password_err == true) && (confirmPassword_err == true)) {
            return true ;
        }else {
            return false ;
        }
    });

});

