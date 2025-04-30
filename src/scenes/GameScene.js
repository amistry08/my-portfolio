import Phaser from "phaser"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene")
  }

  preload() {
    this.load.image("grass", "../../assets/textures/TX Tileset Grass.png")
    this.load.image("wall", "../../assets/textures/TX Tileset Wall.png")

    this.load.tilemapTiledJSON("map", "../../assets/scripts/gameMap.tmj")
  }

  create() {
    const map = this.make.tilemap({ key: "map" })

    const grass = map.addTilesetImage("TX Tileset Grass", "grass")
    const wall = map.addTilesetImage("TX Tileset Wall", "wall")

    const grassLayer = map.createLayer("GroundLayer", grass)
    const wallLayer = map.createLayer("WallLayer", wall)
  }

  update() {}
}
