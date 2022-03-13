function sum(string) {
    let stringSpilt = string.split(",");
    const numbers= stringSpilt.map(Number);
    
    return numbers.reduce((prev, cur) => prev + cur);
  }
console.log(sum("1,3,8"))
document.getElementById("1").innerHTML = sum("1,3,8");