function Signup() {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = {
        username:username,
        email:email,
        password:password,
    };

    localStorage.setItem(email, JSON.stringify(user));

}


function Login(){
    var email = document.getElementById("lemail").value;
    var password = document.getElementById("lpassword").value;
   console.log(email)

    if(email === localStorage.getItem('email')){
        user = JSON.parse(localStorage.getItem(email));
        console.log(username)
        if(password===localStorage.getItem(email)){
            location.replace("home.html")
        } 
        else {
            alert("Incorrect Password")
        }
    }
    else {
        alert("email does not exist")
    }

}