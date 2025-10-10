import { useEffect } from "react"
import Phaser from "phaser"
import BootScene from "../scenes/BootScene"
import PreLoadScene from "../scenes/PreLoadScene"
import GameScene from "../scenes/GameScene"

const GameCanvas = () => {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 1280,
            height: 720,
            parent: "game-container",
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 0 },
                    debug: true,
                },
            },
            scene: [BootScene, PreLoadScene, GameScene],
        }

        const game = new Phaser.Game(config)
        return () => game.destroy(true)
    }, [])

    return <div id="game-container" className="flex w-full h-full"></div>
}

export default GameCanvas
