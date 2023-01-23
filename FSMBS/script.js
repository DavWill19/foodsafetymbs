let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');
let checkbox = document.getElementById("checkbox");
const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

let notebox = document.createElement("INPUT");
notebox.setAttribute("type", "text");

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {
    if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('button__circle');
});

function myFunction() {
  checkbox.innerHTML = "CLICK ME";
  console.log(btn);
}

function createNewElement() {
  // First create a DIV element.
var txtNewInputBox = document.createElement('div');

  // Then add the content (a new input box) of the element.
txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";
  // Finally put it where it is supposed to appear.
document.getElementById("newElementId").appendChild(txtNewInputBox);
}

// notes
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
function myFunction4() {
  var x = document.getElementById("myDIV4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
function myFunction5() {
  var x = document.getElementById("myDIV5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
function myFunction6() {
  var x = document.getElementById("myDIV6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
function myFunction7() {
  var x = document.getElementById("myDIV7");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
//button 
$(function () {
  $("#button2").click(function () {
    $("#button2").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $("#button2").removeClass("onclic");
      $("#button2").addClass("validate", 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $("#button2").removeClass("validate");
    }, 1250);
  }
});
