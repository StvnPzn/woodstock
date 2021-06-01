// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import { navBar } from "../components/nav_bar";
// import { initSweetalert } from "../plugins/init_sweetalert";
// import "sweetalert2/src/sweetalert2.scss";
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initThree } from "../plugins/init_three.js";

document.addEventListener("turbolinks:load", () => {
  // Call your functions here, e.g:
  // initSelect2();
  initThree();
  navBar();
  // initSweetalert();

  // const coco = document.querySelector(".coco");
  // console.dir(JSON.parse(coc.dataset.cocoParams));

  // const shapeTop = document.querySelector(".shapeTop");
  // console.dir(JSON.parse(shapeTop.dataset.shapeTopParams));

  // const materialTop = document.querySelector(".shapeTop");
  // console.dir(JSON.parse(materialTop.dataset.materialTopParams));

  // const colorTop = document.querySelector(".colorTop");
  // console.dir(JSON.parse(colorTop.dataset.colorTopParams));

  // const heightTop = document.querySelector(".heightTop");
  // console.dir(JSON.parse(heightTop.dataset.heightTopParams));

  // const widthTop = document.querySelector(".widthTop");
  // console.dir(JSON.parse(heightTop.dataset.widthTopParams));

  // const lengthTop = document.querySelector(".lengthTop");
  // console.dir(JSON.parse(lengthTop.dataset.widthTopParams));



  // const shapeBottom = document.querySelector(".shapeBottom");
  // console.dir(JSON.parse(shapeBottom.dataset.shapeBottomParams));

  // const materialBottom = document.querySelector(".materialBottom");
  // console.dir(JSON.parse(materialBottom.dataset.materialBottomParams));

  // const materialBottom = document.querySelector(".colorBottom");
  // console.dir(JSON.parse(materialBottom.dataset.colorBottomParams));

  // const heightTop = document.querySelector(".heightBottom");
  // console.dir(JSON.parse(heightTop.dataset.heightTopParams));

  // const widthBottom = document.querySelector(".widthBottom");
  // console.dir(JSON.parse(widthBottomTop.dataset.widthBottomParams));

  // const lengthBottom = document.querySelector(".lengthBottom");
  // console.dir(JSON.parse(lengthBottom.dataset.widthBottomParams));
});
