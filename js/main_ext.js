// setup canvas

const canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),

width = canvas.width,
height = canvas.height;

// function to generate random number

function random(min,max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Shape(x, y, velX, velY, exists){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

function Ball(x, y, velX, velY, exists, color, size){
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function(){
    if ((this.x + this.size) >= width){
        this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0){
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height){
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0){
        this.velY = -(this.velY)
    }
    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collisionDetection = function(){
    for (let j = 0; j < balls.length; j++){
        if(!(this === balls[j]) && balls[j].exists){
            const dx = this.x - balls[j].x,
            dy = this.y - balls[j].y,
            distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size){
                balls[j].color = this.color = 'rgb('+ random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
            }
        }
    }
}

let balls = [];
while (balls.length < 10){
    let size = random(10,20),
    ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7,7),
        random(-7,7),
        true,
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
        size
    )

    balls.push(ball);
}

function loop(){
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,height);

    for (let i = 0; i < balls.length; i++){
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetection();
    }

    requestAnimationFrame(loop);
}

loop()