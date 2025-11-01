const boton = document.getElementById("buton")

boton.addEventListener("click", () => {

    if(!document.querySelector(".Menu")){

        const menu = document.createElement("div")
        document.body.appendChild(menu)

        
        const aH = document.createElement("a")
        menu.appendChild(aH)
        
        const aB = document.createElement("a")
        menu.appendChild(aB)
        
        const Bg = document.createElement("a")
        menu.appendChild(Bg)
        
        menu.className = "Menu"
        
        console.log("BBB")


    }

})