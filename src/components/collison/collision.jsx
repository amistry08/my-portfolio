export class CollisonSystem {
    #scene
    #player
    #walls

    constructor(scene, player, walls) {
        this.#scene = scene
        this.#player = player
        this.#walls = walls
    }

    setUp() {
        this.#walls.setCollisonByProperty({ collides: true })
        this.#scene.physics.add.collider(this.#player, this.#walls)
    }
}
