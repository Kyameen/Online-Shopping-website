function validate(){
    let name = document.getElementById("name").value;
    let surname1 = document.getElementById("lastname").value;
    let message = document.getElementById("msg").value;
    let error_message = document.getElementById("errormessage");
    
    error_message.style.padding = "11px";
    
    var text;
    if(name.length<2){
      text = "Please enter your real name";
      error_message.innerHTML = text;
      return false;
    }
    if(surname1.length<4){
      text = "Please enter your real surname";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length<=10){
      text = "Please enter more than 10 Characters in the message";
      error_message.innerHTML = text;
      return false;
    }
    alert("your form is submitted successfully we will be back to you soon");
    return true;
  }