/*
Prints all numbers from 1 to 100 with two exceptions:
Dumbers divisable by 3, print Fizz
Numbers divisable by 5, print Buzz
Numbers divisable by both, print FizzBuzz
*/

for (i = 1; i <=100; i++) {
  if (i%5 == 0 && i%3 == 0) {
    console.log("FizzBuzz");
  }
  else if (i%3 == 0) {
    console.log("Fizz");
  }
  else if (i%5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
