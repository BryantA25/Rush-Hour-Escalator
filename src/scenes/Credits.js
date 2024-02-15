class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create() {
        this.title = this.add.text(10,10, "Credits screen")
        this.guide = this.add.text (10,30, "Press (UP) to go back to title")

        this.creditGraphic = this.add.tileSprite(0, 0, 640, 960, 'credits').setOrigin(0, 0)

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.sound.play('sfx-paper')
            this.scene.start('titleScene')
        }
    }
}

/*
Punch Sound
https://pixabay.com/sound-effects/punch-7-166700/ 

Hurt Sound
https://pixabay.com/sound-effects/ough-47202/

Page Turn Sound
https://pixabay.com/sound-effects/pageturn-102978/ 

Ding
https://pixabay.com/sound-effects/ding-36029/ 

Hep Cats - Kevin Macleod
https://www.youtube.com/watch?v=JscGSVJFNXM 

George Street Shuffle - Kevin Macleod
https://www.youtube.com/watch?v=LQTIkUXrfMA 

Json tool
https://www.leshylabs.com/apps/sstool/ 
*/