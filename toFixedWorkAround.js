// Found Work Around using toFixed and parseFloat

if you minus 0.3 - 0.2 you don't get 0.1

0.3 - 0.2;  // => 0.09999999999999998

let minus = 0.3 - 0.2; // Turn minus into a variable that holds 0.3 - 0.2 

minus.toFixed(2);  // => 0.10:  the 2 specifies the number of digits after the decial point and rounds it up.

HOWEVER that only turns it into a string. 

To turn it BACK into an into and interger you need to use parseFloat.

let sun = minus.toFixed(2); // creates variable for getting 0.10 in string form

parseFloat(sun);  // turns "0.10" the string, into 0.1 the integer.


// End of Found Fix 