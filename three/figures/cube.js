class CubeThree {
    constructor() {
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 ) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness:1 })
        this.cube = new THREE.Mesh ( this.geometry, this.material )
    }

    setData(params = {
        geometry: {
            x: 1,
            y: 1,
            z: 1
        },
        color: 0xff0051,
        flatShading: true,
        metalness: 0,
        roughness: 1
    }) {

        const g = params.geometry;
        const color = params.color;
        const flatShading = params.flatShading;
        const metalness = params.metalness;
        const roughness = params.roughness;

        this.geometry = new THREE.BoxGeometry( g.x, g.y, g.z ) // X, Y, Z
        this.material = new THREE.MeshStandardMaterial( { color, flatShading, metalness, roughness })
        this.cube = new THREE.Mesh ( this.geometry, this.material )
    }
}