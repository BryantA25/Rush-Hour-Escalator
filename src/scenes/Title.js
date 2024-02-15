class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }


    create() {
        /*
        this.title = this.add.text(10,10, "Title screen")
        this.guide0 = this.add.text(10,30, "Press (left) to go to the tutorial")
        this.guide1 = this.add.text(10,50, "Press (right) to go to the credits")
        this.guide1 = this.add.text(10,70, "Press (up) to go to the play scene")
        */
        this.escalator = this.add.tileSprite(0, 0, 640, 960, 'title').setOrigin(0, 0)


        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start('tutorialScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.start('creditsScene')
        }
    }

}