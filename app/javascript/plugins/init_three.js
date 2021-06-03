import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const initThree = () => {
  const canvas = document.querySelector("#c");

  if (canvas) {
    const params = JSON.parse(canvas.dataset.pieceParams);
    // console.dir(params.bottomPart["color"]);
    // Positionnement de la camera et de la scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 200;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f4f4);
    const group = new THREE.Group();

    // Construction de la table
    // const topPart = createTopPart("square", 10, 1, 10, "blue");
    // const bottomPart = createBottomPart("round", 1, 1, 6, 10, 1, 10, "white");
    // group.add(topPart, bottomPart);

    console.dir(params.category === "table");
    if (params.category === "table") {
      const topPart = createTopPartTable(
        params.topPart["shape"],
        params.topPart["width"],
        params.topPart["height"],
        params.topPart["length"],
        params.topPart["color"]
      );
      const bottomPart = createBottomPart(
        params.bottomPart["shape"],
        params.bottomPart["topRadius"],
        params.bottomPart["bottomRadius"],
        params.bottomPart["lengthCylinder"],
        params.bottomPart["topWidth"],
        params.bottomPart["topHeight"],
        params.bottomPart["topLength"],
        params.bottomPart["color"]
      );
      group.add(topPart, bottomPart);
    } else if (params.category === "chaise") {
      const topPart = createTopPartChair(
        params.topPart["shape"],
        params.topPart["width"],
        params.topPart["height"],
        params.topPart["length"],
        params.topPart["color"]
      );
      const bottomPart = createBottomPart(
        params.bottomPart["shape"],
        params.bottomPart["topRadius"],
        params.bottomPart["bottomRadius"],
        params.bottomPart["lengthCylinder"],
        params.bottomPart["topWidth"],
        params.bottomPart["topHeight"],
        params.bottomPart["topLength"],
        params.bottomPart["color"]
      );
      group.add(topPart, bottomPart);
    }

    // Afficher la piece sur la scene
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
    scene.add(group);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.maxPolarAngle = Math.PI / 2;
    // controls.minPolarAngle = Math.PI / 3;
    // controls.enableDamping = true;
    // controls.enablePan = false;
    // controls.dampingFactor = 0.1;
    // controls.noZoom = true;
    // controls.autoRotate = false; // Toggle this if => table automatically rotate
    // controls.autoRotateSpeed = 0.2; // 30

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      var width = window.innerWidth;
      var height = window.innerHeight;
      var canvasPixelWidth = canvas.width / window.devicePixelRatio;
      var canvasPixelHeight = canvas.height / window.devicePixelRatio;

      const needResize =
        canvasPixelWidth !== width || canvasPixelHeight !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.0003; // convertis le temps en secondes
      // group.rotation.x = time;
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      group.rotation.y = time;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
};

function findRightColor(color) {
  if (color === "raw") {
    const raw = new THREE.TextureLoader().load(
      "https://media.istockphoto.com/photos/wood-texture-background-wood-planks-horizontal-picture-id629075150?k=6&m=629075150&s=170667a&w=0&h=LNqNh6HMwSY0VdTpKLLQKOszhtTw6NYEO0Z3c3y0qHU="
    );
    return raw;
  } else if (color === "white") {
    const white = new THREE.TextureLoader().load(
      "https://media.istockphoto.com/photos/white-wood-floor-texture-background-picture-id1097185952?k=6&m=1097185952&s=612x612&w=0&h=t_Z-hBblwg6N19Dthnxq-WUP8uz0TlrCYWSXulxABLU="
    );
    return white;
  } else if (color === "black") {
    const black = new THREE.TextureLoader().load(
      "https://media.istockphoto.com/photos/dark-wood-background-picture-id933501774?k=6&m=933501774&s=612x612&w=0&h=nP_45Mtx2FQrA9QH1hpejUQ8KYu09MBCJBhdmHvwf-o="
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
  } else if (color === "light") {
    const light = new THREE.TextureLoader().load(
      "https://media.istockphoto.com/photos/light-brown-wood-texture-background-picture-id958689614?k=6&m=958689614&s=612x612&w=0&h=-QbErlG9TCdqs-vjr771m4gDTCCZa4SD0Lx5foZ6KAQ="
    );
    return light;
  }
}

function createTopPartTable(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let texture = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let topPart = new THREE.Mesh(object, material);
  return topPart;
}

function createTopPartChair(shape, width, height, length, color) {
  const topPart = new THREE.Group();
  let object1 = findRightShape(shape, width, height, length);
  let object2 = findRightShape(shape, width, length, height);
  let texture = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let chair = new THREE.Mesh(object1, material);
  let backChair = new THREE.Mesh(object2, material);
  backChair.position.y = length / 2 + height / 2;
  backChair.position.z = length / 2 - height / 2;
  topPart.add(chair, backChair);
  return topPart;
}

function createBottomElement(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let texture = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let bottomElement = new THREE.Mesh(object, material);
  // BottomElement.position = position(width, length, height);
  return bottomElement;
}

function createBottomPart(
  shape,
  topRadius,
  bottomRadius,
  lengthCylinder,
  topWidth,
  topHeight,
  topLength,
  color
) {
  const bottomPart = new THREE.Group();
  let positions = Position(topWidth, topHeight, topLength, lengthCylinder);
  for (let i = 0; i < 4; i++) {
    // rayon du haut, rayon du bas, hauteur
    let element = createBottomElement(
      shape,
      topRadius,
      bottomRadius,
      lengthCylinder,
      color
    );
    element.position.x = positions[i].x;
    element.position.y = positions[i].y;
    element.position.z = positions[i].z;
    bottomPart.add(element);
  }
  return bottomPart;
}

function findRightShape(shape, width, height, length) {
  if (shape === "square" || shape === "rectangular") {
    return new THREE.BoxGeometry(width, height, length);
  } else {
    return new THREE.CylinderGeometry(width, height, length);
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

  return [a, b, c, d];
}

// import { Controller } from "stimulus";

// export default class extends Controller {
//   static targets = [ '<%= @piece.json_params.to_json %>' ];

//   connect() {
//     setInterval(this.refresh, 5000);
//   }

//   refresh = () => {
//     fetch('/edit_piece', { headers: { accept: "application/json" }})
//       .then(response => response.json())
//       .then((data) => {
//         // this.countTarget.innerText = data.restaurants.length;
//         // Do something
//       });
//   }
// }

export { initThree };
