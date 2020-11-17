function changeVisability(id){
  let q=document.getElementById(id);
  let z=document.getElementById("elem"+id);
  q.addEventListener('change', ()=>{
    if(q.checked){
      z.style.visibility="hidden"
    }
    else{
      z.style.visibility="visible"
    }
  })
}
function checkAll(){
  let a = document.getElementById("checkAll")
  let checkboxes = document.querySelectorAll(".checkboxes")
  a.addEventListener('change', ()=> {
    if(a.checked){
    for(let i=0; i<checkboxes.length; i++){
      checkboxes[i].checked=true;
      id=checkboxes[i].id;
      z=document.getElementById("elem"+id);
      z.style.visibility="hidden"
    }
    }
    else{
      for(let i=0; i<checkboxes.length; i++){
      checkboxes[i].checked=false;
      id=checkboxes[i].id;
      z=document.getElementById("elem"+id);
      z.style.visibility="visible"
    }
  }
  })
}