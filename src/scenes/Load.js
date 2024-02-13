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
        this.load.image('escalator' , 'escalator.png')      //load background
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