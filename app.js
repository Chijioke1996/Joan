const Boxes = document.querySelectorAll(".box")
Boxes.forEach(box => { 
   box.addEventListener("click", () => {
    box.classList.toggle("box-green")
   })
})

