let main = document.querySelector(".chess_board").children;

// for (let i = 0; i < main.length; i++) {
//     if (i % 2 === 0) {
//     main[i].classList.add("light-square");
// } 
//     else {
//     main[i].classList.add("dark-square");
//     }
// }


// document.querySelector(".chess_board").addEventListener("click", function(e) {
//     // 1. Find the square and check if there's a pawn inside
//     const square = e.target.closest(".chess_board > div");
//     if (!square) return;

//     // Target any pawn (white or black)
//     const pawn = square.querySelector('[class*="pawn"]');
//     if (!pawn) return;

//     // 2. Get current coordinates (x = row, y = column in your HTML)
//     let currentX = parseInt(square.getAttribute("data-x"));
//     let currentY = parseInt(square.getAttribute("data-y"));

//     // 3. Calculate the next step
//     // White pawns move from row 6 -> 5 (x - 1)
//     // Black pawns move from row 1 -> 2 (x + 1)
//     const isWhite = pawn.className.includes("white_pawn");
//     // const nextX = isWhite ? currentX - 1 : currentX + 1;

//     let nextX ;
//     let nextY=currentY;
//     const nextY;


//     if(isWhite==true){
//         nextX=currentX-1;
//     }
//     else{
//         nextX=currentX+1;

//     }

//     // 4. Find the destination square using the new row (nextX) and same column (currentY)
//     const destination = document.querySelector(`[data-x="${nextX}"][data-y="${nextY}"]`);

//     // 5. Move the piece if the destination is valid and empty
//     if (destination) {
//         // Simple check: if it has no children or just the text label, it's empty
//         if (destination.children.length <= 1) {
//             destination.appendChild(pawn);
//         }
//     }
// });

document.querySelector(".chess_board").addEventListener("click", function(e) {
    const square = e.target.closest(".chess_board > div");
    if (!square) return;

    const pawn = square.querySelector('[class*="pawn"]');
    if (!pawn) return;

    const currentX = parseInt(square.getAttribute("data-x"));
    const currentY = parseInt(square.getAttribute("data-y"));

    const isWhite = pawn.className.includes("white");

    // 1. Use 'let' instead of 'const' so you can assign values inside the IF
    let nextX;
    let nextY = currentY; // Moving forward means the column (Y) stays the same

    if (isWhite) {
        nextX = currentX - 1; // White moves 'up' the row numbers
    } else {
        nextX = currentX + 1; // Black moves 'down' the row numbers
    }

    // 2. FIXED: Use exactly 'nextX'. 
    // Your previous code had "${nextX+1}", which moved the piece 2 squares!
    const destination = document.querySelector(`[data-x="${nextX}"][data-y="${nextY}"]`);

    if (destination) {
        // Only move if the square is empty (has 1 or 0 children)
        if (destination.children.length <= 1) {
            destination.appendChild(pawn);
        }
    }
});
