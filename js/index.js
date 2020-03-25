let user = [];

let create = () => {

  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;


  user.push({ name: name, email: email, pass: pass });
  localStorage.setItem("allperson", JSON.stringify(user));
  
}


let login = () => {
  let lgemail = document.getElementById("lgemail").value;
  let lgpass = document.getElementById("lgpass").value;
  let allperson = JSON.parse(localStorage.getItem("allperson"));
  for (let i = 0; i <= user.length; i++) {
    if(lgemail==allperson[i].email && lgpass==allperson[i].pass){
      alert("welcome")
    }
    else
    {
      alert("something wrong")
    }
  }

}
