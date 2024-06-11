

const mainGrid = document.querySelector("#mainGrid");
const slider = document.getElementById("myRange");


//For the default toggle values
const gborder = document.querySelector(".gridToggle");
gborder.setAttribute("style", "border-style: solid; border-color: white;");

let element;

//Updating the slider value to everything
gridCreator(slider.value);


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

    element = document.querySelectorAll(".column");
    element.forEach((element) => {

        element.addEventListener('mousedown', () => {
            if (gborder.value == "1")
                element.setAttribute("style", "background-color: black;");
            else
                element.setAttribute("style", "border-style: solid; border-width : 1px; background-color: black;");
        });
    });
    
    const button = document.querySelectorAll("button");
    button.forEach((button) => {

        button.addEventListener('mousedown', () => {


            //For the grid to toggle show
            if (button.id == "gtoggle") {
                if (gborder.value == "1") {
                    gborder.value = "0";
                    gborder.setAttribute("style", "border-style: solid; border-color: white");
                }
                else {
                    gborder.value = "1";
                    gborder.setAttribute("style", "border: none;");
                }
            }
        });
    });

    borderToggle();
    presetToggle(num);
    gridInfo(num);

    
    


}




// Taking the color from the User
const colorPicker = document.querySelector(".colorSelector");
let color = colorPicker.value;
colorPicker.oninput = function () {
    color = this.value;
}


function borderToggle() {
    element = document.querySelectorAll(".column");
    if (gborder.value == "1") {
        element.forEach((element) => {
            element.style.borderStyle = "none";
        });
    }
    else {
        element.forEach((element) => {
            element.style.borderStyle = "solid";
            element.style.borderWidth = "1px";
        });
    }
}

function presetToggle(num) {
    const tpreset = document.querySelectorAll(".presets");
    tpreset.forEach((tpreset) => {

        tpreset.setAttribute("style", "border-style: none; ");
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
    });
}

function gridInfo(num) {
    const gridInfo = document.querySelector("#gridInfo");
    gridInfo.textContent = (num) + " X " + (num);
}