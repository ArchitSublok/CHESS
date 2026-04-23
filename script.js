let main = document.querySelector("chess_board");

for (let i = 0; i < main.length; i++) {
    if (i % 2 === 0) {
    main[i].classList.add("light-square");
} 
    else {
    main[i].classList.add("dark-square");
    }
}




// document.getElementsByClassName("white_pawn").addEventListener("click", function() {
//    alert("Button was clicked!");
// });