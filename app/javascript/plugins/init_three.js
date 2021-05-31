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
  let texture = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let topPart = new THREE.Mesh(object, material);
  return topPart;
}

function findRightColor(color) {
  if (color === "raw") {
    const raw = new THREE.TextureLoader().load(
      "https://media.istockphoto.com/photos/wood-texture-background-wood-planks-horizontal-picture-id629075150?k=6&m=629075150&s=170667a&w=0&h=LNqNh6HMwSY0VdTpKLLQKOszhtTw6NYEO0Z3c3y0qHU="
    );
    return raw;
  } else if (color === "white") {
    const white = new THREE.TextureLoader().load(
      "https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cab63d04-0e41-4830-aef5-5cbecbbc897d"
    );
    return white;
  } else if (color === "black") {
    const black = new THREE.TextureLoader().load(
      "https://images.assetsdelivery.com/compings_v2/prapann/prapann1603/prapann160300128.jpg"
    );
    return black;
  } else if (color === "red") {
    const red = new THREE.TextureLoader().load(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d14f6b02-c364-40bb-9326-2574d5ae03fd/d8pdsmf-4e9b1bba-0fae-4258-921d-7e1d863ef47d.jpg/v1/fill/w_800,h_534,q_75,strp/red_wood_texture_by_ricksekhon_d8pdsmf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTM0IiwicGF0aCI6IlwvZlwvZDE0ZjZiMDItYzM2NC00MGJiLTkzMjYtMjU3NGQ1YWUwM2ZkXC9kOHBkc21mLTRlOWIxYmJhLTBmYWUtNDI1OC05MjFkLTdlMWQ4NjNlZjQ3ZC5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.dcrvmxlLBYhalaIIkWlciobWQUiTsLksiNs4_gc-TAo"
    );
    return red;
  } else if (color === "blue") {
    const blue = new THREE.TextureLoader().load(
      "https://live.staticflickr.com/5745/23214992144_d929d39eed_b.jpg"
    );
    return blue;
  } else if (color === "grey") {
    const grey = new THREE.TextureLoader().load(
      "https://media.istockphoto.com/photos/shiny-steel-texture-picture-id636123406?k=6&m=636123406&s=170667a&w=0&h=-MMubUSwPoFI85ha7lF7_JKfbmwTEM1fQNdYhY_ViMw="
    );
    return grey;
  }
}

function createBottomPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let texture = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ map: texture });
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
