
function guid() {
  return parseInt(Math.floor((Math.random() * 1000) + 1000));
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



  let login = () => {
    
    var memberRecord = JSON.parse(localStorage.getItem("members"));
    let lgemail = document.getElementById("lgemail").value;
    let lgpass = document.getElementById("lgpass").value;

    for (let i = 0; i <= memberRecord.length; i++)
    {
      if(memberRecord[i].password == lgpass && memberRecord[i].email == lgemail)
      {
        
        localStorage.setItem("currentperson", JSON.stringify(memberRecord[i]));
        window.location.href = "./dashboard/dashboard.html";
      }
    }

  }