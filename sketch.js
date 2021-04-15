

const body = document.getElementById("container")

//Creates size of etch a sketch
for(i = 0; i<16; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("id","etch");
    body.appendChild(div);
}

//Allows each div to be individually colored for mouse hover
const arrayDiv = document.querySelectorAll("#etch");
arrayDiv.forEach(element => {
    element.addEventListener("mouseover", (e) =>{
        element.classList.add("colorBlack");
    });
});

//Reset etch a sketh to blank slate
const resetSketch = document.getElementById("resetSketch");
resetSketch.addEventListener('click', (e) => {
    arrayDiv.forEach(element => {
            element.classList.remove("colorBlack");
    });
})

//Set grid and square size
const container3 = document.getElementById("container");
console.log(container3);
container3.style.gridTemplateColumns = `repeat(10, 20px)`;