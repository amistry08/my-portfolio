import { InputComponents } from "./input"

export class KeyboardInput extends InputComponents {
    #cursonKeys
    #inputLocked

    constructor(scene) {
        super()
        this.#cursonKeys = scene.input.keyboard.createCursorKeys()
        this.#inputLocked = false
    }

    set lockInput(val) {
        this.#inputLocked = val
    }

    update() {
        if (this.#inputLocked) {
            this.reset()
            return
        }

        this._up = this.#cursonKeys.up.isDown
        this._down = this.#cursonKeys.down.isDown
        this._left = this.#cursonKeys.left.isDown
        this._right = this.#cursonKeys.right.isDown
        this._interract = this.#cursonKeys.up.isDown
    }
}
