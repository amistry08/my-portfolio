import { config } from "../../config"

export class PlayerMovementComponent {
    #player
    #inputComponent
    #state = "idle"
    #facing = "walk"
    #lastAnimKey = null

    static DIAG = Math.SQRT1_2

    constructor(player, inputComponent) {
        this.#player = player
        this.#inputComponent = inputComponent

        const body = this.#player.body
        body.setMaxVelocity(config.PLAYER_SPEED)
        body.setDrag(1000, 1000) // snappy stops
    }

    update() {
        const left = !!this.#inputComponent.leftIsDown
        const right = !!this.#inputComponent.rightIsDown
        const up = !!this.#inputComponent.upIsDown
        const down = !!this.#inputComponent.downIsDown

        let vx = 0,
            vy = 0
        if (left) vx -= 1
        if (right) vx += 1
        if (up) vy -= 1
        if (down) vy += 1

        if (vx !== 0 && vy !== 0) {
            vx *= PlayerMovementComponent.DIAG
            vy *= PlayerMovementComponent.DIAG
        }

        this.#player.setVelocity(
            vx * config.PLAYER_SPEED,
            vy * config.PLAYER_SPEED
        )

        if (vx || vy) {
            if (Math.abs(vx) > Math.abs(vy)) {
                this.#facing = vx > 0 ? "right" : "left"
            } else {
                this.#facing = vy > 0 ? "down" : "up"
            }
        }

        const moving = vx !== 0 || vy !== 0
        const nextState = moving ? "walk" : "idle"

        const animKey = this.#animKey(nextState)

        if (animKey && animKey !== this.#lastAnimKey) {
            this.#player.anims.play(animKey, true)
            this.#lastAnimKey = animKey
            this.#state = nextState
        }

        this.#player.setFlipX(this.#facing === "left")
    }

    #animKey(state) {
        switch (state) {
            case "idle":
                return `player_idle`
            case "walk":
                return `player_walk`
            default:
                return null
        }
    }
}
