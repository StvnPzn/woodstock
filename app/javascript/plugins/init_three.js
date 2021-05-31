import * as THREE from "three";

const initThree = () => {
  const check = document.querySelector(".model");

  if (check) {
    console.log("je suis ici");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 20;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8f8e8e);

    // x, y, z
    let topPart = createTopPart("square", 10, 1, 10, "blue");
    console.log(topPart);
    const arr = [];
    for (let i = 0; i < 4; i++) {
      // rayon du haut, rayon du bas, hauteur
      let part = createBottomPart("round", 1, 1, 6, "white");
      arr.push(part);
    }

    let positions = Position(10, 1, 10, 6);
    arr.forEach((bottom, index) => {
      bottom.position.x = positions[index].x;
      bottom.position.y = positions[index].y;
      bottom.position.z = positions[index].z;
    });

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.add(topPart);
    group.add(arr[0], arr[1], arr[2], arr[3]);

    scene.add(group);

    function render(time) {
      time *= 0.0007; // convertis le temps en secondes

      // group.rotation.x = time;
      group.rotation.y = time;

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
};

function createTopPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  console.dir(object);
  let formatColor = findRightColor(color);
  const texture = new THREE.TextureLoader().load(
    "https://media.istockphoto.com/photos/wood-texture-background-wood-planks-horizontal-picture-id629075150?k=6&m=629075150&s=170667a&w=0&h=LNqNh6HMwSY0VdTpKLLQKOszhtTw6NYEO0Z3c3y0qHU="
  );
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set(4, 4);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let topPart = new THREE.Mesh(object, material);
  console.dir(topPart);
  return topPart;
}

function createBottomPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let formatColor = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ color: formatColor });
  let bottomPart = new THREE.Mesh(object, material);
  // BottomPart.position = position(width, length, height);
  return bottomPart;
}

function findRightShape(shape, width, height, length) {
  if (shape === "square" || shape === "rectangular") {
    return new THREE.BoxGeometry(width, height, length);
  } else {
    return new THREE.CylinderGeometry(width, height, length, 32);
  }
}

function findRightColor(color) {
  if (color === "black") {
    const black = new THREE.Color(0x000000);
    return black;
  } else if (color === "white") {
    const white = new THREE.Color(0xffffff);
    return white;
  } else if (color === "raw") {
    const raw = new THREE.Color(0xcc8e56);
    return raw;
  } else if (color === "red") {
    const red = new THREE.Color(0xff0000);
    return red;
  } else if (color === "blue") {
    const blue = new THREE.Color(0x005cff);
    return blue;
  } else if (color === "grey") {
    const grey = new THREE.Color(0x929292);
    return grey;
  }
}
// x, y, z
function Position(width, length, height, h) {
  const a = new THREE.Vector3(
    width / 2 - width / 10,
    -h / 2 - length / 2,
    height / 2 - height / 10
  );
  const b = new THREE.Vector3(
    width / 2 - width / 10,
    -h / 2 - length / 2,
    -(height / 2) + height / 10
  );
  const c = new THREE.Vector3(
    -(width / 2) + width / 10,
    -h / 2 - length / 2,
    -(height / 2) + height / 10
  );
  const d = new THREE.Vector3(
    -(width / 2) + width / 10,
    -h / 2 - length / 2,
    height / 2 - height / 10
  );
  // const a = new THREE.Vector3( (( width / 2 )), -(height / 2) + (height /10), ((length / 2) ) );
  // const b = new THREE.Vector3( (width / 2), -(height / 2) + (height /10), - ( (length / 2) ) );
  // const c = new THREE.Vector3(-(width / 2), -(height / 2) + (height /10), - ((length / 2) ) );
  // const d = new THREE.Vector3(-(width / 2), -(height / 2) + (height /10), (length / 2)  );
  return [a, b, c, d];
}

// const getShapeTop = () => {
//   let shapeTop = document.querySelector(".shape-top");
//   shapeTop.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getWidthTop = () => {
//   let widthTop = document.querySelector(".width-top");
//   widthTop.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getLengthTop = () => {
//   let lengthTop = document.querySelector(".length-top");
//   lengthTop.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getHeightTop = () => {
//   let heightTop = document.querySelector(".height-top");
//   heightTop.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getMaterialTop = () => {
//   let materialTop = document.querySelector(".material-top");
//   materialTop.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getShapeBottom = () => {
//   let shapeBottom = document.querySelector(".shape-bottom");
//   shapeBottom.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getWidthBottom = () => {
//   let widthBottom = document.querySelector(".width-bottom");
//   widthBottom.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getLengthBottom = () => {
//   let lengthBottom = document.querySelector(".length-bottom");
//   lengthBottom.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getHeightBottom = () => {
//   let heightBottom = document.querySelector(".height-bottom");
//   heightBottom.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

// const getMaterialBottom = () => {
//   let materialBottom = document.querySelector(".material-bottom");
//   materialBottom.addEventListener("change", (event) => {
//     return event.currentTarget.selectedOptions[0].innerHTML;
//   });
// };

//trying rotation

export { initThree };
