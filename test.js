
function two(a,callback) {
  let result = arguments[0] + 1;
  return callback(result);
}

console.log(
  
  two(2, function() {
    let value = arguments[0] + 10;
    return value;
  })

  );