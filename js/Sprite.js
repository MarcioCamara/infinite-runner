function Sprite(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draw = function (xCanvas, yCanvas) {
        context.drawImage(
            image,
            this.x,
            this.y,
            this.width,
            this.height,
            xCanvas,
            yCanvas,
            this.width,
            this.height
        );
    }
}

var background = new Sprite(0, 0, 600, 550);
var character = new Sprite(711, 19, 90, 97);
var floor = new Sprite(0, 570, 600, 50);

// var startMenu = new Sprite(834, 19, 343, 242);
var menuImage = new Sprite(0, 710, 600, 360);
var startImage = new Sprite(0, 0, 0, 0);
var loseImage = new Sprite(712, 116, 95, 100);
var newRecordImage = new Sprite(801, 0, 130, 132);

var socialMedias = new Sprite(711, 240, 35, 75);

var rock = new Sprite(703, 330, 50, 40);