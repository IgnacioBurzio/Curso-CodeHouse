console.log("hola")

const $boton = document.querySelector(".navboton")
const $navegacion = document.querySelector(".menu-mobile")


function nav(){
    $navegacion.classList.toggle("oculto")
    
}

document.addEventListener("click",(e)=>{
    
    if(e.target.matches(".navboton")){
        nav()           
    }
    
    console.log("click en",e.target)
})