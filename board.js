let pieces = {
    K: { // King
        name: "King",
        moves: [
            { row: 1, col: 0 }, { row: -1, col: 0 }, // Vertical
            { row: 0, col: 1 }, { row: 0, col: -1 }, // Horizontal
            { row: 1, col: 1 }, { row: 1, col: -1 }, // Diagonal
            { row: -1, col: 1 }, { row: -1, col: -1 }
        ],
        times: 1 // Moves only one step in any direction
    },
    Q: { // Queen
        name: "Queen",
        moves: [
            { row: 1, col: 0 }, { row: -1, col: 0 }, // Vertical
            { row: 0, col: 1 }, { row: 0, col: -1 }, // Horizontal
            { row: 1, col: 1 }, { row: 1, col: -1 }, // Diagonal
            { row: -1, col: 1 }, { row: -1, col: -1 }
        ],
        times: "infinite" // Can move any number of steps in a given direction
    },
    R: { // Rook
        name: "Rook",
        moves: [
            { row: 1, col: 0 }, { row: -1, col: 0 }, // Vertical
            { row: 0, col: 1 }, { row: 0, col: -1 }  // Horizontal
        ],
        times: "infinite" // Unlimited steps in straight lines
    },
    B: { // Bishop
        name: "Bishop",
        moves: [
            { row: 1, col: 1 }, { row: 1, col: -1 }, // Diagonal
            { row: -1, col: 1 }, { row: -1, col: -1 }
        ],
        times: "infinite" // Unlimited steps diagonally
    },
    N: { // Knight
        name: "Knight",
        moves: [
            { row: 2, col: 1 }, { row: 2, col: -1 },
            { row: -2, col: 1 }, { row: -2, col: -1 },
            { row: 1, col: 2 }, { row: 1, col: -2 },
            { row: -1, col: 2 }, { row: -1, col: -2 }
        ],
        times: 1 // Always moves in an L-shape (one jump)
    },
    P: { // Pawn
        name: "Pawn",
        moves: [{ row: 1, col: 0 }], // Forward move
        captureMoves: [{ row: 1, col: 1 }, { row: 1, col: -1 }], // Diagonal capture
        specialMoves: ["doubleStep", "enPassant", "promotion"],
        times: 1 // Regular moves only one step forward
    }
};

