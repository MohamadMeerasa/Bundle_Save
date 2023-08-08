
const radioBtn = document.getElementById("radio1");
const selectBoxes = document.querySelectorAll(".select_box1");
const colourText = document.querySelector(".colour_text1");
const box1 = document.querySelector(".box1");

// box1 js

function toggleVisibilityAndResize() {
  if (radioBtn.checked) {
    selectBoxes.forEach((selectBox) => {
      selectBox.style.display = "block";
    });
    colourText.style.display = "block";
    box1.style.height = "auto";
  } else {
    selectBoxes.forEach((selectBox) => {
      selectBox.style.display = "none";
    });
    colourText.style.display = "none";
    box1.style.height = "100px";
  }
}

radioBtn.addEventListener("click", toggleVisibilityAndResize);
toggleVisibilityAndResize();

//  box2 js

const radioBtn2 = document.getElementById("radio2");
const selectBoxes2 = document.querySelectorAll(".select_box2");
const colourText2 = document.querySelector(".colour_text2");
const box2 = document.querySelector(".box2");

function toggleVisibilityAndResizeBox2() {
  if (radioBtn2.checked) {
    selectBoxes2.forEach((selectBox) => {
      selectBox.style.display = "block";
    });
    colourText2.style.display = "block";
    box2.style.height = "auto";
  } else {
    selectBoxes2.forEach((selectBox) => {
      selectBox.style.display = "none";
    });
    colourText2.style.display = "none";
    box2.style.height = "100px";
  }
}

radioBtn2.addEventListener("click", toggleVisibilityAndResizeBox2);
toggleVisibilityAndResizeBox2();

// box3 js
const radioBtn3 = document.getElementById("radio3");
const selectBoxes3 = document.querySelectorAll(".select_box3");
const colourText3 = document.querySelector(".colour_text3");
const box3 = document.querySelector(".box3");

function toggleVisibilityAndResizeBox3() {
  if (radioBtn3.checked) {
    selectBoxes3.forEach((selectBox) => {
      selectBox.style.display = "block";
     
    });
    colourText3.style.display = "block";
    box3.style.height = "auto";
  } else {
    selectBoxes3.forEach((selectBox) => {
      selectBox.style.display = "none";
    });
    colourText3.style.display = "none";
    box3.style.height = "100px";
  }
}

radioBtn3.addEventListener("click", toggleVisibilityAndResizeBox3);
toggleVisibilityAndResizeBox3();

function changeSelection() {
  const radioButtons = document.getElementsByName("radio1");

  for (let i = 0; i < radioButtons.length; i++) {
    const box = document.getElementById(`box${i + 1}`);
    const selectBoxes = document.querySelectorAll(`.select_box${i + 1}`);
    const clickedRadioButton = radioButtons[i];

    if (clickedRadioButton.checked) {
      selectBoxes.forEach((selectBox) => {
        selectBox.style.display = "block";
      });
      box.style.height = "auto";
      box.style.background="#E5FFEB";
    } else {
      if (!clickedRadioButton.checked) {
        selectBoxes.forEach((selectBox) => {
          selectBox.style.display = "none";
        });
        box.style.background = "none";
      }
    }
  }
}

// Function to handle the radio button clicks and update the total
function changeSelection() {
  const radioButtons = document.getElementsByName("radio1");

  for (let i = 0; i < radioButtons.length; i++) {
    const box = document.getElementById(`box${i + 1}`);
    const selectBoxes = document.querySelectorAll(`.select_box${i + 1}`);
    const colourText = document.querySelector(`.colour_text${i + 1}`);
    const clickedRadioButton = radioButtons[i];

    if (clickedRadioButton.checked) {
      selectBoxes.forEach((selectBox) => {
        selectBox.style.display = "block";
      });
      colourText.style.display = "block";
      if(i===2){
        box.style.height="220px";
      } else {
        box.style.height="auto";
      }
      box.style.background = "#E5FFEB";
      const totalValue = box.querySelector("h3").textContent;
      setTotalValue(totalValue);
      setActiveBox(box);
    } else {
      selectBoxes.forEach((selectBox) => {
        selectBox.style.display = "none";
      });
      colourText.style.display = "none";
      box.style.height = "100px";
      box.style.background = "none";
      box.classList.remove("active-outline");
      box.classList.remove("active-box-style");
      box.querySelector("input").classList.remove("active-bg");
    }
  }
}

// Function to set the total value
function setTotalValue(value) {
  const totalElement = document.getElementById("total");
  totalElement.textContent = value;
}

function setActiveBox(boxElement) {
  const activeOutline = document.querySelector(".active-outline");
  if (activeOutline) {
    activeOutline.classList.remove("active-outline");
    activeOutline.classList.remove("active-box-style");
    activeOutline.querySelector("input").classList.remove("active-bg");
  }
  boxElement.classList.add("active-outline");
  boxElement.classList.add("active-box-style");
  boxElement.querySelector("input").classList.add("active-bg");
}

const radioButtons = document.getElementsByName("radio1");
radioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener("click", changeSelection);
});

changeSelection();

const sizeBoxController = document.getElementById("sizeBoxController");
sizeBoxController.style.display = "block";