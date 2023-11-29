
function Signup(f) {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;

    var user = {
        email: email,
        name: name,
        password: password,
    };
    
    localStorage.setItem(name, JSON.stringify(user));
}

function login(e){
    var name = document.getElementById("name").value;
    var userFromLocalStorage = JSON.parse(localStorage.getItem(name));

    if(!userFromLocalStorage){
    console.log('Name Not Found');
    }
    var password = document.getElementById("password").value;
    if (userFromLocalStorage.password !== password){
        console.log('Wrong Password');
    }
    console.log('logged in');
}