
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
  // Get all the radio buttons
  const radioButtons = document.getElementsByName("radio1");

  for (let i = 0; i < radioButtons.length; i++) {
    const box = document.getElementById(`box${i + 1}`);
    const selectBoxes = document.querySelectorAll(`.select_box${i + 1}`);
    // Get the radio button that was clicked
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