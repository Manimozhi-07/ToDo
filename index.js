const input = document.querySelector("#input-field");
const add_btn = document.querySelector("#add-button");
const list_container = document.querySelector(".list-container");
function myFunction() {
  if (input.value.trim().length == "") {
    alert("Field is empty :( Add some task");
    return;
  }
  const list_field = document.createElement("div");
  list_field.classList.add("list-field");
  list_container.appendChild(list_field);

  const list_item = document.createElement("p");
  list_item.id = "list-item";
  list_field.appendChild(list_item);

  list_item.innerText = input.value;

  const edit_btn = document.createElement("button");
  edit_btn.id = "edit-button";
  edit_btn.innerText = "Edit";
  list_field.appendChild(edit_btn);

  edit_btn.addEventListener("click", () => {
    input.value = list_item.innerText;
    const parent = edit_btn.parentElement;
    parent.parentElement.removeChild(parent);
  });

  const del_btn = document.createElement("button");
  del_btn.id = "delete-button";
  del_btn.innerText = "Delete";
  list_field.appendChild(del_btn);

  del_btn.addEventListener("click", () => {
    const parent = del_btn.parentElement;
    parent.parentElement.removeChild(parent);
  });

  list_item.addEventListener("dblclick", () => {
    list_item.classList.add("line-through");
    edit_btn.setAttribute("disabled", "disabled");
  });
  input.value = "";
}

add_btn.addEventListener("click", myFunction);
input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    // e.preventDefault();
    myFunction();
  }
});

function time() {
  var date = new Date().toLocaleDateString();
  var d = new Date();
  var s=d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  if(s.toString().length===1){
    var s="0"+s;
  }
  if(m.toString().length===1){
    var m="0"+m;
  }
  if(h.toString().length===1){
    var h="0"+h;
  }
  document.getElementById("date").innerText = date;
  document.getElementById("time").innerText = h + ":" + m + ":" + s;
}
setInterval(time, 1000);
