const parentDiv=document.getElementById("containerButton");

for(let i=1;i<=100;i++){
    let button=document.createElement("button");
    button.textContent="Button "+i;
    parentDiv.appendChild(button);
    if(i%2===0){
        button.style.backgroundColor="red";
    }
}
console.log("remove() and removeChild()");

const itemDelete=document.getElementById("item4");
itemDelete.remove();

const list=document.getElementById("list1");
const itemDelete2=document.getElementById("item2");
list.removeChild(itemDelete2);