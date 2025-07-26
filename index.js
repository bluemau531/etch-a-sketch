// Reference to Div in HTML Doc
const container = document.getElementById("container");
// Style for Container
container.style.display = "inline-block";
container.style.width = "auto";
container.style.border = "5px solid white";


// Logic for Holding Down Mouse
let mouseDown = false;

document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

grid();

function grid(){
    // Grid Loop 16x16
    for(let t=0; t<16; t++){
    // Rows 1-16
    const row = document.createElement("div");
    row.style.display = "flex";
        for(let r=0; r<16; r++){
            // The Div Element Box
            const div = document.createElement("div");
            // Styling the Div Boxes
            div.textContent = "";
            div.style.border = "15px solid black";
            div.style.backgroundColor = "black";
            div.style.padding = "10px";

            // Mouse Event Listeners 
            div.addEventListener("mouseenter", () => {
                if (mouseDown) {
                    div.style.backgroundColor = "lightblue";
                    div.style.border = "15px solid lightblue";
                }
            });

             div.addEventListener("mousedown", () => {
                div.style.backgroundColor = "lightblue";
                div.style.border = "15px solid lightblue";
            });

            div.addEventListener("click", () => {
                div.style.backgroundColor = "black";
                div.style.border = "15px solid black";
            });

            // Add Div to Rows (16 each Row)
            row.appendChild(div);
        }
        // Append The Row to Container
        container.appendChild(row);
    }
}


