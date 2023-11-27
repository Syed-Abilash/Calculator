function appendToDisplay(value) {
    document.getElementById('display').value += value;
    console.log(( document.getElementById('display').value));
   
  }
function back(){
  let valueLength=document.getElementById('display').value
  document.getElementById('display').value= valueLength.slice(0,(valueLength.length)-1);
}

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }