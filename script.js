window.onload = function() {
  function animate() {
    const circles = $(".circle");

    circles.each((i, element) => {
      let opacity = Math.random();
      element
        .velocity(
          {
            cy: "-50%",
            cx: `${Math.random() * 100}%`,
            opacity: `${1.2 - opacity}`,
            r: `${opacity * (5 - 2) + 2}`
          },
          { duration: 0 }
        )
        .velocity(
          { cy: "120%" },
          { ease: "swing", duration: 1000 + 4000 / opacity - opacity * 1000 }
        );
    });

    setTimeout(function(params) {
      animate();
    }, 1000);
    //   animate();
  }

  animate();
};
