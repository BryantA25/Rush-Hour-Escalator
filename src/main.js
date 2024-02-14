/*
Name: Bryant Aberin
Game Title: Rush Hour Escalator
Time Spent: __ Hours
Creative Tilt Justification

(*)Does your game do something technically interesting?

(*)Does your game have a great visual style?
*/

'use strict'

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
    scene: [ Load, Title, Tutorial, Credits, Play ]
}

let game = new Phaser.Game(config)

let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyRESET, keyMENU