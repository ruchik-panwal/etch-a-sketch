

const mainGrid = document.querySelector("#mainGrid");
const slider = document.getElementById("myRange");
const gridInfo = document.querySelector("#gridInfo");

//For the default toggle values
const gborder = document.querySelector(".gridToggle");
gborder.setAttribute("style", "border-style: solid; border-color: white;");

let element;

//Updating the slider value to everything
gridCreator(slider.value);
gridInfo.textContent = (slider.value) + " X " + (slider.value);

// Changing resolution by using buttons
const preset = document.querySelectorAll(".presets");
preset.forEach((preset) => {

    preset.addEventListener('mousedown', () => {

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

//Taking input from the slider and changing things
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
    element = document.querySelectorAll(".column");

    if (gborder.value == "1") {
        element.forEach((element) => {
            element.setAttribute("style", "border-style: none;");
        });
    }
    else {
        element.forEach((element) => {
            element.setAttribute("style", "border-style: solid;");
        });
    }

    //PRESET TOGGLE

    const tpreset = document.querySelectorAll(".presets");
    tpreset.forEach((tpreset) => {
        if (num == 8 || num == 16 || num == 32 || num == 64) {
            if (tpreset.id == "8" && num == 8)
                tpreset.setAttribute("style", "border-style: solid; border-color: white;");

            if (tpreset.id == "16" && num == 16)
                tpreset.setAttribute("style", "border-style: solid; border-color: white;");

            if (tpreset.id == "32" && num == 32)
                tpreset.setAttribute("style", "border-style: solid; border-color: white;");

            if (tpreset.id == "64" && num == 64)
                tpreset.setAttribute("style", "border-style: solid; border-color: white;");
        }
        else
            tpreset.setAttribute("style", "border-style: none; ");
    });

}


const button = document.querySelectorAll("button");

button.forEach((button) => {

    button.addEventListener('mousedown', () => {


        //For the grid to toggle show
        if (button.id == "gtoggle") {
            if (gborder.value == "1") {
                gborder.value = "0";
                gborder.setAttribute("style", "border-style: solid; border-color: white;");
            }
            else {
                gborder.value = "1";
                gborder.setAttribute("style", "border-style: none;");
            }
            gridCreator(slider.value);
        }

    });
});
