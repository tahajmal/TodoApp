 
 var list = document.getElementById("list")
 function addItem(){
     
var inputval = document.getElementById("todo");
var li= document.createElement("li");
var liText = document.createTextNode(inputval.value);
li.appendChild(liText)
list.appendChild(li);
  todo.value = "";

//Button
var dltbutn = document.createElement("button");
var dltText = document.createTextNode("Delete");
dltbutn.style.color = '#fff';
dltbutn.style.background = "#F00";
dltbutn.style.marginLeft="10px"
dltbutn.style.marginRight="10px"
dltbutn.style.borderColor="blue"
dltbutn.style.borderRadius="30px"
dltbutn.appendChild(dltText);
li.appendChild(dltbutn);

dltbutn.setAttribute("class", "delete");
dltbutn.setAttribute("onclick" , "deleting(this)")

//Edit
var edi =document.createElement("button")
var ediText = document.createTextNode("Edit")
edi.style.color = 'white';
edi.style.background = "cornflowerblue";
edi.style.width="60px"
edi.style.borderColor="blue"
edi.style.borderRadius="30px"
edi.appendChild(ediText);
li.appendChild(edi);
edi.setAttribute("onclick" , "edit(this)");

     console.log(li);
 }


 function deleting(e){
 e.parentNode.remove();
 }
 function edit(e){
   var val = e. parentNode.firstChild.nodeValue;
   var editval = prompt("Enter Edit Value");
   e.parentNode.firstChild.nodeValue = editval;
 }

 function deleteAll(){
   list.innerHTML= "";
 }