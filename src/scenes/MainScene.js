import Phaser from "phaser"

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene")
  }

  preload() {
    this.load.image("sky", "../../assets/textures/TX Tileset Grass.png")
    // this.load.tilemapTiledJSON("map", "../../assets/scripts/map.tmj")
    // this.load.image("ground", "../../texture/TX Tileset Grass.png")
    // this.load.image("wall", "../../texture/TX Tileset Wall.png")
  }

  create() {
    this.add.image(400, 300, "sky")
    // const map = this.make.tilemap({ key: "map" })
    // const tileset = map.addTilesetImage("myWorld", "TX Tileset Grass")
    // const groundLayer = map.createLayer("groundLayer", tileset, 0, 0)
  }

  update() {}
}
