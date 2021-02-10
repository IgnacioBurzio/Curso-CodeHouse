const slider = document.querySelector(".slider")
let sliderSection = document.querySelectorAll(".slider-section")
let sliderSectionLast = sliderSection[sliderSection.length - 1]


const prevBtn = document.getElementById("prevBtn"),
nextBtn = document.getElementById("nextBtn")

slider.insertAdjacentElement("afterbegin",sliderSectionLast)


function next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0]
    slider.style.marginLeft="-200%"
    slider.style.transition="all .5s"
    setTimeout(function(){
        slider.style.marginLeft="-100%"
        slider.style.transition="none"
        slider.insertAdjacentElement("beforeend",sliderSectionFirst)
    },500)

}

function previous(){
    let sliderSectionLast = document.querySelectorAll(".slider-section")[sliderSection.length - 1]
    slider.style.marginLeft="0%"
    slider.style.transition="all .5s"
    setTimeout(function(){
        slider.style.marginLeft="-100%"
        slider.style.transition="none"
        slider.insertAdjacentElement("afterbegin",sliderSectionLast)
    },500)

}

nextBtn.addEventListener("click",()=>{
    next()
})

prevBtn.addEventListener("click",()=>{
    previous()
})

setInterval(function(){next()},5000)