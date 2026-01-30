document.getElementById('sumBtn').addEventListener('click', function() {
  const a = Number(document.getElementById('num1').value) || 0;
  const b = Number(document.getElementById('num2').value) || 0;
  document.getElementById('result').innerText = 'Sum = ' + (a + b);
});

document.getElementById('calcMarksBtn').addEventListener('click', function() {
  const marks = [];
  for (let i = 1; i <= 8; i++) marks.push(Number(document.getElementById('sub' + i).value) || 0);
  const total = marks.reduce((s, v) => s + v, 0);
  if (total > 800) {
    document.getElementById('marksResult').innerText = 'Error: marks exceed maximum';
  } else if (total > 400) {
    document.getElementById('marksResult').innerHTML = Total Marks: <br>Status: Pass;
  } else {
    document.getElementById('marksResult').innerHTML = Total Marks: <br>Status: Fail;
  }
});
