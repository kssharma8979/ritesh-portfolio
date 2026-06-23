const roles = [

"Full Stack Developer",

"Python Developer",

"AI Developer"

]

let current = 0

const typing = document.getElementById("typing")

function updateRole(){

typing.style.opacity = 0

setTimeout(()=>{

typing.innerHTML = roles[current]

typing.style.opacity = 1

current++

if(current >= roles.length){

current = 0

}

},300)

}

updateRole()

setInterval(

updateRole,

2200

)



const sections =

document.querySelectorAll(

"section"

)



const observer =

new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(

entry.isIntersecting

){

entry.target

.style.opacity="1"

entry.target

.style.transform=

"translateY(0)"

}

}

)

},

{

threshold:.2

}

)



sections.forEach(

(section)=>{

section.style.opacity=0

section.style.transform=

"translateY(80px)"

section.style.transition=

"all 1s"

observer.observe(

section

)

}

)



window.addEventListener(

"scroll",

()=>{

const nav =

document.querySelector(

"nav"

)

if(

window.scrollY>50

){

nav.style.background=

"rgba(0,0,0,.35)"

}

else{

nav.style.background=

"transparent"

}

}

)
