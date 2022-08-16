//////////////////////////////////checkBox

let check=document.querySelectorAll('.checkbox')
let icon=document.querySelectorAll('.checkbox i')
console.log(check);

check.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('view')
        icon.forEach(i=>{
            i.classList.toggle('view-icon')
        });
        

    })
})