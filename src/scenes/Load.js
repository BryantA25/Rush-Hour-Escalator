class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {

    }

    create() {
        this.title = this.add.text(10,10, "Loading screen screen")
        
        
        this.scene.start('titleScene')
    }
}