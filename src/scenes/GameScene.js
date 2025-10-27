import Phaser from "phaser"
import Player from "../object/player"
import { CollisonSystem } from "../components/collison/Collision"
import Map from "../object/map"

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }

    preload() {}

    create() {
        this.map = new Map(this)
        const map = this.map.create()

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        )

        this.player = new Player(this, "player")

        //Player Spawn Point
        const spawnPoint = this.map.getSpawn("playerSpawn") || {
            x: 100,
            y: 100,
        }
        this.player.setPosition(spawnPoint.x, spawnPoint.y)

        //Player Collison
        this.map.enableCollison(this.player)

        this.cameras.main.setSize(800, 600)
        this.cameras.main.startFollow(this.player)

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    }

    update() {
        this.player.update()
    }
}
