let canvas; // canvas variable
let soapy; // soapy image variable
let showSoapy = false; // show soapy image
let imageOn = false; // show soapy image

function preload() {
    soapy = loadImage('Images/Temp_Soapy.png'); // soapy image
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); // website size depend on window size
    canvas.position(0, 0); // canvas position starts from corner of screen
    canvas.style('z-index', '-1');// canvas is behind everything
    canvas.style('position', 'fixed'); // canvas is fixed on screen
    colorMode(HSB); // color mode is hue, saturation, brightness

    noCursor(); // no cursor on screen

    imageMode(CENTER);

    button = createButton('Sponge'); //  button
    button.position(windowWidth - 100, 50); // button position
    button.mousePressed(showImage); // button function

}

function draw() {
    background(200, 100, 100); // background color is light blue

    stroke(33, 70, 30);
    strokeWeight(2);
    fill(51, 10, 100); // rectangle color is cream

    // Resize the rectangle based on window size
    let rectWidth = windowWidth * 0.10; // 10% of window width
    let rectHeight = windowHeight; // Full height of the window
    rect(windowWidth - rectWidth, 0, rectWidth, rectHeight); // rectangle position (behind buttons) and size

    // Resize the rectangle based on window size
    let rectWidthTable = windowWidth * 0.7; // 70% of window width
    let rectHeightTable = windowHeight * 0.3; // 30% of window height
    rect(0, windowHeight - rectHeightTable - 20, rectWidthTable, rectHeightTable + 20); // rectangle position (Panda's table) and size

    if (imageOn) {
        image(soapy, width / 2, height / 2, 200, 200); // soapy image position and size
    }
}

function showImage() {
    imageOn = true;
}




