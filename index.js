const container = document.getElementById("container");
const myButton = document.getElementById("myButton");

// Style for Container
container.style.display = "inline-block";
container.style.width = "auto";
container.style.border = "5px solid white";

// Logic for Holding Down Mouse
let mouseDown = false;
document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

grid();

function grid() {
    for (let t = 0; t < 16; t++) {
        const row = document.createElement("div");
        row.style.display = "flex";

        for (let r = 0; r < 16; r++) {
            const div = document.createElement("div");
            div.textContent = "";
            div.style.border = "15px solid black";
            div.style.backgroundColor = "black";
            div.style.padding = "10px";

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

            row.appendChild(div);
        }

        container.appendChild(row);
    }
}

myButton.addEventListener("click", () => {
    const boxes = container.querySelectorAll("div > div");
    boxes.forEach(div => {
        div.style.backgroundColor = "black";
        div.style.border = "15px solid black";
    });
});
