export class Visibility {
    constructor(id) {
        this.id = id
        if (id === 0) {
            this.opacity = 1
            this.visibility = 'visible'
        } else {
            this.opacity = 0
            this.visibility = 'hidden'
        }
    }

    setVisibility(value) {
        this.visibility = value ? 'visible' : 'hidden'
        this.opacity = value
    }

    getCss() {
        return {
            visibility: this.visibility,
            opacity: this.opacity
        }
    }
}