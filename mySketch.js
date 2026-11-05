/* Lab04: Grids
   Author: Aidan Walczak
	 October 22 2025
	 Description: grid pattern design 
*/

const numCells = 16;
let grid = []; //stores cell type of 0 or 1
let speeds1 = []; //stores speed for long red line
let speeds2 = []; //stores speed for short black line
//let myRandomSeed;

//setup function for grid data: cell types, and two different speeds
function setup() {
	//createCanvas(800,800);
	createCanvas(displayWidth, displayHeight);
	//myRandomSeed = round(millis());
	background("#3A3A3A");
	rectMode(CENTER);
	strokeWeight(3);
	gridSetup();
	drawSquareGrids(); //draws initial squares 
}

//draw function which initializes circles and their rotating lines
function draw() {
	eachCell((x,y,s,type,speed1,speed2) => {
		
		//draws circles
		if (type === 0) {
			fill("#BFBFBF");
			circle(x,y,s);
				
			//short rotating black lines
			push();
			translate(x,y); //translate origin to center of each circle cell
			let angle1 = frameCount * speed2;
			rotate(angle1);
			strokeWeight(7);
			line (0,0,0+1,-s/3.5);
			pop();
				
			//long rotating red lines
			push();
			translate(x,y); //translate origin to center of each circle cell
			let angle2 = frameCount * speed1;
			rotate(angle2);
			strokeWeight(5);
			stroke("#D12C27");
			line (0,0,0,-s/2.5);
			pop();
		}	
	});
}

// function call for key pressing - event function
function keyPressed() {
	//save drawing
	if (key == 's') {
		//save('vectorFile' + myRandomSeed + '.svg');
		save ("Walczak_Lab04.pdf"); // save as pdf to print
	}
}

function mousePressed() {
	let fs = fullscreen();
	fullscreen(!fs);
}