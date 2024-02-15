class Tutorial extends Phaser.Scene {
    constructor() {
        super('tutorialScene')
    }

    create() {
        /*
        this.title = this.add.text(10,10, "Tutorial screen")
        this.guide = this.add.text (10,30, "Press (UP) to go back to title")
        */
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)

        this.tutorial = this.add.tileSprite(0, 0, 640, 960, 'tutorial').setOrigin(0, 0)
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('titleScene')
        }
    }
}