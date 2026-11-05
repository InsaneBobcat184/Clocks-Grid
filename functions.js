//sets up grid using 2D array 
function gridSetup() {
	for (let col = 0; col < numCells; col++) {
		//column arrays for data and speeds
		grid[col] = [];
		speeds1[col] = [];
		speeds2[col] = [];
		for (let row = 0; row < numCells; row++) {
			grid[col][row] = random([0,1]);
			speeds1[col][row] = random(0.02,0.05);
			speeds2[col][row] = random(0.001,0.005);
		}
	}
}

//goes through each cell in the grid and executes a callback function
function eachCell(callback) {
	let s = width/numCells; // cellSize 
	for (let col = 0; col < numCells; col++) {
		for (let row = 0; row < numCells; row++) {
			let x = col * s + s/2; 
			let y = row * s + s/2; 
			let type = grid[col][row];
			let speed1 = speeds1[col][row];
			let speed2 = speeds2[col][row];
			callback(x,y,s,type,speed1,speed2); //execute callback drawing function
		}
	}
}

//draws all the square patterns in the sketch 
function drawSquareGrids() {
	//utility function to only draw cells of 1 type
	eachCell((x,y,s,type) => { 
	if (type === 1) {
		fill("#A31515");
		rect(x,y,random(s-15,s+15),random(s-15,s+15));
		fill("#BFBFBF");
		rect(x,y,random(s-45,s-25),random(s-45,s-25));
		fill("#A31515");
		rect(x,y,random(s-85,s-65),random(s-85,s-65));
		}
	});
}
