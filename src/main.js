/*
Name: Bryant Aberin
Game Title: Rush Hour Escalator
Time Spent: 22 Hours
Creative Tilt Justification

(*)Does your game do something technically interesting?
This one, I'm not so sure if I can put anything here. Most of the stuff I did was based on some other projects done in class.
I guess one thing that I can say I needed to look elsewhere for was trying to get the alternate varients of the shopper obstacles.

(*)Does your game have a great visual style?
I'm not the most artistic person, so I tried to make the most of a sketch and doodle style. I do have some experience with graphic design so I use photoshop to enhance the simplicity of the style.
It may not be the most unique, but I think it's better than a simple MS paint-based sprites. I did try to go with a physical comedy angle with some of the sound effects as this is a silly premise.
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
            debug: false,
        }
    },
    scene: [ Load, Title, Tutorial, Credits, Play ]
}

let game = new Phaser.Game(config)

let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyRESET, keyMENU