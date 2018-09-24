module.exports = function main(input) {
  var num = input.split('');
  var arr = num.map(Number);
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i]
  };
  return sum;
};
