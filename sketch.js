var GRIDSIZE, COLS, ROWS;
var grid = [];

  function pacmanSetup() {
    GRIDSIZE = 26;
    COLS = 17;
    ROWS = 17;

  }

  function setup() {
    pacmanSetup();
    var width = COLS * GRIDSIZE;
    var height = ROWS * GRIDSIZE;
    createCanvas(width, height);

    //creating Grid
    for(var i = 0; i < width; i += GRIDSIZE){
      for(var j = 0; j < height; j += GRIDSIZE){
        grid.push(new cell(i,j));
      }
    }

    background(51);

    for(var i = 0; i < grid.length; i++){
      grid[i].show();
      rect(grid[i].x, grid[i].y, GRIDSIZE, GRIDSIZE);
    }

  }//end of setup


  function draw() {
    


  }//end of draw




  function cell(i, j) {
    this.i = i;
    this.j = j;
    this.x = this.i * GRIDSIZE;
    this.y = this.j * GRIDSIZE;

    this.show = function(){
      noFill();
      stroke(255);
      strokeWeight(2);
      
      
    }
  }