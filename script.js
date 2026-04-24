// Keep these outside
let white_pieces = document.querySelector(".white_pieces");
let black_pieces = document.querySelector(".black_pieces");
let selectedPiece = null;

document.querySelector(".chess_board").addEventListener("click", function(e) {
    const square = e.target.closest(".chess_board > div");
    if (!square) return;

    if (selectedPiece === null) {
        // SELECTING PHASE
        const piece = square.querySelector('[class*="white"], [class*="black"]');
        
        // Instead of allPiecesArray.includes(piece), just check if piece exists
        if (piece) {
            selectedPiece = piece;
            console.log("Piece selected: ", selectedPiece.className);
            bgcolor(square);
        }
    } else {
        // MOVING / CAPTURING PHASE
        const targetPiece = square.querySelector('[class*="white"], [class*="black"]');

        if (targetPiece) {
            const isTargetWhite = targetPiece.className.includes("white");
            const isSelectedWhite = selectedPiece.className.includes("white");

            if (isSelectedWhite === isTargetWhite) {
                // CHANGE SELECTION: User clicked their own team member
                selectedPiece = targetPiece; 
                bgcolor(square);
                console.log("Selection changed");
                return; // Stop here so we don't move
            } else {
                // CAPTURE: Enemy piece detected
                if (isTargetWhite) {
                    white_pieces.appendChild(targetPiece);
                } else {
                    black_pieces.appendChild(targetPiece);
                }
                console.log("Piece captured!");
            }
        }

        // Finalize the move
        square.appendChild(selectedPiece);
        selectedPiece = null;
    }
}); 

// Function stays outside
function bgcolor(square) {
    square.style.backgroundColor = "yellow";
    setTimeout(() => {
        square.style.backgroundColor = ""; 
    }, 1000);
}