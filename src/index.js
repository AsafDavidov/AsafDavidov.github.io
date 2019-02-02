document.addEventListener("DOMContentLoaded", ()=>{
  //Element gathering and page setup
  const navbar = document.getElementById('navbar')
  const homeDiv = document.getElementById('home-div')
  const aboutDiv = document.getElementById('about-div')
  const projectsDiv = document.getElementById('projects-div')
  const resumeDiv = document.getElementById('resume-div')
  const homeTag = document.getElementById('home')
  aboutDiv.setAttribute("hidden",'')
  projectsDiv.setAttribute("hidden",'')
  resumeDiv.setAttribute("hidden",'')
  homeTag.classList.add("active")
  
  //Navbar handling
  navbar.addEventListener("click", (element)=>{
    Array.from(document.getElementsByClassName('nav-link')).forEach(link=>link.classList.remove("active"))
    element.target.classList.add("active")
    switch (element.target.id) {
      case "home":
        homeDiv.removeAttribute("hidden")
        aboutDiv.setAttribute("hidden",'')
        projectsDiv.setAttribute("hidden",'')
        resumeDiv.setAttribute("hidden",'')
        break;
      case "about":
        aboutDiv.removeAttribute("hidden")
        homeDiv.setAttribute("hidden",'')
        projectsDiv.setAttribute("hidden",'')
        resumeDiv.setAttribute("hidden",'')
        break;
      case "projects":
        projectsDiv.removeAttribute("hidden")
        homeDiv.setAttribute("hidden",'')
        aboutDiv.setAttribute("hidden",'')
        resumeDiv.setAttribute("hidden",'')
        break;
      case "resume":
        homeDiv.setAttribute("hidden",'')
        aboutDiv.setAttribute("hidden",'')
        projectsDiv.setAttribute("hidden",'')
        resumeDiv.removeAttribute("hidden")
        break;
    }
  })
})

//Linkedin Logo Functionality
function linkedInHover(element){
  element.setAttribute("src", "images/In-2C-54px-TM.png")
}
function linkedInUnHover(element) {
  element.setAttribute("src", "images/In-Black-54px-TM.png")
}
