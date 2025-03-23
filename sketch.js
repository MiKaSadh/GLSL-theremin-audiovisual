let shaderProgram;
let audio;

function preload() {
    shaderProgram = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  audio = new Theremin();
  
  shaderProgram.setUniform('resolution', [width, height]); // ←追加
}

function draw() {
    shader(shaderProgram);
    shaderProgram.setUniform('time', millis() / 1000.0);
    shaderProgram.setUniform('freq', audio.getFrequency()); 
    shaderProgram.setUniform('amp', audio.getAmplitude());
    rect(0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (['c', 'd', 'e'].includes(key.toLowerCase())) {
        audio.setKey(key);
        console.log("Key changed to:", key.toUpperCase());
    }
}
