class TorusThree {
    constructor() {
        this.geometry = new THREE.TorusGeometry(  4.5, 0.1, 8, 100 ) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color: 0xffff00, flatShading: true, metalness: 0, roughness:1 })
        this.torus = new THREE.Mesh ( this.geometry, this.material )
    }

    setData(params = {
        geometry: {
            x: 1,
            y: 1,
            z: 1,
            w: 1
        },
        color: 0xff0051
    }) {

        const g = params.geometry;
        const color = params.color;

        this.geometry = new THREE.TorusGeometry( g.x, g.y, g.z, g.w ) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color, flatShading: true, metalness: 0, roughness:1 })
        this.torus = new THREE.Mesh ( this.geometry, this.material )
    }
}