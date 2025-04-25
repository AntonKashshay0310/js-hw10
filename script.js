// 1

const processArray = (array, callback) => {
    return callback(array);
  };
  
  const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
  const getMin = arr => Math.min(...arr);
  const getMax = arr => Math.max(...arr);

  const numbers = [4, 7, 1, 9];
  
  console.log(processArray(numbers, getSum)); 
  console.log(processArray(numbers, getMin)); 
  console.log(processArray(numbers, getMax)); 
// 2

const operate = (a, b, callback) => {
    return callback(a, b);
  };

  console.log(operate(10, 5, function(a, b){ return a - b})); 
  console.log(operate(10, 5, function(a, b){ return a + b})); 
  console.log(operate(10, 5, function(a, b){ return a * b})); 
  console.log(operate(10, 5, function(a, b){ return a / b})); 