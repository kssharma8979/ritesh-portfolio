const roles = [

"Full Stack Developer",

"Python Developer",

"AI Enthusiast"

]



let index = 0

const typing =
document.getElementById(
"typing"
)



function animateText(){

if(!typing)return

typing.style.opacity="0"



setTimeout(()=>{

typing.innerHTML=

roles[index]



typing.style.opacity="1"



index++

if(index>=roles.length){

index=0

}

},250)

}



animateText()



setInterval(

animateText,

2200

)





const navbar =

document.querySelector(
"nav"
)



window.addEventListener(

"scroll",

()=>{

if(

window.scrollY>50

){

navbar.style.background=

"rgba(5,10,18,.75)"



navbar.style.boxShadow=

"0 10px 40px rgba(0,215,255,.10)"

}

else{

navbar.style.background=

"rgba(0,0,0,.18)"



navbar.style.boxShadow=

"none"

}

}

)





const cards =

document.querySelectorAll(

".card,.project,.grid div"

)



cards.forEach(

(card)=>{

card.addEventListener(

"mouseenter",

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





const navLinks =

document.querySelectorAll(

"nav a"

)



navLinks.forEach(

(link)=>{

link.addEventListener(

"click",

()=>{

navLinks.forEach(

(a)=>{

a.style.color=

"white"

}

)



link.style.color=

"#00d7ff"

})

})





window.addEventListener(

"load",

()=>{

document.body.style.opacity="1"

})