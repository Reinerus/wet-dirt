
function Signup() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(email,password);
}

function Login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(localStorage.getItem("email")){
        if(password===localStorage.getItem(email)){
            location.replace("index.html")
        } 
        else {
            alert("Incorrect Password")
        }
    }
    else {
        alert("email does not exist")
    }

}