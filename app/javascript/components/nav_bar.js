const navBar = () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $("#test").addClass("show");
    } else {
      $("#test").removeClass("show");
    }
  });
};

export { navBar };
