

  function nameVal(){
  

    var uname = document.getElementById("thename").value.trim();
    var sub = document.getElementById("subject").value.trim();
    var msg = document.getElementById("message").value.trim();

    if(uname === '' || sub === '' || msg === '')
    {
        alert("Some fields are empty.")
        return false
    }
    else{
return true;
    }
  }
