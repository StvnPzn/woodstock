import * as THREE from 'three';

const initThree = () => {
  if ()
  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 100 );
  const scene = new THREE.Scene();

  createTopPart('round', 3, 3, 3, 'black');
  const arr = []
  for (let i = 0; i < 4; i++) {
    let part = createBottomPart('round', 1, 1, 8, 'white');
    arr.push(part);
  }

  scene.add (topPart, arr[0], arr[1], arr[2], arr[3]);

  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  renderer.render( scene, camera );
}

function createTopPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let formatColor = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({color: formatcolor});
  let topPart = new THREE.Mesh(object, material);
  return topPart;
}

function createBottomPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let formatColor = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({color: formatcolor});
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
    return '0x000000'
  }
  else if (color === 'white') {
    return '0xffffff'
  }
  else if (color === 'raw') {
    return '0xcc8e56'
  }
  else if (color === 'red') {
    return '0xff0000'
  }
  else if (color === 'blue') {
    return '0x005cff'
  }
  else if (color === 'grey') {
    return '0x929292'
  }
}

export { initThree };
