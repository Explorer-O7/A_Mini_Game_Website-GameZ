var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {
            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.className = "puzzle-piece";
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./img/" + imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
}

// const puzzleContainer = document.getElementById("puzzle-container");
// const puzzlePieces = [];

// // Initialize the puzzle pieces
// for (let i = 0; i < 8; i++) {
//   const puzzlePiece = document.createElement("div");
//   puzzlePiece.className = "puzzle-piece";
//   puzzlePiece.style.backgroundImage = `url('./img/${i + 1}.jpg')`;
//   puzzlePiece.style.gridArea = `${Math.floor((i - 1) / 3) + 1} / ${
//     ((i - 1) % 3) + 1
//   }`;
//   puzzlePiece.dataset.index = i;
//   puzzlePiece.addEventListener("click", movePiece);
//   puzzlePieces.push(puzzlePiece);
// }

// // Shuffle the puzzle pieces
// puzzlePieces.sort(() => Math.random() - 0.5);
// puzzlePieces.forEach((piece, index) => {
//     piece.style.gridArea = `${Math.floor(index / 3) + 1} / ${(index % 3) + 1}`;
// });

// // Add the puzzle pieces to the container
// puzzlePieces.forEach((piece) => {
//   puzzleContainer.appendChild(piece);
// });

// // // Add click event listener to each puzzle piece
// // puzzlePieces.forEach((piece) => {
// //   piece.addEventListener("click", () => {
// //     const emptyPieceIndex = puzzlePieces.findIndex(
// //       (piece) => piece.style.backgroundImage === ""
// //     );
// //     const currentIndex = puzzlePieces.indexOf(piece);
// //     if (isAdjacent(emptyPieceIndex, currentIndex)) {
// //       swapPieces(emptyPieceIndex, currentIndex);
// //       if (isSolved()) {
// //         setTimeout(() => alert("Congratulations! Puzzle solved!"), 200);
// //       }
// //     }
// //   });
// // });

//  // Function to handle moving puzzle pieces
//  function movePiece() {
//     const emptyPiece = document.querySelector('.empty');
//     const currentRow = parseInt(this.style.gridArea.split(' / ')[0]);
//     const currentCol = parseInt(this.style.gridArea.split(' / ')[1]);
//     const emptyRow = parseInt(emptyPiece.style.gridArea.split(' / ')[0]);
//     const emptyCol = parseInt(emptyPiece.style.gridArea.split(' / ')[1]);

//     if ((Math.abs(currentRow - emptyRow) === 1 && currentCol === emptyCol) ||
//         (Math.abs(currentCol - emptyCol) === 1 && currentRow === emptyRow)) {
//         // Swap positions
//         const tempArea = this.style.gridArea;
//         this.style.gridArea = emptyPiece.style.gridArea;
//         emptyPiece.style.gridArea = tempArea;
//     }
//     // Check if puzzle is solved
//     const isSolved = puzzlePieces.every((piece, index) => {
//         return parseInt(piece.dataset.index) === index + 1;
//     });

//     if (isSolved) {
//         alert('Congratulations! Puzzle solved!');
//     }
// }

// // Check if two pieces are adjacent
// // function isAdjacent(index1, index2) {
// //   const row1 = Math.floor(index1 / 3);
// //   const col1 = index1 % 3;
// //   const row2 = Math.floor(index2 / 3);
// //   const col2 = index2 % 3;
// //   return (
// //     (Math.abs(row1 - row2) === 1 && col1 === col2) ||
// //     (Math.abs(col1 - col2) === 1 && row1 === row2)
// //   );
// // }

// // // Swap two puzzle pieces
// // function swapPieces(index1, index2) {
// //   const temp = puzzlePieces[index1].style.gridArea;
// //   puzzlePieces[index1].style.gridArea = puzzlePieces[index2].style.gridArea;
// //   puzzlePieces[index2].style.gridArea = temp;
// // }

// // // Check if the puzzle is solved
// // function isSolved() {
// //   for (let i = 0; i < 8; i++) {
// //     if (puzzlePieces[i].style.backgroundImage !== `url('./img/${i + 1}.jpg')`) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
