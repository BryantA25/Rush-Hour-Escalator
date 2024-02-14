class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)  //call sprite parent class
        scene.add.existing(this)            //add player to existing scene
        scene.physics.add.existing(this)    //add physics body to scene 

        this.body.setSize(this.width/2, this.height/2)
        this.body.setCollideWorldBounds(true)

        //custom properties
        this.playerVelocity = 500   // in pixels
        this.hurtTimer = 250        // in ms
        this.hurtBool = false

        //States
        scene.playerFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            hurt: new HurtState(),

        }, [scene, this])
    }

    toggleHurt() {
        this.hurtBool = !this.hurtBool
        console.log("toggled hurt to "+this.hurtBool)
    }
}

//state classes
class IdleState extends State {
    enter(scene, player) {
            player.setVelocity(0)
            player.anims.play('idle-anim')
            player.anims.stop()
        }

    execute(scene, player) {
        //use deconstructing to make a local copy of the keyboard object
        const {left, right, up, down} = scene.keys
    
        //transition to hurt state
        if(player.hurtBool) {
            this.stateMachine.transition('hurt')
            return
        }
        

        //transition to move if pressing a movement key
        if(left.isDown || right.isDown || up.isDown || down.isDown) {
            this.stateMachine.transition('move')
            return
        }
    }
}

class MoveState extends State {
    execute(scene, player) {
        const {left, right, up, down} = scene.keys
        
        //transition to idle if NOT pressing a movement key
        if(!(left.isDown || right.isDown || up.isDown || down.isDown)) {
            this.stateMachine.transition('idle')
            return
        }

        //transition to hurt state
        if(player.hurtBool) {
            this.stateMachine.transition('hurt')
            return
        }

        //handle movement
        let moveDirection = new Phaser.Math.Vector2(0, 0)
        if(up.isDown) {
            moveDirection.y = -1
        } else if (down.isDown) {
            moveDirection.y = 1
        }
        if(left.isDown) {
            moveDirection.x = -1
        }else if(right.isDown) {
            moveDirection.x = 1
        }

        //normalize movement vector
        moveDirection.normalize()
        player.setVelocity(player.playerVelocity * moveDirection.x, player.playerVelocity * moveDirection.y)

        //movement animation
        player.anims.play('idle-anim')
    }
}

class HurtState extends State {
    enter(scene, player) {
        player.setVelocity(0)
        
        player.setVelocityY(player.playerVelocity*2)

        //recovery timer
        scene.time.delayedCall(player.hurtTimer, () => {
            player.hurtBool = false
            this.stateMachine.transition('idle')
            return
        })
    }
}


