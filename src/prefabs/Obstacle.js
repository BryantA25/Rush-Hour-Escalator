class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, type, eSpeed) {
        super(scene, x, y, texture, type, eSpeed)

        this.parentScene = scene

        this.speed = eSpeed



        //set up physics
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        //this.setVelocityY(1)
        this.setImmovable()
        //this.newObsticle = true

        if(type == 0) { //standard shopper
            this.body.setSize(112, 180)
            console.log("set obstacle body to standard shopper")
        } else if (type == 1) { //shopper bag
            this.body.setSize(112, 180)
        } else if (type == 2) { //shopper pair
            this.body.setSize(130, 190)
        }

    }

    update() {
        this.y += this.speed

        if(this.y > config.height+30) {
            this.destroy()
        }

    }
}