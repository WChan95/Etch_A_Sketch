

const body = document.getElementById("container3")

//Creates default etch and sketch
for(i = 0; i<16; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("id","etch");
    body.appendChild(div);
    etch();
}


//Reset etch a sketh to blank slate
const arrayDiv = document.querySelectorAll("#etch");
const resetSketch = document.getElementById("resetSketch");
resetSketch.addEventListener('click', (e) => {
    arrayDiv.forEach(element => {
            element.classList.remove("colorBlack");
    });
})

const sketchForm = document.getElementById("sketchForm");
sketchForm.addEventListener('click', (e)=>{
    let gridSize = prompt("Please enter a number");
    let totalBox = gridSize * gridSize;
    body.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`
    body.style.gridTemplateRows= `repeat(${gridSize}, 20px)`
    for(i = 0; i < totalBox; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        div.setAttribute("id","etch");
        body.appendChild(div);
    }
    etch();
})

//Allows each div to be individually colored for mouse hover

//Allows each box to be "etched"
function etch(){
    const arrayDiv = document.querySelectorAll("#etch");
    arrayDiv.forEach(element => {
        element.addEventListener("mouseover", (e) =>{
            element.classList.add("colorBlack");
        });
    });
}
