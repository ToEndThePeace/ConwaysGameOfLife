export default function calculateBuffer(board) {
    const buffer = [];

    const checkNeighbors = (x, y) => {
        // get indices to check neighbors (toroidal plane?)
        const top = y > 0 ? y - 1 : board.length - 1;
        const bot = y < board.length - 1 ? y + 1 : 0;
        const left = x > 0 ? x - 1 : board[0].length - 1;
        const right = x < board[0].length - 1 ? x + 1 : 0;

        let count = 0;
        count += board[top][left] ? 1 : 0;
        count += board[top][x] ? 1 : 0;
        count += board[top][right] ? 1 : 0;
        count += board[y][left] ? 1 : 0;
        count += board[y][right] ? 1 : 0;
        count += board[bot][left] ? 1 : 0;
        count += board[bot][x] ? 1 : 0;
        count += board[bot][right] ? 1 : 0;

        if (board[y][x]) {
            // code for if current cell is alive
            if (count < 2 || count > 3) {
                return false;
            } else {
                return true;
            }
        } else {
            // code if current cell is dead
            if (count === 3) {
                return true;
            } else {
                return false;
            }
        }
    };

    for (var i = 0; i < board.length; i++) {
        buffer.push([]);
        for (var j = 0; j < board[0].length; j++) {
            buffer[i].push(checkNeighbors(j, i));
        }
    }
    console.log(buffer)

    return buffer;
}
