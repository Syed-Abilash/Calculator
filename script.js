function appendToDisplay(value) {
    document.getElementById('result').value += value;
    console.log(( document.getElementById('result').value));
   
  }
function back(){
  let valueLength=document.getElementById('result').value
  document.getElementById('result').value= valueLength.slice(0,(valueLength.length)-1);
}

  function clearDisplay() {
    document.getElementById('result').value = '';
  }

  function calculate() {
    try {
      document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }