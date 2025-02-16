$(function() {
    //startGame();
});

var gameRole;
var gameObstacles = [];
var gameScore;
var count = 3;
var background;
var gameSound;
var gameJump;
var gameMusic;

function countDown() {
    $("#start").css("display", "none");
    $("#countDown").css("display", "block");
    $("#countDown").text(count);
    count -= 1;
    this.interval = setInterval(startGame, 1000);
};

function startGame() {
    if (count == 0) {
        clearInterval(this.interval);

        $("#countDown").css("display", "none");
        $("#filter").css("display", "none");

        gameArea.new();
        gameMusic = new sound("./sound/background.mp3", 1, true);
        gameSound = new sound("./sound/drop_yell.mp3", 1);
        gameJump = new sound("./sound/jump.wav", 0.3);

        gameBackground = new componentRect(gameArea.canvas.width, gameArea.canvas.height, "./img/fly_back.jpg", 0, 0, "image");
        gameRole = new componentRole(20, "./img/jrole1.gif", 120, 50, "image");
        gameScore = new componentRect("20px", "cursive", "white", 680, 30, "text");
        gameArea.start();
    } else {
        $("#countDown").text(count);
        count -= 1;
    }
};

var gameArea = {
    canvas: document.createElement("canvas"),
    new: function() {
        this.canvas.width = 800;
        this.canvas.height = 370;
        this.context = this.canvas.getContext("2d");
        this.canvas.onmousedown = function(e) {
            accelerate(-0.2);
            gameJump.play();
        }
        this.canvas.onmouseup = function(e) { accelerate(0.1); }
            //$(this.canvas).insertAfter($("#game").find("p:first-child"));
        $("#flyCanvasContainer").append(this.canvas);
        this.pause = false;
        this.frameNo = 0;
    },
    start: function() {
        gameMusic.play();
        this.interval = setInterval(updateGameArea, 15);
    },
    stop: function() {
        gameMusic.stop();
        clearInterval(this.interval);
        this.pause = true;
    },
    clear: function() {
        //this.context.clearRect(gameRole.x-gameRole.r-1.5,gameRole.y-gameRole.r-1.5,gameRole.r*2.2,gameRole.r*2.2);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function componentRect(width, height, parameter, x, y, type) {
    this.type = type;
    if (type == "text") {
        this.text = parameter;
    } else if (type == "image") {
        this.image = new Image();
        this.image.src = parameter;
    };


    this.score = 0;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = parameter;
            ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
            //var pattern = ctx.createPattern(this.image, "repeat");
            //ctx.fillStyle = pattern;
            //ctx.fillRect(this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = parameter;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    };
};

function componentRole(r, parameter, x, y, type) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function() {

        ctx = gameArea.context;
        if (type == "image") {
            this.image = new Image();
            this.image.src = parameter;

            ctx.drawImage(this.image,
                this.x - this.r + 2,
                this.y - this.r + 2,
                this.r * 1.7, this.r * 1.7);

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fillStyle = parameter;
            ctx.fill();
            //ctx.strokeStyle = parameter;
            //ctx.stroke();
        }
    };
    this.crashWith = function(obj) {
        var roleLeft = this.x - this.r;
        var roleRigth = this.x + this.r;
        var roleTop = this.y - this.r;
        var roleBottom = this.y + this.r;

        var objLeft = obj.x;
        var objRigth = obj.x + (obj.width);
        var objTop = obj.y;
        var objBottom = obj.y + (obj.height);

        if ((roleBottom < objTop) || (roleTop > objBottom) || (roleRigth < objLeft) || (roleLeft > objRigth)) {
            return false;
        }

        for (i = 0; i < 360; i++) {
            var x = this.x + this.r * Math.cos(-i * Math.PI / 180);
            var y = this.y + this.r * Math.sin(-i * Math.PI / 180);

            //ctx.beginPath();
            //ctx.arc(x, y, 2, 0, 2 * Math.PI);
            //ctx.fill();

            //ctx.font = "50px";
            //ctx.fillStyle = "red";
            //ctx.fillText("A",x + 10,y);

            if ((x >= objLeft + 4) && (x <= objRigth - 4) && (y <= objBottom) && (y >= objTop)) {
                gameSound.play();
                return true;
            }
        }

        return false;
    };
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    };
    this.hitBottom = function() {
        var roleBottom = gameArea.canvas.height + this.r;

        if (this.y > roleBottom) {
            //this.y = rockbottom;            
            gameSound.play();
            gameArea.stop();
            $("#filter").css("display", "block");
            $("#restart").css("display", "block");
            return;
        }

        if (this.y - this.r <= 0) {
            this.y = this.r + 3;
            gameRole.gravity = 0.1;
        }
    }
};

function updateGameArea() {

    var x, y, min, max, height, gap;

    for (i = 0; i < gameObstacles.length; i++) {
        if (gameRole.crashWith(gameObstacles[i])) {
            gameArea.stop();
            $("#filter").css("display", "block");
            $("#restart").css("display", "block");
            return;
        }
    }

    if (gameArea.pause == false) {
        gameArea.clear();
        let frameNo = gameArea.frameNo += 1;
        let score;

        if (everyInterval(40)) {
            score = gameScore.score += 1
        } else {
            score = gameScore.score
        }

        if (frameNo == 1 || everyInterval(180)) {
            x = gameArea.canvas.width;
            y = gameArea.canvas.height;

            min = 5;
            max = 155;
            height = Math.floor(Math.random() * (max - min + 1) + min);

            min = 70; //change the difficaulty min 60 max 110
            max = 120;
            gap = Math.floor(Math.random() * (max - min + 1) + min);

            gameObstacles.push(new componentRect(30, y, "./img/up.gif", x, -y + height, "image"));
            gameObstacles.push(new componentRect(30, y, "./img/down.gif", x, height + gap, "image"));
        }

        gameBackground.update();

        for (i = 0; i < gameObstacles.length; i++) {
            gameObstacles[i].x += -1;
            gameObstacles[i].update();
        }

        gameScore.text = "SCORE: " + score;
        gameScore.update();

        gameRole.newPos();
        gameRole.update();
    }
};

function restart() {
    $("#restart").css("display", "none");
    gameArea.stop();
    gameArea.clear();

    gameRole = {};
    gameObstacles = [];
    gameScore = {};
    count = 3
    $("#flyCanvasContainer").html("");
    countDown();
}

function everyInterval(n) {
    if ((gameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
};

function moveUp() {
    gameRole.speedY -= 1;
};

function moveDown() {
    gameRole.speedY += 1;
};

function moveLeft() {
    gameRole.speedX -= 1;
};

function moveRight() {
    gameRole.speedX += 1;
};

function accelerate(n) {
    gameRole.gravity = n;
}

function clearMove() {
    gameRole.speedY = 0;
    gameRole.speedX = 0;
};

function sound(src, vol, isLoop = false) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop = isLoop;
    this.sound.volume = vol;
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}