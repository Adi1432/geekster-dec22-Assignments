var num1 = prompt("enter number");
num1 = parseInt(num1);
var num2 = prompt("enter number");
num2 = parseInt(num2);

var num3 = prompt("enter number");
num3 = parseInt(num3);

var arr = [];
arr.push(num1);
arr.push(num2);
arr.push(num3);
alert(Math.max(arr[0], arr[1], arr[2]));
