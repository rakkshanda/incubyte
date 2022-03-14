
    function newLine(string){
        let stringSpilt = string.split( /,|\n/);
        const numbers= stringSpilt.map(Number);
        return numbers;
    
      }
    
  function add(string){
return sum(newLine(string));
  }
  function sum(numbers) {    
    return numbers.reduce((prev, cur) => prev + cur);
  }


      
console.log(add("1,3,8"))
document.getElementById("1").innerHTML = add("1\n 3");
