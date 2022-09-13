const panels = document.querySelectorAll('.panel');

function removeActive(){
  panels.forEach((panel)=>{panel.classList.remove("active")})

}

function tonggleCard(){
  removeActive();
  this.classList.add("active")
}

panels.forEach((panel)=>{
  panel.addEventListener("click",(tonggleCard))
})
