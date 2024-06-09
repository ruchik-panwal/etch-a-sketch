//@ts-check
const mainGrid = document.querySelector("#mainGrid");
const slider = document.getElementById("myRange");
const gridInfo = document.querySelector("#gridInfo")

gridCreator(slider.value);
gridInfo.textContent = (slider.value) + " X " + (slider.value) ;

slider.oninput = function () {
    gridCreator(this.value)
    gridInfo.textContent = (this.value) + " X " + (this.value) ;
}


function gridCreator(num) {

   if(mainGrid.hasChildNodes)
    {
        mainGrid.textContent = '';
    }

    for (let i = 0; i < num; i++) {

        const row = document.createElement("div");
        row.classList.add("row");
        mainGrid.appendChild(row);

        for (let j = 0; j < num; j++) {

            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);

        }
    }
}