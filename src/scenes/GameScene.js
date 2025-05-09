import Phaser from "phaser"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene")
  }

  preload() {
    this.load.image("grass", "../../assets/textures/TX Tileset Grass.png")
    this.load.image(
      "stone",
      "../../assets/textures/TX Tileset Stone Ground.png"
    )
    this.load.image("wall", "../../assets/textures/TX Tileset Wall.png")
    this.load.image("struct", "../../assets/textures/TX Struct.png")
    this.load.image("plant", "../../assets/textures/TX Plant.png")
    this.load.image("props", "../../assets/textures/TX Props.png")
    this.load.image("shadowProps", "../../assets/textures/TX Shadow.png")
    this.load.image("shadowPlants", "../../assets/textures/TX Shadow Plant.png")
    this.load.spritesheet("player", "../../assets/textures/Player.png", {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.tilemapTiledJSON("map", "../../assets/scripts/gameMap.tmj")
  }

  create() {
    const map = this.make.tilemap({ key: "map" })

    const grass = map.addTilesetImage("TX Tileset Grass", "grass", 0, 0)
    const stone = map.addTilesetImage("TX Tileset Stone Ground", "stone", 0, 0)
    const wall = map.addTilesetImage("TX Tileset Wall", "wall", 0, 0)
    const struct = map.addTilesetImage("TX Struct", "struct", 0, 0)
    const plant = map.addTilesetImage("TX Plant", "plant", 0, 0)
    const props = map.addTilesetImage("TX Props", "props", 0, 0)
    const shadowProps = map.addTilesetImage("TX Shadow", "shadowProps", 0, 0)
    const shadowPlants = map.addTilesetImage(
      "TX Shadow Plant",
      "shadowPlants",
      0,
      0
    )

    const grassLayer = map.createLayer("GroundLayer", [grass, stone])
    const wallLayer = map.createLayer("WallLayer", [wall, struct])
    const shadowLayer = map.createLayer("ShadowLayer", [
      shadowPlants,
      shadowProps,
    ])
    const propsLayer = map.createLayer("PropsLayer", props)
    const decorationLayer = map.createLayer("DecorationLayer", [props, plant])
    const lightLayer = map.createLayer("LightLayer", props)

    wallLayer.setCollisionByProperty({ collision: true })

    this.player = this.physics.add.sprite(960, 960, "player")
    this.player.setScale(1.1, 1.1)
    this.player.body.setSize(32, 48)

    this.cameras.main.setSize(800, 600)
    this.cameras.main.startFollow(this.player)

    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

    this.cursors = this.input.keyboard.createCursorKeys()

    this.physics.add.collider(this.player, wallLayer)

    // Idle (row 0, frames 0–8)
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1,
    })

    // Walk (row 1, frames 9–17)
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", { start: 25, end: 32 }),
      frameRate: 10,
      repeat: -1,
    })

    // const debugGraphics = this.add.graphics().setAlpha(0.7)
    // wallLayer.renderDebug(debugGraphics, {
    //   tileColor: null, // No color for non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(255, 0, 0, 255), // Red for colliding tiles
    //   faceColor: new Phaser.Display.Color(255, 255, 0, 255), // Yellow edges
    // })
  }

  update() {
    const speed = 150
    this.player.setVelocity(0)

    // Keyboard Movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed)
      this.player.anims.play("walk", true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed)
      this.player.anims.play("walk", true)
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed)
      this.player.anims.play("walk", true)
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed)
      this.player.anims.play("walk", true)
    } else {
      this.player.anims.stop()
      this.player.anims.play("idle", true)
    }
  }
}
