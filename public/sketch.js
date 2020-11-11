const arr = [];

function setup() {
    createCanvas(800, 800);
    
    const res = 20;
    
    for (let j = 0; j < ceil(width / res) + 1; j++) {
        for (let i = 0; i < ceil(height / res) + 1; i++) {
            const vect = new p5.Vector(res * i, res * j);
            const col = color(random(255), random(255), random(255));
            arr.push({vect, col});
        }
    }
    
    noFill();
}

function draw() {
    background(30, 67, 137);
    arr.forEach(curr => {
        const {x, y} = curr.vect;
        const h = f(x - mouseX, y - mouseY);
        const [x1, y1] = [x + 15 * cos(h.heading()), y + 15 * sin(h.heading())];
        stroke(curr.col);
        line(x, y, x1, y1);
    });
}

const f = (x, y) => new p5.Vector(y - x, - x - y);