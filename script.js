const expand1 = document.getElementById("expand1")
const expand2 = document.getElementById("expand2")
const expand3 = document.getElementById("expand3")
const expand4 = document.getElementById("expand4")
const body1 = document.getElementById("body1")
const body2 = document.getElementById("body2")
const body3 = document.getElementById("body3")
const body4 = document.getElementById("body4")

expand1.addEventListener("click", e=>{
    if(expand1.innerText == "Expand"){
        body1.classList.add("show")
        expand1.innerText = "Collapse"
    }else{
        body1.classList.remove("show")
        expand1.innerText = "Expand"
    }
})
expand2.addEventListener("click", e => {
    if(expand2.innerText == "Expand"){
        body2.classList.add("show")
        expand2.innerText = "Collapse"
    }else{
        body2.classList.remove("show")
        expand2.innerText = "Expand"
    }
})
expand3.addEventListener("click", e=>{
    if(expand3.innerText == "Expand"){
        body3.classList.add("show")
        expand3.innerText = "Collapse"
    }else{
        body3.classList.remove("show")
        expand3.innerText = "Expand"
    }
})
expand4.addEventListener("click", e=>{
    if(expand4.innerText == "Expand"){
        body4.classList.add("show")
        expand4.innerText = "Collapse"
    }else{
        body4.classList.remove("show")
        expand4.innerText = "Expand"
    }
})

