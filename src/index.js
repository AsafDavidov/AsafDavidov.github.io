document.addEventListener("DOMContentLoaded", ()=>{
  const navbar = document.getElementById('navbar')
  const homeDiv = document.getElementById('home-div')
  const aboutDiv = document.getElementById('about-div')
  const projectsDiv = document.getElementById('projects-div')
  const resumeDiv = document.getElementById('resume-div')

  aboutDiv.setAttribute("hidden",'')
  projectsDiv.setAttribute("hidden",'')
  resumeDiv.setAttribute("hidden",'')
  navbar.addEventListener("click", (element)=>{
    homeDiv.setAttribute("hidden",'')
    aboutDiv.setAttribute("hidden",'')
    projectsDiv.setAttribute("hidden",'')
    resumeDiv.setAttribute("hidden",'')
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
        resumeDiv.removeAttribute("hidden")
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
