    function newLine(string){
        let delimiter = /,|\n/;
        let newString = string;
        if (string.startsWith('//')) {
          const index= string.indexOf('\n');
          delimiter = string.slice(2, index);
          newString = string.slice(indexOfNewLine);
        }
    
        const stringSpilt = newString.split(delimiter);
        return stringSpilt.map(Number);       
   
      }
    
  function add(string){
return sum(newLine(string));
  }
  function sum(numbers) {   
    const negatives = numbers.filter((i) => i < 0);
    if (negatives.length > 0) {
      throw new Error(`negative`);
    } 
    return numbers.reduce((prev, cur) => prev + cur);
  }


      
console.log(add("1,3,8"))
document.getElementById("1").innerHTML = add("1,-2");
