let main = document.querySelector(".chess_board").children;

const allPiecesNodeList = document.querySelectorAll('[class*="white"]' || '[class*="black"]' );
// Convert it to a true Array to use methods like .map() or .filter()
const allPiecesArray = Array.from(allPiecesNodeList);
console.log(allPiecesArray)

const allWhitePiecesNodeList = document.querySelectorAll('[class*="white"]' );
// Convert it to a true Array to use methods like .map() or .filter()
const allWhitePiecesArray = Array.from(allWhitePiecesNodeList);
console.log(allWhitePiecesArray)

const allBlackPiecesNodeList = document.querySelectorAll('[class*="black"]' );
// Convert it to a true Array to use methods like .map() or .filter()
const allBlackPiecesArray = Array.from(allBlackPiecesNodeList);
console.log(allBlackPiecesArray)


const whitePawnsNodeList = document.querySelectorAll('[class*="white_pawn"]');
// Convert it to a true Array to use methods like .map() or .filter()
const whitePawnsArray = Array.from(whitePawnsNodeList);

const whiteRookNodeList = document.querySelectorAll('[class*="white_rook"]');
// Convert it to a true Array to use methods like .map() or .filter()
const whiteRookArray = Array.from(whiteRookNodeList);

const whiteKnightNodeList = document.querySelectorAll('[class*="white_knight"]');
// Convert it to a true Array to use methods like .map() or .filter()
const whiteKnightArray = Array.from(whiteKnightNodeList);

const whiteBishopNodeList = document.querySelectorAll('[class*="white_bishop"]');
// Convert it to a true Array to use methods like .map() or .filter()
const whiteBishopArray = Array.from(whiteBishopNodeList);

const whiteQueenNodeList = document.querySelectorAll('[class*="white_queen"]');
// Convert it to a true Array to use methods like .map() or .filter()
const whiteQueenArray = Array.from(whiteQueenNodeList);

const whiteKingNodeList = document.querySelectorAll('[class*="white_king"]');
// Convert it to a true Array to use methods like .map() or .filter()
const whiteKingArray = Array.from(whiteKingNodeList);



const blackPawnsNodeList = document.querySelectorAll('[class*="black_pawn"]');
// Convert it to a true Array to use methods like .map() or .filter()
const blackPawnsArray = Array.from(blackPawnsNodeList);

const blackRookNodeList = document.querySelectorAll('[class*="black_rook"]');
// Convert it to a true Array to use methods like .map() or .filter()
const blackRookArray = Array.from(blackRookNodeList);

const blackKnightNodeList = document.querySelectorAll('[class*="black_knight"]');
// Convert it to a true Array to use methods like .map() or .filter()
const blackKnightArray = Array.from(blackKnightNodeList);

const blackBishopNodeList = document.querySelectorAll('[class*="black_bishop"]');
// Convert it to a true Array to use methods like .map() or .filter()
const blackBishopArray = Array.from(blackBishopNodeList);

const blackQueenNodeList = document.querySelectorAll('[class*="black_queen"]');
// Convert it to a true Array to use methods like .map() or .filter()
const blackQueenArray = Array.from(blackQueenNodeList);

const blackKingNodeList = document.querySelectorAll('[class*="black_king"]');
// Convert it to a true Array to use methods like .map() or .filter()
const blackKingArray = Array.from(blackKingNodeList);

// let selectedX=;
// let selectedY=;

let selectedPiece = null; // This variable tracks if something is "lifted"

document.querySelector(".chess_board").addEventListener("click", function(e) {
    const square = e.target.closest(".chess_board > div");
    if (!square) return;

    // Check if we are already "holding" a piece
    if (selectedPiece === null) {
        // Try to find a piece inside the clicked square
        const piece = square.querySelector('[class*="white"], [class*="black"]');
        
        if (allPiecesArray.includes(piece)) {
            selectedPiece = piece; // Now a piece IS selected

            const currentSquare = selectedPiece.parentElement;

            const initX = currentSquare.getAttribute("data-x");
            const initY = currentSquare.getAttribute("data-y");
            // console.log(x);
            // console.log();

            console.log("Piece selected: ", selectedPiece.className);

            

            document.querySelector(".chess_board").addEventListener("click", function(e) {
            const square = e.target.closest(".chess_board > div");
    
                if (square) {
                // Pass the square you clicked into your function
                 bgcolor(square); 
                            }
                    });


        }
    } else {
        const piece = square.querySelector('[class*="white"], [class*="black"]');
        // A piece was already selected! 
        // This is where you would handle the move logic.
        console.log("Moving the selected piece...");
        

        const startSquare = selectedPiece.parentElement;
        const startX = parseInt(startSquare.getAttribute("data-x"));
        const startY = parseInt(startSquare.getAttribute("data-y"));

        const endX = square.getAttribute("data-x");
        const endY = square.getAttribute("data-y");

        square.appendChild(selectedPiece);
        console.log(`Moved from (${startX}, ${startY}) to (${endX}, ${endY})`);
        // console.log(endX);
        // console.log(endY);


        let distance=0;

        // 1. Find the square at those coordinates
        const targetSquare = document.querySelector(`[data-x="${endX}"][data-y="${endY}"]`);

        // 2. Check if it contains a piece
        const isOccupied = targetSquare?.querySelector('[class*="white"], [class*="black"]');

        if (isOccupied) {
            console.log("The square is NOT empty. A piece is there.");
        } else {
            console.log("The square IS empty.");
    }
            // if(whitePawnsArray.includes(piece)){
                
            // }

            // if(whiteRookArray.includes(piece)){

            // }

            // if(whiteBishopArray.includes(piece)){

            // }

            // if(whiteKnightArray.includes(piece)){

            // }

            // if(whiteQueenArray.includes(piece)){

            // }

            // if(whiteKingArray.includes(piece)){

            // }





            // if(blackPawnsArray.includes(piece)){

            // }

            // if(blackRookArray.includes(piece)){

            // }

            // if(blackBishopArray.includes(piece)){

            // }

            // if(blackKnightArray.includes(piece)){

            // }

            // if(blackQueenArray.includes(piece)){

            // }

            // if(blackKingArray.includes(piece)){

            // }



        selectedPiece = null; 
    }
});

function bgcolor(square) {
                square.style.backgroundColor = "yellow";

                setTimeout(() => {
                // This clears the yellow and returns it to the CSS default 
                // (.light-square or .dark-square)
                    square.style.backgroundColor = ""; 
                    }, 1000);
                }