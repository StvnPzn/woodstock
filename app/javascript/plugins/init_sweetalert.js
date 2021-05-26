import Swal from "sweetalert2";

const initSweetalert = (selector, options = {}) => {
  const swalButton = document.querySelector(".sweet-alert");
  if (swalButton) {
    // protect other pages
    swalButton.addEventListener("click", (e) => {
      e.preventDefault();
      const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            "Table": "Table",
            "Commode": "Commode",
            "Meuble TV": "Meuble TV",
            "Etagere": "Etagere",
            "Chaise": "Chaise",
            "Buffet": "Buffet",
          });
        }, 1000);
      });

      const { value: category } = Swal.fire({
        title: "Mon choix de création",
        input: "radio",
        // background: "red",
        inputOptions: inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return "Choisissez une catégorie !";
          }
        },
      });

      if (category) {
        Swal.fire({ html: `You selected: ${category}` });
      }

      swalButton.addEventListener("click", () => {
        swal(options);
      });
    });
  }
};

export { initSweetalert };
