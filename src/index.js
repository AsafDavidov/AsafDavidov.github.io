document.addEventListener("DOMContentLoaded", ()=>{
  const homeDiv = document.getElementById('home-div')
  const aboutDiv = document.getElementById('about-div')
  const projectsDiv = document.getElementById('projects-div')
  aboutDiv.setAttribute("hidden",'')
  projectsDiv.setAttribute("hidden",'')
  const navbar = document.getElementById('navbar')
  navbar.addEventListener("click", (element)=>{
    homeDiv.setAttribute("hidden",'')
    aboutDiv.setAttribute("hidden",'')
    projectsDiv.setAttribute("hidden",'')

    switch (element.target.id) {
      case "home":
        homeDiv.removeAttribute("hidden")
        break;
      case "about":
        aboutDiv.removeAttribute("hidden")
        break;
      case "projects":
        projectsDiv.removeAttribute("hidden")
        break;
      case "resume":
        break;
    }
  })
})

function linkedInHover(element){
  element.setAttribute("src", "images/In-2C-54px-TM.png")
}
function linkedInUnHover(element) {
  element.setAttribute("src", "images/In-Black-54px-TM.png")
}
