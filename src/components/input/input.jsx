export class InputComponents {
    _up
    _down
    _left
    _right
    _interract

    constructor() {
        this.reset()
    }

    get leftIsDown() {
        return this._left
    }

    get rightIsDown() {
        return this._right
    }

    get upIsDown() {
        return this._up
    }

    get downIsDown() {
        return this._down
    }

    get interractIsDown() {
        return this._interract
    }

    reset() {
        this._up = false
        this._down = false
        this._left = false
        this._right = false
        this._interract = false
    }
}
