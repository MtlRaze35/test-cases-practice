var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
]

let outputs = [
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',

]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {
    
    let result = [];
    let subStr = str;
     
   // result.push(str.slice(0,40));
    console.log(result);

    while (subStr.length >= 40) {
        result.push(subStr.slice(0,40));
        subStr = subStr.slice(40);
        
    };

    result.push(subStr)
    
    const final = result.map(function (str){
      if (str[0] === ' '){
        return str.slice(1)
      }
      return str;
    })
     
    // "let final" could be replaced by just .join at the end
    

   return final.join('\n');
   
    
}

console.log(f(inputs[0]));


f(inputs[0]);
function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

