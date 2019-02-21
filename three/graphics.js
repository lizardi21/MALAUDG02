class GraphicsThree {
    constructor() {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
        this.renderer = new THREE.WebGLRenderer({ antialias: true})
    }

    init() {
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        
        // sets renderer background color
        this.renderer.setClearColor("#222222")
        document.body.appendChild( this.renderer.domElement )
        this.camera.position.z = 5
        
        // resize canvas on resize window
        window.addEventListener( 'resize', () => {
            let width = window.innerWidth
            let height = window.innerHeight
            this.renderer.setSize( width, height )
            this.camera.aspect = width / height
            this.camera.updateProjectionMatrix()
        })

        const ST = new SphereThree();
        this.addFigure(ST.sphere);
        this.addRotation(ST.sphere, 0.09);
        
        ST.getTransparent();
        this.addFigure(ST.sphere);

        // basic cube
        /*const CT = new CubeThree();
        CT.setData({
            geometry: {
                x:1,
                y:2,
                z:3
            },
            color: 0xff0051,
            flatShading: true,
            metalness: 0,
            roughness: 1
        });
        this.addFigure(CT.cube);
        this.addRotation(CT.cube, 0.04, 0.04);*/

        // Big Torus
        const TT = new TorusThree();
        this.addFigure(TT.torus);
        this.addRotation(TT.torus, -0.01, 0.001);

        // Medium Torus
        TT.setData({
            geometry: {
                x:3,
                y:0.1,
                z:8,
                w:100
            },
            color: 0xff0051
        });
        this.addFigure(TT.torus);
        this.addRotation(TT.torus, 0.03);

        // Nucleo Torus 1
        TT.setData({
            geometry: {
                x:1,
                y:0.1,
                z:16,
                w:100
            },
            color: 0xff6600
        });
        this.addFigure(TT.torus);
        this.addRotation(TT.torus, 0.23);

        // Nucleo Torus 2
        TT.setData({
            geometry: {
                x:1,
                y:0.1,
                z:16,
                w:100
            },
            color: 0xff9900
        });
        this.addFigure(TT.torus);
        this.addRotation(TT.torus, -0.19, 0.03);

        // Nucleo Torus 3
        TT.setData({
            geometry: {
                x:1,
                y:0.1,
                z:16,
                w:100
            },
            color: 0xff1a1a
        });
        this.addFigure(TT.torus);
        this.addRotation(TT.torus, -0.05, -0.15);
        
        // wireframe cube
        /*var geometry = new THREE.BoxGeometry( 3, 3, 3)
        var material = new THREE.MeshBasicMaterial( {
            color: "#dadada", wireframe: true, transparent: true
        })
        var wireframeCube = new THREE.Mesh ( geometry, material )
        this.scene.add( wireframeCube )*/
        
        // ambient light
        var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
        this.scene.add( ambientLight )
        
        // point light
        var pointLight = new THREE.PointLight( 0xffffff, 1 );
        pointLight.position.set( 25, 75, 25 );
        this.scene.add( pointLight );
        
        //this.addRotation(wireframeCube, -0.01, -0.01);
        
    }

    addFigure(figure) {
        this.scene.add( figure )
    }

    addRotation(figure, x = 0.04, y = 0.04) {
        const that = this;

        function animate() {
            requestAnimationFrame( animate )
            figure.rotation.x += x;
            figure.rotation.y += y;
            that.renderer.render( that.scene, that.camera )
        }
        animate()
    }
  }