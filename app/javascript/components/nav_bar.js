const navBar = () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $(".bg").addClass("show");
    } else {
      $(".bg").removeClass("show");
    }
  });
};

export { navBar };
