
const mainGrid = document.querySelector("#mainGrid");
const slider = document.getElementById("myRange");
const gridInfo = document.querySelector("#gridInfo")

gridCreator(slider.value);
gridInfo.textContent = (slider.value) + " X " + (slider.value);

// Changing resolution by using buttons
const preset = document.querySelectorAll(".presets");

preset.forEach((preset) => {

    preset.addEventListener('click', () => {

        if (preset.id == "8")
            slider.value = 8;

        else if (preset.id == "16")
            slider.value = 16;

        else if (preset.id == "32")
            slider.value = 32;

        else
            slider.value = 64;

        gridCreator(slider.value);
        gridInfo.textContent = (slider.value) + " X " + (slider.value);
    })
})

slider.oninput = function () {
    gridCreator(this.value);
    gridInfo.textContent = (this.value) + " X " + (this.value);
}




function gridCreator(num) {

    if (mainGrid.hasChildNodes) {
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

    //GRID BORDER TOGGLE
    const element = document.querySelectorAll(".column");
    const gborder = document.querySelector(".gridToggle");

    gborder.addEventListener('click', () => {

        switch (gborder.value) {

            case "1":
                {
                    element.forEach((element) => {

                        element.setAttribute("style", "border-style: none;");

                    });
                    gborder.value = "0";
                    break;
                }

            case "0": {
                element.forEach((element) => {
                    element.setAttribute("style", "border-style: solid;");

                });
                gborder.value = "1";
                break;
            }
        }
    });
}




//Changing the border style 




