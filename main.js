const buttons = document.querySelectorAll('button');
let result = document.getElementById('result');
buttons.forEach(button => button.addEventListener('click', buttonPress))
//ボタンクリック時
let calculator = '0';

function buttonPress(event) {
  const last = event.target.innerHTML;
  const operator = document.getElementsByClassName('operator');
  if (last === "=") {//イコールをクリックした場合   
    calculator = eval(calculator);
  } else if (last === "AC") {//ACをクリックした場合
    calculator = '0';
  } else if (last == operator) {//演算子をクリックした場合
    if (calculator.innerHTML.slice(-1) == operator) {
      calculator.innerHTML = calculator.innerHTML.slice(0,-1);
    } else {
      calculator += last;
    }
  }
  else {//数字をクリックした場合
    if (calculator == '0' || calculator == '00') {
      calculator = last;
    } else{
      calculator += last;
    }
  }
  result.textContent = calculator;
}
