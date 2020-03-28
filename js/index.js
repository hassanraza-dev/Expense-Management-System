
function guid() {
  return parseInt(Math.random());
}

function create() {
  var keys = ['username', 'email', 'password'];
  var obj = {};

  keys.forEach(function (item) {
      var result = document.getElementById(item).value;
      if (result) {
          obj[item] = result;
      }
  })

  var members = getMembers();

  

  if (Object.keys(obj).length) {
      var members = getMembers();
      obj.id = guid();
      members.push(obj);
      var data = JSON.stringify(members);
      localStorage.setItem("members", data);
     
  }
}

function getMembers() {
  var memberRecord = localStorage.getItem("members");
  var members = [];
  if (!memberRecord) {
      return members;
  } else {
      members = JSON.parse(memberRecord);
      return members;
  }
}

//   var alluser = JSON.parse(localStorage.getItem("allperson"))
//  let user = [alluser];

//   let create = () => {
   

//     let name = document.getElementById("username").value;
//     let email = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     user.push({ name: name, email: email, pass: pass }); 
//     localStorage.setItem("allperson", JSON.stringify(user));
//   }



  let login = () => {
    let allperson = JSON.parse(localStorage.getItem("allperson"));
    let lgemail = document.getElementById("lgemail").value;
    let lgpass = document.getElementById("lgpass").value;


    for (let i = 0; i <= allperson.length; i++) {
      if (lgemail == allperson[i].email && lgpass == allperson[i].pass) {

        localStorage.setItem("currentperson", JSON.stringify(allperson[i]));
        window.location.href = "./dashboard/dashboard.html";
      }
    }
  }