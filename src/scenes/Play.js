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
        //this.title = this.add.text(10,10, "Play screen")
        //this.guide = this.add.text (10,30, "Press (UP) to go back to title")
        //keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)

        //add background
        this.escalator = this.add.tileSprite(0, 0, 640, 960, 'escalator').setOrigin(0, 0)

        //add player
        this.player = new Player(this, config.width/2, config.height/2, 'player', 0, this.speed)
        
        //bottom of escalator
        let bottom = this.physics.add.sprite(config.width/2, config.height-60, 'bottom')//.setOrigin(0, 0)
        bottom.body.setImmovable(true)

        //keyboard input setup
        this.keys = this.input.keyboard.createCursorKeys()
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyMENU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        //add borders with physics
        let borderLeft = this.physics.add.sprite(0, 0, 'border').setOrigin(0,0)
        borderLeft.body.setImmovable(true)

        let borderRight = this.physics.add.sprite(0, 0, 'border').setOrigin(0, 0)
        borderRight.setX(config.width - borderRight.width)
        borderRight.body.setImmovable(true)

        this.borders = this.add.group([borderLeft, borderRight])

        //player border collision
        this.physics.add.collider(this.player, this.borders)

        let scoreConfig = {
            //fontFamily: 'Courier',
            fontSize: '50px',
            //color: '',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 100
        }

        //player and bottom collision
        this.physics.add.collider(this.player, bottom, () => {
            //game over
            //console.log("lose")
            this.gameover = true
            //this.add.text(config.width/2, config.hight/2, 'GAME OVER', scoreConfig).setOrigin(0.5)
            this.gameoverGraphic = this.add.tileSprite(320, 200, 200, 100, 'gameover-graphic').setOrigin(0.5)

        })

        

    
        

    }

    update() {
        /*
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('titleScene')
        }
        */

        if(!this.gameover) {
            this.playerFSM.step()
            this.player.y += this.speed
        }

        if (this.gameover && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.scene.restart()
        }

        if(this.gameover && Phaser.Input.Keyboard.JustDown(keyMENU)) {
            this.scene.start("titleScene")
        }

        this.escalator.tilePositionY -= this.speed
    }
}
