class Sudoku {
    constructor() {
        this.grid = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    cleaning() {
        this.grid = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    canPlaceNumber(row, col, num) {
        if (this.grid[row].includes(num)) return false;
        if (this.grid.some(rowArray => rowArray[col] === num)) return false;
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (this.grid[r][c] === num) return false;
            }
        }
        return true;
    }

    generateSolution() {
        const fillBoard = () => {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (this.grid[row][col] === 0) {
                        const numbers = this.randomNum(Array.from({ length: 9 }, (_, i) => i + 1));
                        for (const num of numbers) {
                            if (this.canPlaceNumber(row, col, num)) {
                                this.grid[row][col] = num;
                                if (fillBoard()) return true;
                                this.grid[row][col] = 0;
                            }
                        }
                        return false;
                    }
                }
            }
            return true;
        };

        fillBoard();
    }

    randomNum(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

const sudoku = new Sudoku();
const boardElement = document.getElementById("sudoku-board");

function createBoard() {
    boardElement.innerHTML = "";
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement("input");
            cell.type = "text";
            cell.maxLength = "1";
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.value = sudoku.grid[row][col] === 0 ? "" : sudoku.grid[row][col];

            cell.addEventListener("input", (e) => {
                const value = e.target.value;
                if (/^[1-9]$/.test(value)) {
                    sudoku.grid[row][col] = parseInt(value, 10);
                } else {
                    sudoku.grid[row][col] = 0;
                }
            });

            boardElement.appendChild(cell);
        }
    }
}


function clearBoard() {
    sudoku.cleaning();

    const canPlaceNumber = (row, col, num) => {
        if (sudoku.grid[row].includes(num)) return false;
        if (sudoku.grid.some(rowArray => rowArray[col] === num)) return false;
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (sudoku.grid[r][c] === num) return false;
            }
        }
        return true;
    };

    const placeNumber = (row, col) => {
        if (row === 9) {
            return true;
        }

        if (col === 9) {
            return placeNumber(row + 1, 0);
        }

        if (sudoku.grid[row][col] !== 0) {
            return placeNumber(row, col + 1);
        }

        const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
        randomNum(numbers);

        while (numbers.length > 0) {
            const num = numbers.pop();
            if (canPlaceNumber(row, col, num)) {
                sudoku.grid[row][col] = num;
                if (placeNumber(row, col + 1)) {
                    return true;
                }
                sudoku.grid[row][col] = 0;
            }
        }

        return false;
    };

    placeNumber(0, 0);

    const removeCells = () => {
        let removedCount = 0;
        while (removedCount < 60) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);
            if (sudoku.grid[row][col] !== 0) {
                sudoku.grid[row][col] = 0;
                removedCount++;
            }
        }
    };

    removeCells();

    createBoard();
    console.log("Поле очищено и заполнено частично.");
}

function randomNum(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



function generateSolution() {
    sudoku.generateSolution();
    createBoard();
    console.log("Решение сгенерировано.");
}

function validateBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.remove("error", "correct"));

    let hasErrors = false;

    for (let row = 0; row < 9; row++) {
        if (!isValidGroup(sudoku.grid[row])) {
            highlightErrorRow(row);
            hasErrors = true;
        }
    }

    for (let col = 0; col < 9; col++) {
        const column = sudoku.grid.map(row => row[col]);
        if (!isValidGroup(column)) {
            highlightErrorColumn(col);
            hasErrors = true;
        }
    }

    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const square = [];
            for (let r = row; r < row + 3; r++) {
                for (let c = col; c < col + 3; c++) {
                    square.push(sudoku.grid[r][c]);
                }
            }
            if (!isValidGroup(square)) {
                highlightErrorSquare(row, col);
                hasErrors = true;
            }
        }
    }

    if (!hasErrors) {
        cells.forEach(cell => cell.classList.add("correct"));
        console.log("Поле заполнено правильно!");
    }
}

function isValidGroup(group) {
    const nums = group.filter(num => num !== 0);
    return nums.length === new Set(nums).size;
}

function highlightErrorRow(row) {
    for (let col = 0; col < 9; col++) {
        document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`).classList.add("error");
    }
}

function highlightErrorColumn(col) {
    for (let row = 0; row < 9; row++) {
        document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`).classList.add("error");
    }
}

function highlightErrorSquare(row, col) {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`).classList.add("error");
        }
    }
}

document.getElementById("generate-puzzle").addEventListener("click", clearBoard);
document.getElementById("validate-board").addEventListener("click", validateBoard);
document.getElementById("generate-solution").addEventListener("click", generateSolution);

createBoard();
