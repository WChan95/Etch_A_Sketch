

const boxContainer = document.getElementById("container2");
const body = document.getElementById("container3")
const indivBox = document.getElementById("etch");


//Creates default etch and sketch
for(i = 0; i<16; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("id","etch");
    body.appendChild(div);
    etch();

}

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

function resetSketch(){
    const arrayDiv = document.querySelectorAll("#etch");
    const resetSketch = document.getElementById("resetSketch");
    resetSketch.addEventListener('click', (e) => {
        arrayDiv.forEach(element => {
                element.classList.remove("colorBlack");
        });
    })
}
const sketchForm = document.getElementById("sketchForm");
sketchForm.addEventListener('click', (e)=>{
    let gridSize = prompt("Please enter a number");
    boxContainer.removeChild(document.getElementById("container3"));
    const newBody = document.createElement("div");
    newBody.setAttribute("id", "container3");
    newBody.classList.add("container3");
    boxContainer.insertBefore(newBody, boxContainer.firstChild);
    let totalBox = gridSize * gridSize;
    newBody.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`
    newBody.style.gridTemplateRows= `repeat(${gridSize}, 20px)`
    for(i = 0; i < totalBox; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        div.setAttribute("id","etch");
        newBody.appendChild(div);
    }
    etch();
    resetSketch();
    
})


//Reset etch a sketh to blank slate
resetSketch();