function Signup() {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = {
        username: username,
        email: email,
        password: password,
    };

    localStorage.setItem(email, JSON.stringify(user));

}


function Login(){
    var emailLogin = document.getElementById("lemail").value;
    var password = document.getElementById("lpassword").value;
    var storedUserData = localStorage.getItem(emailLogin);


    if (password != ""){
     if(storedUserData) {
            var storedUser = JSON.parse(storedUserData)
            if(password === storedUser.password){
                location.replace("home.html");


            } 
        else {
            alert("Incorrect Password");
            }
        }
    }
    else {
        alert("email does not exist");
    }
}

function WelcomeMyUser (){

    var storedUserData = localStorage.getItem(emailLogin,username)
    var storedUser = JSON.parse(storedUserData)
    
    storedUser = {
        username:username,
        password:password,
        email:email,
    }

    var paragragh = document.getElementById("welcomeusername");
    var text = document.createTextNode(username);

    paragragh.appendChild(text);
}