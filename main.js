const buttons = document.querySelectorAll('button');
let result = document.getElementById('result');
buttons.forEach(button => button.addEventListener('click', buttonPress))
//ボタンクリック時
let calculator = '';
function buttonPress(event) {
  const last = event.target.textContent;
  const operator = document.getElementsByClassName('operator');
  if (last === "=") {//イコールをクリックした場合   
    calculator = eval(calculator);
  } else if (last === "AC") {//ACをクリックした場合
    calculator = '';
  } else if (last === operator && calculator.innerHTML.slice(-1) === operator) {
    calculator = calculator.innerHTML.slice(0,-1);
    calculator += last;
  }
  else {//数字をクリックした場合
    calculator += last;
  } 
  result.textContent = calculator;//ディスプレイに計算結果表示
  console.log(calculator);
}