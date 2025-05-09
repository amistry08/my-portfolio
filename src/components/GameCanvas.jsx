import { useEffect, useRef } from "react"
import Phaser from "phaser"
import GameScene from "../scenes/GameScene"

const GameCanvas = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
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
      scene: [GameScene],
    }

    const game = new Phaser.Game(config)
    return () => game.destroy(true)
  }, [])

  return <div id="game-container" className="flex w-full h-full"></div>
}

export default GameCanvas
