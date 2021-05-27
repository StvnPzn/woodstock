import * as THREE from 'three';

const initThree = () => {
  const check = document.querySelector('.model');
  if (check) {
    console.log("je suis ici");
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 15;
    const scene = new THREE.Scene();

    let topPart = createTopPart('square', 3, 3, 3, 'blue');
    console.log(topPart);
    const arr = []
    for (let i = 0; i < 4; i++) {
      let part = createBottomPart('round', 1, 1, 8, 'white');
      arr.push(part);
    }
    console.log(arr)
    scene.add(topPart, arr[0], arr[1], arr[2], arr[3]);
    console.dir(scene);
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    console.log(renderer);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    renderer.render( scene, camera );
  }
}

function createTopPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  console.dir(object);
  let formatColor = findRightColor(color);
  let material = new THREE.MeshBasicMaterial( {color: formatColor} );
  console.dir(material);
  let topPart = new THREE.Mesh(object, material);
  console.dir(topPart);
  return topPart;
}

function createBottomPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let formatColor = findRightColor(color);
  let material = new THREE.MeshBasicMaterial( {color: formatColor} );
  let BottomPart = new THREE.Mesh(object, material);
  return BottomPart;
}

function findRightShape(shape, width, height, length) {
  if (shape === 'square' || shape === 'rectangular') {
    return new THREE.BoxGeometry(width, height, length)
  } else {
    return new THREE.CylinderGeometry(width, height, length, 32)
  }
}

function findRightColor(color) {
  if (color === 'black') {
    const black = new THREE.Color( 0x000000 );
    return black;
  }
  else if (color === 'white') {
    const white = new THREE.Color( 0xffffff );
    return white;
  }
  else if (color === 'raw') {
    const raw = new THREE.Color( 0xcc8e56 );
    return raw;
  }
  else if (color === 'red') {
    const red = new THREE.Color( 0xff0000 );
    return red;
  }
  else if (color === 'blue') {
    const blue = new THREE.Color( 0x005cff );
    return blue;
  }
  else if (color === 'grey') {
    const grey = new THREE.Color( 0x929292 );
    return grey;
  }
}

export { initThree };
