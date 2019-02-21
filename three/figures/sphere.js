class SphereThree {
    constructor() {
        this.geometry = new THREE.SphereGeometry(  0.5, 0.5, 0.5 ) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color: 0x9f3211, flatShading: true, metalness: 0, roughness:1 })
        this.sphere = new THREE.Mesh ( this.geometry, this.material )
    }

    setData(params = {
        geometry: {
            x: 1,
            y: 1,
            z: 1
        },
        color: 0xff0051,
        transparent: true
    }) {

        const g = params.geometry;
        const color = params.color;

        this.geometry = new THREE.SphereGeometry( g.x, g.y, g.z) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color, flatShading: true, metalness: 0, roughness:1 })
        this.sphere = new THREE.Mesh ( this.geometry, this.material )
    }

    getTransparent() {
        this.geometry = new THREE.SphereGeometry(  1, 0.5, 0.5 ) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color: "#dadada", wireframe: true, transparent: true })
        this.sphere = new THREE.Mesh ( this.geometry, this.material )
    }
}