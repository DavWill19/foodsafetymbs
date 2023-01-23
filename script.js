let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');
let checkbox = document.getElementById("checkbox");
const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
const button2 = document.querySelector('#button2');
button2.addEventListener('click', submit1);

let myDIV = document.querySelector('#myDIV');
let myDIV2 = document.querySelector('#myDIV2');
let myDIV3 = document.querySelector('#myDIV3');
let myDIV4 = document.querySelector('#myDIV4');
let myDIV5 = document.querySelector('#myDIV5');
let myDIV6 = document.querySelector('#myDIV6');
let myDIV7 = document.querySelector('#myDIV7');
let checkbox2 = document.querySelectorAll(".checkbox:checked");

/// check box stuff

function uncheck() {
  let incomplete = document.querySelector('.incomplete');
  let unchecked1 = document.querySelector("#unchecked");
  let checkbox1 = document.querySelectorAll(".checkbox:not(:checked)");
  let h31 = document.createElement('h1');
  console.log(checkbox1.length);

  
  incomplete.append(h31.textContent = "Incomplete: ");





  checkbox1.forEach(a => {
    console.log(a);
    unchecked1.append(a.parentElement);
  });

}




function addNotesOutside(a, b) {
  let div1 = document.querySelector('#div1');
  div1.innerHTML = "";
  div1.innerHTML = (a + b);
};

function addNotesDr(a, b) {
  let div2 = document.querySelector('#div2');
  div2.innerHTML = "";
  div2.innerHTML = (a + b);
};

function addNotesPUW(a, b) {
  let div3 = document.querySelector('#div3');
  div3.innerHTML = "";
  div3.innerHTML = (a + b);
};

function addNotesProd(a, b) {
  let div4 = document.querySelector('#div4');
  div4.innerHTML = "";
  div4.innerHTML = (a + b);
};

function addNotesFront(a, b) {
  let div5 = document.querySelector('#div5');
  div5.innerHTML = "";
  div5.innerHTML = (a + b);
};

function addNotesBack(a, b) {
  let div6 = document.querySelector('#div6');
  div6.innerHTML = "";
  div6.innerHTML = (a + b);
};

function addNotesSys(a, b) {
  let div7 = document.querySelector('#div7');
  div7.innerHTML = "";
  div7.innerHTML = (a + b);
};








function submit1() {
  uncheck();
  addNotesOutside("TTM In Notes: ", myDIV.textContent);
  addNotesDr("TTM Through Notes: ", myDIV2.textContent);
  addNotesPUW("TTM Out: ", myDIV3.textContent);
  document.querySelector(".container1").innerHTML = "";
  };

// Dealing with Input width
let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let notebox = document.createElement("INPUT");
notebox.setAttribute("type", "text");




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





