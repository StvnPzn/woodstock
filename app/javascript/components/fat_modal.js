import { initSweetalert } from "../plugins/init_sweetalert";

initSweetalert(
  "#sweet-alert-demo",
  {
    title: "A nice alert",
    text: "This is a great alert, isn't it?",
    icon: "success",
  },
  (value) => {
    console.log(value);
  }
);

(async () => {
  /* inputOptions can be an object or Promise */
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "#ff0000": "Red",
        "#00ff00": "Green",
        "#0000ff": "Blue",
      });
    }, 1000);
  });

  const { value: color } = await Swal.fire({
    title: "Select color",
    input: "radio",
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "Choisissez une catégorie";
      }
    },
  });

  if (color) {
    Swal.fire({ html: `You selected: ${color}` });
  }
})();
