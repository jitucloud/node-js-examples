// generator function - declared with *
function *generator () {
  var a =  yield 'wow';
  var b =  yield 'this' + a;
  var c =  yield 'is' + b;
  var d =  yield 'sweet' + c;
  return 'dewd!' + d;
  }
  
  // create and iterator object
  let iterator = generator();

console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 