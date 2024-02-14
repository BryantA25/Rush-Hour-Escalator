class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        //important values
        this.speed = 3          //scroll speed of escalator, obstacles, and the player
        this.gameover = false
        this.currentTime = 0    //used for timer display and obstacle events

        //add background
        this.escalator = this.add.tileSprite(0, 0, 640, 960, 'escalator').setOrigin(0, 0)

        //add player
        this.player = new Player(this, config.width/2, config.height/2, 'player', 0)
        
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

        let textConfig = {
            //fontFamily: 'Courier',
            fontSize: '30px',
            //color: '',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            //fixedWidth: 100
        }

        //timer setup
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.addTime,
            callbackScope: this,
            loop: true
        })

        this.timeDisplay = this.add.text(10, 10, "Elapsed Time: "+this.currentTime, textConfig)


        //player and bottom collision
        this.physics.add.collider(this.player, bottom, () => {
            //game over
            //console.log("lose")
            this.gameover = true
            
            //this.player.destroy()
            this.gameTimer.destroy()
            this.add.text(320, 400, 'You lasted '+this.currentTime+' seconds', textConfig).setOrigin(0.5)
            this.add.text(320, 500, 'Press (R) to restart', textConfig).setOrigin(0.5)
            this.add.text(320, 575, 'Press (M) to return to main menu', textConfig).setOrigin(0.5)
            this.gameoverGraphic = this.add.tileSprite(320, 200, 200, 100, 'gameover-graphic').setOrigin(0.5)
        })

        //obstacle group
        this.obstacleGroup = this.add.group({
            runChildUpdate: true
        })

        //player obstacle collision
        this.physics.add.collider(this.player, this.obstacleGroup, this.obstacleCollision)
    }

    spawnObsticle(type, texture) {
        let shopstacle = new Obstacle(this, (Phaser.Math.Between(100, config.width-100)), -100, texture, type, this.speed)
        //console.log("atempted to spawn shopstacle at:"+shopstacle.x)
        this.obstacleGroup.add(shopstacle)
        
    }

    //activate hurt state in player
    obstacleCollision(player){
        console.log("Player collision with obstacle")
        player.toggleHurt()    //Type error: cannot read properties of undefned 

    }

    update() {


        if(!this.gameover) {
            this.playerFSM.step()
            this.player.y += this.speed
            this.timeDisplay.text = "Elapsed Time: "+this.currentTime
        }

        if (this.gameover && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.scene.restart()
        }

        if(this.gameover && Phaser.Input.Keyboard.JustDown(keyMENU)) {
            this.scene.start("titleScene")
        }

        this.escalator.tilePositionY -= this.speed
    }

    addTime() {
        this.currentTime += 1
        //console.log("added time")

        //make things happen after certain tiime
        if(this.currentTime % 3 == 0 && this.currentTime < 16) { //spawn rate of one shopper every 3 seconds during the first 8 seconds alive
            this.spawnObsticle(0, 'shopper')
        }
        if(this.currentTime % 2 == 0 && this.currentTime >17 && this.currentTime < 30) {
            this.spawnObsticle(0, 'shopper')
        }
        if(this.currentTime % 4 == 0 && this.currentTime >17 && this.currentTime < 30) {
            this.spawnObsticle(0, 'shopper-pair')
        }


    }
}
