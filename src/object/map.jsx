export default class Map {
    constructor(scene) {
        this.scene = scene
    }

    create() {
        const map = this.scene.make.tilemap({ key: "map" })
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
        map.createLayer("GroundLayer", [grass, stone])
        map.createLayer("WallLayer", [wall, struct])
        map.createLayer("ShadowLayer", [shadowPlants, shadowProps])
        map.createLayer("DecorationLayer", [props, plant])
        map.createLayer("PropsLayer", props)
        map.createLayer("InteractableLayer", props)
        map.createLayer("LightLayer", props)

        //spawn point
        this.spawns = {}
        const objLayer = map.getObjectLayer("Objects")
        objLayer.objects.forEach((obj) => {
            if (obj.name === "playerSpawn") {
                this.spawns.playerSpawn = {
                    x: obj.x,
                    y: obj.y,
                }
            }
        })

        //Collison
        this.colliionObjects = []
        const collisonLayer = map.getObjectLayer("CollisionsLayer")
        console.log("collisonLayer:", collisonLayer)

        if (collisonLayer) {
            collisonLayer.objects.forEach((obj) => {
                const zone = this.scene.add
                    .zone(obj.x, obj.y, obj.width, obj.height)
                    .setOrigin(0)
                    .setName("collisonZone")

                this.scene.physics.add.existing(zone, true)
                this.colliionObjects.push(zone)
            })
        }
        return map
    }

    getSpawn(name) {
        if (name === "playerSpawn") {
            return this.spawns.playerSpawn
        }
        return null
    }

    enableCollison(player) {
        this.colliionObjects.forEach((zone) => {
            this.scene.physics.add.collider(player, zone)
        })
    }
}
