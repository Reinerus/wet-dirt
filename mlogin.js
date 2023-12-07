    
    function managerlog(){
    let password = "admin";
    let userInput = document.getElementById("managerPassword").value;
        if(userInput === password){

            location.replace("edit.html")
        } 
        else {
            alert("Incorrect Password");
            location.replace("index.html")
        }
    }
 