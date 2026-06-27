const roles=[

"Full Stack Developer",

"Python Developer",

"AI Enthusiast"

]



let current=0



const typing=

document.getElementById(
"typing"
)



function changeRole(){

if(!typing)return



typing.style.opacity=0



setTimeout(()=>{

typing.innerHTML=

roles[current]



typing.style.opacity=1



current++



if(

current>=roles.length

){

current=0

}



},250)

}



changeRole()



setInterval(

changeRole,

2200

)





const sections=

document.querySelectorAll(

"section"

)



const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(

entry.isIntersecting

){

entry.classList.add(

"show"

)

}

}

)

},

{

threshold:.15

}

)



sections.forEach(

(section)=>{

section.classList.add(

"hidden"

)

observer.observe(

section)

})





window.addEventListener(

"scroll",

()=>{

const nav=

document.querySelector(

"nav"

)



if(

window.scrollY>60

){

nav.style.background=

"rgba(8,14,24,.70)"



nav.style.boxShadow=

"0 8px 40px rgba(0,215,255,.12)"

}

else{

nav.style.background=

"rgba(0,0,0,.15)"



nav.style.boxShadow=

"none"

}

}

)





const links=

document.querySelectorAll(

"nav a"

)



links.forEach(

(link)=>{

link.addEventListener(

"click",

()=>{

links.forEach(

(a)=>{

a.style.color=

"white"

}

)



link.style.color=

"#00d7ff"

})

})





const cards=

document.querySelectorAll(

".project,.card,.grid div"

)



cards.forEach(

(card)=>{

card.addEventListener(

"mousemove",

()=>{

card.style.transform=

"translateY(-8px)"

})



card.addEventListener(

"mouseleave",

()=>{

card.style.transform=

"translateY(0)"

})

})





window.addEventListener(

"load",

()=>{

document.body.style.opacity=1

})