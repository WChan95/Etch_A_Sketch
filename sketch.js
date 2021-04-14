

const body = document.getElementById("container")


for(i = 0; i<1600; i++){
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