const boton = document.getElementById("buton")
const min = document.getElementById("men")

boton.addEventListener("click", () =>{


    const aH = document.createElement("a")
    aH.textContent = "Home"
    min.appendChild(aH)
    
    const aB = document.createElement("a")
    aB.textContent = "About"
    min.appendChild(aB)
    
    const Bg = document.createElement("button")
    Bg.textContent = "Blog"
    Bg.id = "Bloh"
    min.appendChild(Bg)
    
    
    min.className = "Menu"
    
    console.log("BBB")

    const BlogP = document.getElementById("Bloh")
    
    BlogP.addEventListener("click", () => {
    
        min.className = "MenuN"
        min.classList.remove("Menu")

        aH.remove()
        aB.remove()
        Bg.remove()
    
    })

})

/*
boton.addEventListener("click", () => {

    if(!document.querySelector(".Menu")){

        const menu = document.createElement("div")
        document.body.appendChild(menu)

        


        
    }

})
*/