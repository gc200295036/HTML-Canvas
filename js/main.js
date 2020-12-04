// STEP 3.1: Wait until the DOM is ready

document.addEventListener("DOMContentLoaded", function () {
	console.log("DOM is ready to go!");
	// STEP 4: Get canvas and set context to 2d
	const canvas = document.getElementById("myCanvas");
	console.log(canvas);
	
	const context = canvas.getContext("2d");
	// STEP 5: Draw line
	context.moveTo(100, 150);
	context.lineTo(450, 50);
	context.strokeStyle = "#ff0000";
	context.lineWidth = 15;
	context.lineCap = "round";
	context.stroke();
	// STEP 6: Draw rectangle
	// const topLeftCornerX = 180;
	// const topLeftCornerY = 190;
	// const width = 200;
	// const height = 100;
	context.beginPath();

	// context.rect(topLeftCornerX, topLeftCornerY, width, height);
	// context.rect(X, Y, Width, Height)
	context.rect(200, 180, 230, 110);

	
	// STEP 7: Fill and outline rectangle
	context.lineWidth = 5;
	context.strokeStyle = "green";
	context.stroke();
	context.fillStyle = "limegreen";
	context.fill();
	// STEP 8: Draw circle
	context.beginPath();
	

	// arc(x, y, r, [length in radians], counterclockwise?)
	// https://www.mathsisfun.com/geometry/radians.html
	context.arc(420, 120, 40, 0, 2 * Math.PI, false);

	// STEP 9: Fill and outline circle
	context.fillStyle = "#FC0";
	context.lineWidth = 20;
	context.strokeStyle = "hotpink";
	context.fill();
	context.stroke();
	
	//  STEP 10: Draw arc
	context.beginPath();
	// To go from degrees to radians: multiply by π, divide by 180
	const startAngle = 270 * Math.PI / 180;
	const endAngle = 90 * Math.PI / 180;
	context.lineWidth = 20;
	context.strokeStyle = "orange";
	context.arc(280, 160, 50, startAngle, endAngle, false);
	context.stroke();
	
	// STEP 11: Draw a gradient
	
	const gradient = context.createLinearGradient(0, 0, 200, 0);
	gradient.addColorStop(0, "blue");
	gradient.addColorStop(0.5, "green");
	gradient.addColorStop(1, "purple");
	context.fillStyle = gradient;
	context.fillRect(10, 10, 200, 100);
	// STEP 12: Draw a triangle
	context.beginPath();
	// starting point
	context.moveTo(75, 125);
	// move down and right
	context.lineTo(150, 200);
	// move up
	context.lineTo(150, 50);
	// fill the shape in
	context.closePath();
	context.fillStyle = "rgba(200, 0, 220, 0.75)";
	context.stroke();
	context.fill();
	
	// Head back to index.html for the next STEP
	
	// STEP 15: Build out the data object
	/* Many thanks to Dan Wahlin"s great tutorial at https://weblogs.asp.net/dwahlin/creating-a-line-chart-using-the-html-5-canvas */
	
	const dataDef = {
		title: "Canada Population Chart",
		XLabel: "Year",
		yLabel: "Populations (millions)",
		labelFont: "19pt Gothic",
		dataPointFont: "10pt Fantasy",
		renderTypes: [
			CanvasChart.renderType.lines,
			CanvasChart.renderType.points
		],
		dataPoints: [
			{ x: "1900", y: 5.3 },
			{ x: "1910", y: 7.0 },
			{ x: "1920", y: 8.6 },
			{ x: "1930", y: 10.2 },
			{ x: "1940", y: 11.4 },
			{ x: "1950", y: 13.7 },
			{ x: "1960", y: 17.9 },
			{ x: "1970", y: 21.4 },
			{ x: "1980", y: 24.5 },
			{ x: "1990", y: 27.8 },
			{ x: "2000", y: 30.7 },
			{ x: "2010", y: 34.0 },
			{ x: "2020", y: 37.7 }
			
		],
	};
	
/* STEP 16: Render the chart on the canvas element - all done! */
	CanvasChart.render("popChart", dataDef);
});

