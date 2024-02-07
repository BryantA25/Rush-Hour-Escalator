class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        this.title = this.add.text(10,10, "Play screen")
        this.guide = this.add.text (10,30, "Press (UP) to go back to title")

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('titleScene')
        }
    }
}
