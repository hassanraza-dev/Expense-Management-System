var i =JSON.parse(localStorage.getItem("currentperson"));
    
function user(){
    document.getElementById("cuser").style.color = "yellow"
    document.getElementById("cuser").style.textTransform = "capitalize"
 window.onload=document.getElementById("cuser").innerHTML = i.name;
}
window.onload = user;

let logout = ()=>
{
    localStorage.removeItem("currentperson");
    window.location.href = "../index.html";
}
let items = [];
let addexp = ()=>
{
    
    
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    
    items.unshift({ desc:desc, amount:amount});
    localStorage.setItem("items", JSON.stringify(items));
    var getitems =JSON.parse(localStorage.getItem("items"));
    console.log(getitems)
    var html = "<table border='1' class='table'>";
    if(desc !== "" && amount !=="")
    {
        
        for (var i = 0; i < getitems.length; i++) {
            if(getitems.desc == "" && getitems.amount == "")
            {
                localStorage.removeItem("items")
            }
           
            html += "<tr>";
            html += "<td>" +getitems[i].desc + "</td>";
            html += "<td>" +getitems[i].amount + "</td>";
            table += "</tr>";

        }
        html += "</table>";
        document.getElementById("panel").innerHTML = html;
    }
    else{
        alert("Please fill the form")
        
        
    }
}