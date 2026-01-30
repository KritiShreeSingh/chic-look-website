function displaySum(){
let a = 5
let b = 6
let c = (a+b)
document.getElementById("displaySum").innerHTML = c;
}


function displaySum() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sum = a + b;
    document.getElementById("result").innerText = "Sum = " + sum;
  }


// javaScript/add.js
function showAnswer() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  let sum = a + b;

  document.getElementById("result").innerHTML = sum;
}
//Marks Calculator
function calculateMarks() {
  let mark1 = Number(document.getElementById("sub1").value);
  let mark2 = Number(document.getElementById("sub2").value);
  let mark3 = Number(document.getElementById("sub3").value);
  let mark4 = Number(document.getElementById("sub4").value);
  let mark5 = Number(document.getElementById("sub5").value);
  let mark6 = Number(document.getElementById("sub6").value);
  let mark7 = Number(document.getElementById("sub7").value);
  let mark8 = Number(document.getElementById("sub8").value);

  let total = mark1 + mark2 + mark3 + mark4 + mark5 + mark6 + mark7 + mark8;

  if (total > 800) {
    document.getElementById("marksResult").innerHTML = "Error";
  } else if (total > 400) {
    document.getElementById("marksResult").innerHTML =
      "Total Marks: " + total + "<br>Status: Pass";
  } else {
    document.getElementById("marksResult").innerHTML =
      "Total Marks: " + total + "<br>Status: Fail";
  }
}