// function to append values 
function appendToResult(value) {
    document.getElementById('result').value += value;
  }

//fucntion to clear data
  function clearResult() {
    document.getElementById('result').value = '';
  }

//function to calculate operations
  function calculate() {
    let expression = document.getElementById('result').value;
    let result;
    try {
      result = eval(expression);
    } catch (error) {
      result = 'Invalid expression';
    }
    document.getElementById('result').value=result;
  }