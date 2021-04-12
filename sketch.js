
const body = document.getElementById("container")

for(i = 0; i<1600; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("box:hover");
    body.append(div);

}