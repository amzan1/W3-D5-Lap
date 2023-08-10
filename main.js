// CKEDITOR
CKEDITOR.replace('textarea');

let contentCopy = document.getElementById("editor-content-copy")
let postButton = document.getElementById("postButton")

postButton.addEventListener('click', () => {
    //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
    contentCopy.innerHTML = CKEDITOR.instances.textarea.getData(); // For formatted text

    let btn = document.createElement("button")
    btn.innerText = "delete"
    contentCopy.appendChild(btn)


    function btnRemove() {
        contentCopy.remove()
    }
    btn.addEventListener("click", btnRemove)

});

// LogIn

function LogIn() {
    let name = document.getElementById("name")
    let pass = document.getElementById("pass").value
    let showName = document.getElementById("user-name")
    

    showName.innerText = "hello " + name.value
    localStorage.setItem("name", name.value)
    // 
    // check name
    if(name.value == "") {  
        document.getElementById("message").innerHTML = "**Enter your name please!";  
        return false;  
    }  
    if(name.value.length <=5 ) {  
        document.getElementById("message").innerHTML = "**Name length must be atleast 5 characters";  
        return false;  
    }  
    // check passwoerd
    if(pass == "") {  
        document.getElementById("message").innerHTML = "**Fill the password please!";  
        return false;  
    }  
    if(pass.length < 8) {  
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
        return false;  
    } 
    
    location.href = "./bloog.html";
        
    
    
    
    
}


// Bloog
function logout(){
    localStorage.removeItem("name")
    window.location.href="index.html"
    

}

    let name1 = document.getElementById("name")
    let UserName =  localStorage.getItem("name")
    if(name1 == UserName){
        window.location.href="bloog.html"
        
    }

else if(name1 != UserName){
    window.location.href="index.html"
}

let userName = document.getElementById("user-name")
userName.innerText = localStorage.getItem("name")
