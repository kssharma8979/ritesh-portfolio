const roles=[

"Full Stack Developer",

"Python Developer",

"AI Developer"

]

let i=0

const el=

document
.getElementById(
"typing"
)

function run(){

el.innerHTML=

roles[i]

i++

if(
i===roles.length
){

i=0

}

}

run()

setInterval(
run,
2000
)