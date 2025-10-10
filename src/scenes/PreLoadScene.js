import Phaser from "phaser"

export default class PreLoadScene extends Phaser.Scene {
    constructor() {
        super("PreLoadScene")
    }

    preload() {
        this.load.pack("asset_pack", "../../assets/data/assets.json")
        this.load.tilemapTiledJSON("map", "../../assets/scripts/gameMap.json")
    }

    create() {
        this.#createAnimations()
        this.scene.start("GameScene")
    }

    #createAnimations() {
        const data = this.cache.json.get("animations_json")
        data.forEach((animation) => {
            const frames = animation.frames
                ? this.anims.generateFrameNumbers(animation.asset_key, {
                      frames: animation.frames,
                  })
                : this.anims.generateFrameNumbers(animation.asset_key)
            this.anims.create({
                key: animation.key,
                frames: frames,
                frameRate: animation.frameRate,
                repeat: animation.repeat,
            })
        })
    }
}
