

gridCreator(2);

function gridCreator(num) {

    for (let i = 0; i < num; i++) {

        const mainGrid = document.querySelector("#mainGrid");

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