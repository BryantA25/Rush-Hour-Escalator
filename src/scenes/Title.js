class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }


    create() {
        this.title = this.add.text(10,10, "Title screen")
    }

}