let canvas;
let context;
let canvasHeight;
let canvasWidth;
let maxJumps = 3;
let speed = 6;
let actualState;
let fontSize = 50;
let record;
let image;

let states = {
    start: 0,
    playing: 1,
    lose: 2,
};

let HUD = {
    x: 30,
    y: fontSize * 1.36,
    width: 0,
    height: 0,
    color: '#FFFFFF',
    font: fontSize + 'px Arial',

    draw: function () {
        context.fillStyle = this.color;
        context.font = this.font;
        context.fillText(player.score, this.x, this.y);
    }
};

let menu = {
    x: 0,
    y: 50,
    firstTextX: 90,
    firstTextY: 190,
    secondTextX: 0,
    secondTextY: 50,
    imageX: 60,
    imageY: 54,
    width: menuImage.width,
    height: menuImage.height,
    firstTextWidth: 0,
    firstTextHeight: 0,
    secondTextWidth: 0,
    secondTextHeight: 0,
    // color: '#000000',

    draw: function () {
        menuImage.draw(this.x, this.y);

        if (actualState === states.start) {
            // this.color = '#00A878';
            startText.draw(this.firstTextX, this.firstTextY);
        } else if (actualState === states.lose) {
            loseImage.draw(this.imageX, this.imageY);
        }

        // context.fillStyle = this.color;
        // context.fillRect(this.x, this.y, this.width, this.height);

        if (actualState === states.lose) {
            context.save();
            context.translate(canvasWidth / 2, canvasHeight / 2);
            context.fillStyle = '#FFFFFF';

            const fontWidth = 26;

            if (player.score > record) {
                context.fillText('Novo Record!', -150, -175);
            } else if (record < 10) {
                context.fillText('Record: ' + record, -(200 + fontWidth) / 2, -175);
            } else if (record >= 10 && record < 100) {
                context.fillText('Record: ' + record, -(200 + fontWidth * 2) / 2, -175);
            } else if (record >= 100 && record < 1000) {
                context.fillText('Record: ' + record, -(200 + fontWidth * 3) / 2, -175);
            } else if (record >= 1000 && record < 10000) {
                context.fillText('Record: ' + record, -(200 + fontWidth * 4) / 2, -175);
            } else if (record >= 10000) {
                context.fillText('Record: ' + record, -(200 + fontWidth * 5) / 2, -175);
            }

            context.fillText('Pontos:', -75, -75);

            if (player.score < 10) {
                context.fillText(player.score, -fontWidth / 2, 0);
            } else if (player.score >= 10 && player.score < 100) {
                context.fillText(player.score, -fontWidth / 2 * 2, 0);
            } else if (player.score >= 100 && player.score < 1000) {
                context.fillText(player.score, -fontWidth / 2 * 3, 0);
            } else if (player.score >= 1000 && player.score < 10000) {
                context.fillText(player.score, -fontWidth / 2 * 4, 0);
            } else if (player.score >= 10000) {
                context.fillText(player.score, -fontWidth / 2 * 5, 0);
            }

            context.restore();
        }
    },
};

let environmentFloor = {
    x: 0,
    y: 550,
    height: 50,
    // color: '#E8DA78',

    update() {
        this.x -= speed;

        if (this.x <= -30) {
            this.x = 0;
        }
    },

    draw: function () {
        // context.fillStyle = this.color;
        // context.fillRect(0, this.y, canvasWidth, this.height);
        floor.draw(this.x, this.y);
        floor.draw(this.x + floor.width, this.y);
    },
};

let player = {
    x: 50,
    y: 0,
    height: character.height,
    width: character.width,
    // color: '#E24609',
    gravity: 1.6,
    speed: 0,
    jumpForce: 23.6,
    jumpAmount: 0,
    score: 0,
    rotation: 0,

    update() {
        this.speed += this.gravity;
        this.y += this.speed;

        if (actualState === states.playing) {
            this.rotation += Math.PI / 180 * speed;
        } else {
            this.rotation = 0;
        }

        if (this.y > environmentFloor.y - this.height && actualState !== states.lose) {
            this.y = environmentFloor.y - this.height;
            this.jumpAmount = 0;
            this.speed = 0;
        }
    },

    jump: function () {
        if (this.jumpAmount < maxJumps) {
            this.jumpAmount++;
            this.speed = -this.jumpForce;
        }
    },

    draw: function () {
        context.save();

        context.translate(this.x + this.width / 2, this.y + this.height / 2);
        context.rotate(this.rotation);
        character.draw(-this.width / 2, -this.height / 2);

        context.restore();

    },

    reset: function () {
        this.y = 0;
        this.speed = 0;

        if (this.score > record) {
            localStorage.setItem('record', this.score);
            record = this.score;
        }

        this.score = 0;
    }
};

let obstacles = {
    elements: [],
    insertTime: 0,

    generateColor: function () {
        let hexas = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += hexas[Math.floor(Math.random() * 16)];
        }

        return color;
    },

    insert: function () {
        this.elements.push({
            x: canvasWidth,
            width: 50,
            height: 30 + Math.floor(121 * Math.random()),
            color: this.generateColor(),
        });

        this.insertTime = 35 + Math.floor(25 * Math.random());
    },

    update: function () {
        this.insertTime === 0 ? this.insert() : this.insertTime--;

        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];

            element.x -= speed;

            if (
                player.x < element.x + element.width
                &&
                player.x + player.width >= element.x
                &&
                player.y + player.height >= environmentFloor.y - element.height
            ) {
                actualState = states.lose;
                player.y = canvasHeight - player.height * 3;
            } else if (element.x === 0) {
                player.score += Math.floor(element.height / 3);
            } else if (element.x <= -element.width) {
                this.elements.splice(i, 1);
            }
        }
    },

    clean: function () {
        this.elements = [];
    },

    draw: function () {
        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];

            context.fillStyle = element.color;
            context.fillRect(element.x, environmentFloor.y - element.height, element.width, element.height);
        }
    },
}

function clickOnScreen(event) {
    if (actualState === states.playing) {
        player.jump();
    } else if (actualState === states.start) {
        actualState = states.playing;
    } else if (actualState === states.lose && player.y >= canvasHeight * 2) {
        obstacles.clean();
        actualState = states.start;
        player.reset();
    }
}

function main() {
    canvasHeight = window.innerHeight;
    canvasWidth = window.innerWidth;

    if (canvasWidth > 600) {
        canvasHeight = 600;
        canvasWidth = 600;
    }

    canvas = document.createElement('canvas');
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    canvas.style.border = '1px solid #6D545D';

    context = canvas.getContext('2d');

    document.body.appendChild(canvas);

    document.addEventListener('mousedown', clickOnScreen);

    actualState = states.start;

    record = localStorage.getItem('record') ? localStorage.getItem('record') : 0;

    image = new Image();
    image.src = 'img/sheet.png';

    run();
}

function run() {
    update();
    draw();

    window.requestAnimationFrame(run);
}

function update() {
    if (actualState === states.playing) {
        obstacles.update();
        environmentFloor.update();
    }

    player.update();
}

function draw() {
    // context.fillStyle = '#8CA5E2';
    // context.fillRect(0, 0, canvasWidth, canvasHeight);
    background.draw(0, 0);


    if (actualState === states.start || actualState === states.lose) {
        menu.draw();
    } else if (actualState === states.playing) {
        HUD.draw();
        obstacles.draw();
    }

    environmentFloor.draw();
    player.draw();
}

// inicializa o jogo
main();