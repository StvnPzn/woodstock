import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const initThree = () => {

const canvas = document.querySelector("#c");
const params = JSON.parse(canvas.dataset.pieceParams);
console.dir(params.bottomPart["color"]);

  if (canvas) {

    // Positionnement de la camera et de la scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f4f4);
    const group = new THREE.Group();

    // Construction de la table
    // const topPart = createTopPart("square", 10, 1, 10, "blue");
    // const bottomPart = createBottomPart("round", 1, 1, 6, 10, 1, 10, "white");
    // group.add(topPart, bottomPart);

    const topPart = createTopPart(params.topPart["shape"], params.topPart["width"], params.topPart["height"], params.topPart["length"], params.topPart["color"]);
    console.dir(topPart)
    const bottomPart = createBottomPart(params.bottomPart["shape"], params.bottomPart["topRadius"], params.bottomPart["bottomRadius"], params.bottomPart["lengthCylinder"], params.bottomPart["topWidth"], params.bottomPart["topHeight"], params.bottomPart["topLength"], params.bottomPart["color"]);
    group.add(topPart, bottomPart);


    const getShapeTop = () => {
    let shapeTop = document.querySelector(".shape-top");
    shapeTop.addEventListener("change", (event) => {
    return event.currentTarget.selectedOptions[0].innerHTML;
    });
  };




    // Afficher la piece sur la scene
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
    scene.add(group);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 3;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.dampingFactor = 0.1;
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
      time *= 0.0007; // convertis le temps en secondes
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

function createTopPart(shape, width, height, length, color) {
  let object = findRightShape(shape, width, height, length);
  let texture = findRightColor(color);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let topPart = new THREE.Mesh(object, material);
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




// const getShapeTop = () => {
  // let shapeTop = document.querySelector(".shape-top");
  // console.dir(shapeTop)
  // shapeTop.addEventListener("keyup", (event) => {
  //   let shapeTop = event.currentTarget.selectedOptions[0].innerHTML;
  // });
  // console.log(shapeTop)
// };

  // fetch("canvas.dataset.pieceParams", {
  //   method: "POST",
  //   body: JSON.stringify({ query: event.currentTarget.selectedOptions[0].value })
  // })
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log();
  //   });


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

// const getcolorTop = () => {
//   let colorTop = document.querySelector(".color-top");
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

const createPiece = (json_params) => {
  const category = json_params["category"];
  if (category === "table") {
    const tableTop = createTableTop(json_params["top"]);
    const tableBottom = createTableBottom(json_params["bottom"]);
    groupTableParts(tableTop, tableBottom);
  }
};


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
