var a=5;//Exist in global scope
function variable1()
 {
    var c='10'; // Exist in function scope
      {
         var x = '1'; // Exist in function scope
         const y = '2';// Exist in block scope
      }
 console.log(x);
 console.log(y);
 console.log(c);
 console.log(a+3);
}
function variable2()
 {
    console.log(a+9);
 }
variable1();
variable2();