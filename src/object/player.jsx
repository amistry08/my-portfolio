import Phaser from "phaser"
import { KeyboardInput } from "../components/input/keyboardInput"
import { PlayerMovementComponent } from "../components/movement/playerMovement"

export default class Player extends Phaser.Physics.Arcade.Sprite {
    #keyboardInput
    #playerMovement

    constructor(scene, key) {
        super(scene, scene.scale.width / 2, scene.scale.height / 2, key)
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setScale(1.1, 1.1)
        this.setSize(32, 48)

        //Player Movement
        this.#keyboardInput = new KeyboardInput(this.scene)
        this.#playerMovement = new PlayerMovementComponent(
            this,
            this.#keyboardInput
        )
    }

    update() {
        this.#keyboardInput.update()
        this.#playerMovement.update()
    }
}
