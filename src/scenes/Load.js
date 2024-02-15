class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/atlas/'
        this.load.atlas('player', 'player.png', 'player.json')

        //load images
        this.load.path = './assets/img/'

        /*
        this.load.spritesheet('player', 'player.png', {     //load player spritesheet
            frameWidth: 112,
            frameHeight: 180,
        })
        */

        this.load.spritesheet('shopper', 'shopper.png', {
            frameWidth: 112,
            frameHeight: 180,
        })
        this.load.spritesheet('shopper-pair', 'shopper-pair.png', {
            frameWidth: 130,
            frameHeight: 180
        })
        this.load.spritesheet('shopper-bag', 'shopper-bag.png', {
            frameWidth: 130,
            frameHeight: 180
        })

        this.load.image('escalator' , 'escalator.png')      //load background
        this.load.image('border', 'border.png')
        this.load.image('bottom', 'bottom.png')
        this.load.image('gameover-graphic', 'gameover.png')

        this.load.image('tutorial', 'tutorial.png')
        this.load.image('title', 'title.png')

        //load music
        this.load.path = './assets/music/'
        this.load.audio('music-cat', 'Hep Cats.mp3')
        this.load.audio('music-street', 'George Street Shuffle.mp3')

        //load sounds
        this.load.path = './assets/sounds/'
        this.load.audio('sfx-punch', 'punch.mp3')
        this.load.audio('sfx-hurt', 'ough.mp3')
    }

    create() {
        this.title = this.add.text(10,10, "Loading screen screen")

        //player animations

        this.anims.create({
            key: 'idle-anim',
            frames: this.anims.generateFrameNames('player', {
                prefix:"sprite",
                start: 0,
                end: 0
            }),
            repeat: -1,
            frameRate: 8
        })

        this.anims.create({
            key: 'hurt-anim',
            frames: this.anims.generateFrameNames('player', {
                prefix:"sprite",
                start: 3,
                end: 3
            }),
            repeat: -1,
            frameRate: 8
        })

        this.anims.create({
            key: 'lose-anim',
            frames: this.anims.generateFrameNames('player', {
                prefix:"sprite",
                start: 4,
                end: 4
            }),
            repeat: -1,
            frameRate: 8
        })

        this.anims.create({
            key: 'move-anim',
            frames: this.anims.generateFrameNames('player', {
                prefix:"sprite",
                start: 0,
                end: 2,
                frames: [1,0,2,0]
            }),
            repeat: -1,
            frameRate: 8
        })

        /*
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
            framerate: 24,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                frames: [1,0,2,0]}),
        })

        //hurt animation
        this.anims.create({
            key: 'hurt-anim',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {start: 3, end: 3}),

        })
        this.anims.create({
            key: 'lose-anim',
            framerate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {start: 4, end: 4})
        })
        */

        //obsticle animations
        this.scene.start('titleScene')
    }
}