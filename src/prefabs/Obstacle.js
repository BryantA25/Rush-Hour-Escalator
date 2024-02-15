class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, type, eSpeed) {
        super(scene, x, y, texture, type, eSpeed)

        this.parentScene = scene

        this.speed = eSpeed



        //set up physics
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.setImmovable()
        
        if(type == 0) { //standard shopper
            this.body.setSize(50, 100)
            //console.log("set obstacle body to standard shopper")
        } else if (type == 1) { //shopper bag
            this.body.setSize(100, 100)
        } else if (type == 2) { //shopper pair
            this.body.setSize(120, 120)
        }

    }

    update() {
        this.y += this.speed

        if(this.y > config.height+70) {
            this.destroy()
        }

    }
}