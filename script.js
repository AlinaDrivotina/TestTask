var result = [];
var firstEnter = true;

function decoding(event) {
  var startCode = document.getElementById('code').value;
  var arr = startCode.split('');
  if (firstEnter) {
    for (var str of arr) {
        if(!result.includes(str)) {
        result.push(str);
        }
    }
    firstEnter = false;
  } else {
    result = [];
    for (var str of arr) {
        if (!result.includes(str)) {
        result.push(str);
        }
    }
  }
  var res = result.join('');
  document.getElementById('result').innerHTML = res;
}

document.getElementById('btn').addEventListener('click', decoding);