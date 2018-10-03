let cols;
let rows;
let resolution = 20;
let grid;


function make2Darrey(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}
function setup() {
    createCanvas(200, 200);
    cols = width / resolution;
    rows = height / resolution;
    grid = make2Darrey(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }

}

function draw() {
    background(0);



    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if(grid[i][j] == 1){
                fill(255);
            } else {
                fill(0);
            }
            stroke(0);
            rect(x, y, resolution-1, resolution-1);
        }
    }

    let next = make2Darrey(cols, rows);

    // Compute next based on grid
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {

            if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
                next[i][j] = grid[i][j]
            }
        // Count live neibhhors!


        let sum = 0;
        let neibhhors = count(grid, i ,j);
        let state = grid[i][j];

        // sum += grid[i - 1] [j - 1]
        // sum += grid[i] [j - 1]
        // sum += grid[i + 1] [j - 1]
        // sum += grid[i - 1] [j]
        // sum += grid[i + 1] [j]
        // sum += grid[i - 1] [j + 1]
        // sum += grid[i] [j + 1]
        // sum += grid[i + 1] [j + 1]

        }
    }

    grid = next;
}


function countNeighbors(grid, x, y){
    let sum = 0;
    for ( let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if(!grid[x][y]){
                sum += grid[i][j];
            }
        }
    }
    return sum;
}