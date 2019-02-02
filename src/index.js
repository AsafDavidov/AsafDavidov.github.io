document.addEventListener("DOMContentLoaded", ()=>{

  const homeLink = document.getElementById('home')
  const aboutLink = document.getElementById('about')
  const projects = document.getElementById('projects')
  const resume = document.getElementById('resume')

  homeLink.addEventListener("click", ()=>{
    console.log("lol");
  })
})

function linkedInHover(element){
  element.setAttribute("src", "images/In-2C-54px-TM.png")
}
function linkedInUnHover(element) {
  element.setAttribute("src", "images/In-Black-54px-TM.png")
}
