class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {
        this.speed = 2
        this.gameover = false
    }

    create() {
        //all temporary, delete later
        this.title = this.add.text(10,10, "Play screen")
        //this.guide = this.add.text (10,30, "Press (UP) to go back to title")
        //keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)

        //add background
        this.escalator = this.add.tileSprite(0, 0, 640, 960, 'escalator').setOrigin(0, 0)

        //add player
        this.player = new Player(this, config.width/2, config.height/2, 'player', 0, this.speed)
        
        //keyboard input setup
        this.keys = this.input.keyboard.createCursorKeys()

    }

    update() {
        /*
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('titleScene')
        }
        */

        if(this.gameover) {

        }

        this.playerFSM.step()
        this.player.y += this.speed
        this.escalator.tilePositionY -= this.speed
    }
}
