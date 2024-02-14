class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/img/'
        this.load.spritesheet('player', 'player.png', {     //load player spritesheet
            frameWidth: 112,
            frameHeight: 180,
        })
        this.load.spritesheet('shopper', 'shopper.png', {
            frameWidth: 112,
            frameHeight: 180,
        })
        this.load.spritesheet('shopper-pair', 'shopper-pair.png', {
            frameWidth: 130,
            frameHeight: 180
        })
        this.load.spritesheet('shopper-bag.png,', 'shopper-bag', {
            frameWidth: 130,
            frameHeight: 180
        })

        this.load.image('escalator' , 'escalator.png')      //load background
        this.load.image('border', 'border.png')
        this.load.image('bottom', 'bottom.png')
        this.load.image('gameover-graphic', 'gameover.png')
    }

    create() {
        this.title = this.add.text(10,10, "Loading screen screen")

        //player animations
        //idle animation
        this.anims.create({
            key: 'idle-anim',
            framerate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 0}),
        })
        //movement animation
        this.anims.create({
            key: 'move-anim',
            framerate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 0}),
        })
        //hurt animation
        this.anims.create({
            key: 'hurt-anim',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 0}),

        })

        //obsticle animations

        
        this.scene.start('titleScene')
    }
}