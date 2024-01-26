
const checkName = () =>{

    var name = document.getElementById("name").value;
    if(name.length<3){
        var nameError = document.getElementById("nameerror")
        nameError.innerHTML = "Name must be greater than 3 characters"
    }
    else{
        var nameError = document.getElementById("nameerror")
        nameError.innerHTML = ""
    }


}
const submitHandler = (event) =>{
    event.preventDefault();

    console.log("form submitted...")
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    if(name.length<3){
        // alert("Name must be greater than 3 characters")
        var nameError = document.getElementById("nameerror")
        nameError.innerHTML = "Name must be greater than 3 characters"
        
    }
    else{
        var nameValue = document.getElementById("namevalue")
        var emailValue = document.getElementById("emailvalue")
        nameValue.innerHTML = name;
        emailValue.innerHTML = email;
    }

    console.log(name)
    console.log(email)

   

}