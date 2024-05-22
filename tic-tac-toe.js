
document.write("<h1>Lets play tic tac toe</h1>");

let startingSearchParams = "?board=---------"

document.write(`<p> Click on this <a href="${startingSearchParams}">link</a> to start your game </p>`);

let params = new URLSearchParams(document.location.search);

// Board is a string
let b = params.get("board");


document.write(b[0] + b[1] + b[2]);
document.write("<br>");
document.write(b[3] + b[4] + b[5]);
document.write("<br>");
document.write(b[6] + b[7] + b[8]);
document.write("<br>");


if(b[0] === "X" && b[1] === "X" && b[2] === "X") {
    document.write("X wins!")
} else if(b[0] === "Y" && b[1] === "Y" && b[2] === "Y") {
    document.write("Y wins!")
}
// TODO: finish the conditions under which each side could win.