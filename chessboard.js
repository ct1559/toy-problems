/*
This program prints a Chessboard using spaces and '#' symbols.
The size is determined by user input, the default size is 8 x 8.
*/

let height = prompt("Enter desired height:", 8);
let width = prompt("Enter desired width:", 8)
let chessboard = " ";
let lastSqaure = " "

for (i = 0; i < height; i++) {
  for (j = 0; j < width-1; j++) {
    if (lastSqaure == " ") {
      chessboard = chessboard+"#"
      lastSqaure = "#"
    }
    else {
      chessboard = chessboard+" "
      lastSqaure = " "
    }
  }
  console.log(chessboard);
  chessboard = lastSqaure;
}
