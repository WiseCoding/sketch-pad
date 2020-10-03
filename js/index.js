(() => {
  // INIT

  // HANDLERS
  document.querySelector('#slider').onmousemove = () => {
    setSliderValue();
  };
  document.querySelector('#slider').onchange = () => {
    printGrid();
  };
  document.querySelector('#slider_value').onclick = () => {
    printGrid();
  };

  // FUNCTIONS
})();
