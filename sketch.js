
const body = document.body;
let i;

for(i = 0; i<16; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("box:hover");
    body.append(div);

}