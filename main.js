function clickbutton(target) {
  let result = document.getElementById('result');
  let target_value = target.innerHTML;
  const operator = document.getElementsByClassName('operator');
  if (target_value == 'AC') {//ACクリック
    result.innerHTML ='0';
  } else if (target_value == '=') {//＝クリック
    result.innerHTML = eval(result.innerHTML);
  } else if (result.innerHTML.slice(-1) == '+') {//連続演算子
      if (target_value == '+') {//+
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '-') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '*') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '/') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else {
        result.innerHTML += target_value;
      } 
  } else if (result.innerHTML.slice(-1) == '-') {//-
      if (target_value == '+') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '-') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '*') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '/') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else {
        result.innerHTML += target_value;
      } 
  } else if (result.innerHTML.slice(-1) == '*') {//*
      if (target_value == '+') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '-') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '*') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '/') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else {
        result.innerHTML += target_value;
      } 
  } else if (result.innerHTML.slice(-1) == '/') {///
      if (target_value == '+') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '-') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '*') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else if (target_value == '/') {
        result.innerHTML = result.innerHTML.slice(0,-1);
        result.innerHTML += target_value;
      } else {
        result.innerHTML += target_value;
      } 
  } else {//数字クリック
    if (result.innerHTML == '0') {//先頭に0を書かない
      result.innerHTML = target_value;
    } else if (result.innerHTML == '00') {
      result.innerHTML = target_value;
    } else {
      result.innerHTML += target_value;
    }
  }
}
