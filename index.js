const input=document.querySelector("#input-field");
const add_btn=document.querySelector("#add-button");
const list_container=document.querySelector(".list-container");

add_btn.addEventListener('click',()=>{
    const val=input.value;
    if(input.value.trim().length==''){
        alert("Field is empty");
        return
    }
    const list_field=document.createElement('div');
    list_field.classList.add('list-field');
    list_container.appendChild(list_field);

    const list_item=document.createElement('p');
    list_item.id='list-item';
    list_field.appendChild(list_item); 
   
    list_item.innerText=val;

    const edit_btn=document.createElement('button');
    edit_btn.id='edit-button';
    edit_btn.innerText='Edit';
    list_field.appendChild(edit_btn);
    
    const del_btn=document.createElement('button');
    del_btn.id='delete-button';
    del_btn.innerText='Delete';
    list_field.appendChild(del_btn);

    list_item.addEventListener('dblclick',()=>{
          list_item.classList.add('line-through');
    });
    input.value=" ";
    
});
