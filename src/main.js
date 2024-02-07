//

let config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    height: 960,
    width: 640,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scene: [ Load, Title, Tutorial, Play ]
}

let game = new Phaser.Game(config)

let keyLEFT, keyRIGHT, keyDOWN, keyUP