import Phaser from "phaser"
import Player from "../object/player"

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }

    preload() {}

    create() {
        const map = this.make.tilemap({ key: "map" })

        const grass = map.addTilesetImage("TX Tileset Grass", "grass")
        const stone = map.addTilesetImage("TX Tileset Stone Ground", "stone")
        const wall = map.addTilesetImage("TX Tileset Wall", "wall")
        const struct = map.addTilesetImage("TX Struct", "struct")
        const plant = map.addTilesetImage("TX Plant", "plant")
        const props = map.addTilesetImage("TX Props", "props")
        const shadowProps = map.addTilesetImage("TX Shadow", "shadow")
        const shadowPlants = map.addTilesetImage(
            "TX Shadow Plant",
            "shadow_plant"
        )

        const grassLayer = map.createLayer("GroundLayer", [grass, stone])
        const wallLayer = map.createLayer("WallLayer", [wall, struct])
        const shadowLayer = map.createLayer("ShadowLayer", [
            shadowPlants,
            shadowProps,
        ])
        const propsLayer = map.createLayer("PropsLayer", props)
        const decorationLayer = map.createLayer("DecorationLayer", [
            props,
            plant,
        ])
        const lightLayer = map.createLayer("LightLayer", props)

        wallLayer.setCollisionByProperty({ collision: true })

        this.player = new Player(this, "player")

        this.cameras.main.setSize(800, 600)
        this.cameras.main.startFollow(this.player)

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        )

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    }

    update() {
        this.player.update()
    }
}
