let scene = document.querySelector( 'a-scene' );
      let objectCount = 10;
      let canScale = 0.3;
      let size = 5;
      let totalSize = objectCount * size;
      let speedX = 0.1;

      let containerElement = document.createElement( 'a-entity' );
      containerElement.setAttribute( 'position', `${-1.0 * totalSize / 2.0} ${ totalSize} -150.0` );
      containerElement.setAttribute( 'rotation', `90 0 0` );
      scene.appendChild( containerElement );

      function createCan(x, y, z, delay) {
        let element = document.createElement( 'a-entity' );
        element.setAttribute( 'material', 'src: texture/Cola_Can_albedo.png; metalness:.3' );
        element.setAttribute( 'class' , `can` );
        element.setAttribute( 'position' , `${x} ${y} ${z}` );
        element.setAttribute( 'shadow' , 'cast: true;' );
        element.setAttribute( 'obj-model' , 'obj: models/cola_can.obj;' );
        element.setAttribute( 'scale' , `${canScale} ${canScale} ${canScale}` );
        element.setAttribute( 'animation' , `property: rotation; to: 0 360 360; loop: true; dur: 10000; easing: linear; delay: ${delay}` );
        element.setAttribute( 'crossorigin' , `anonymous` );

        element.setAttribute( 'my-animation', `totalSizeX: 150; speedX: ${speedX}` );
        // element.setAttribute( 'animation__2' , 'property: position; loop: true; dur: 10000; easing: linear' );
        containerElement.appendChild( element );
      }

      function addObjects() {
        for( let i=0; i<objectCount; i++ ) {
          for( let j=0; j<objectCount; j++ ) {
            createCan( i * size , Math.random() * 150 , j * size, Math.random() * 10000 );
          }
        }
      }

addObjects();