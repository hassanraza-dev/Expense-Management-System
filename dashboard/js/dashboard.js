var i =JSON.parse(localStorage.getItem("currentperson"));


    
function user(){
    document.getElementById("cuser").style.color = "yellow"
    document.getElementById("cuser").style.textTransform = "capitalize"
 window.onload=document.getElementById("cuser").innerHTML = i.username;
}
window.onload = user;


let logout = ()=>
{
    localStorage.removeItem("currentperson");
    window.location.href = "../index.html";
}






    
function expid() {
    return parseInt(Math.floor((Math.random() * 1000) + 1000));
  }
  
  function addexp() {
    var keys = ['desc', 'amount'];
    var obj = {};
  
    keys.forEach(function (item) {
        var result = document.getElementById(item).value;
        if (result) {
            obj[item] = result;
        }
    })
  
    var items = getitems();
  
    
  
    if (Object.keys(obj).length) {
        var items = getitems();
        obj.id = expid();
        items.unshift(obj);
        var data = JSON.stringify(items);
        localStorage.setItem("items", data);
       
    }
  
  
  function getitems() {
    var itemsRecord = localStorage.getItem("items");
    var items = [];
    if (!itemsRecord) {
        return items;
    } else {
        items = JSON.parse(itemsRecord);
        return items;
        
    }
  }
 
 
  var btn = "<button class='btn btn-danger' onclick='remove()'>Delete</button>";
  var html = "<table border='1' class='table table-bordered table-hover'>";
  for (var i = 0; i < items.length; i++) {
            
           
    html += "<tr>";
    html += "<td>" +items[i].desc + "</td>";
    html += "<td>" +items[i].amount + "</td>";
    html += "<td>" + btn + "</td>";
    
    html += "</tr>";
  
   }
html += "</table>";
document.getElementById("panel").innerHTML = html;

document.getElementById("desc").value = ""
document.getElementById("amount").value = ""


}
let clearall = ()=>
{
   localStorage.removeItem("items")
   location.reload();

   
}
function remove() {    
    var items = JSON.parse(localStorage.getItem('items'));
    var index = items.map(function(element) {
      return element.id;
    }).indexOf(items.id);
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    addexp();

    
  }
// function remove(id) {
//     var items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//     var index;
//     for (var i = 0; i < items.length; i++) {
//         if (items[i].id === id) {
//           index=i;
//           break;
//         }
//     }
//     if(index === undefined) return 
//     items.splice(index, 1);
//     localStorage.setItem('items', JSON.stringify(items));
// }


// var btn = "<button class='btn btn-danger' onclick='my()'>Delete</button>";
// document.write(btn)