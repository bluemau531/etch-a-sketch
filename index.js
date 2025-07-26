// Reference to Div in HTML Doc
const container = document.getElementById("container");

// Grid Loop 16x16
for(let t=0; t<16; t++){

    // Rows 1-16
    const row = document.createElement("div");
    row.style.display = "flex";

    for(let r=0; r<16; r++){
        // The Div Element Box
        const div = document.createElement("div");
        // Styling the Div Boxes
        div.textContent = "Box";
        div.style.border = "10px solid black";
        div.style.backgroundColor = "gray";
        div.style.margin = "8px";
        // Add Div to Rows (16 each Row)
        row.appendChild(div);
    }
    // Append The Row to Container
    container.appendChild(row);
}




