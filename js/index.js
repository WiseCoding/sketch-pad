(() => {
  // INIT
  setSliderValue();
  printGrid();

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
  function setSliderValue() {
    const slider = document.querySelector('#slider');
    const display = document.querySelector('#slider_value');
    display.textContent = `${slider.value}*${slider.value}`;
  }

  function printGrid() {
    const slider = document.querySelector('#slider');
    const section = document.querySelector('#section');
    const surface = slider.value * slider.value;

    let wrapHTML = '';
    let fieldHTML = '';

    for (let i = 0; i < surface; i++) {
      fieldHTML += `<div class="field off" id="${i}"></div>`;
    }

    let style = `grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr);`;
    wrapHTML = `<div id="wrap" style="${style}">${fieldHTML}</div>`;
    section.innerHTML = wrapHTML;
    paint();
  }

  function paint() {
    const fields = document.querySelectorAll(`.field`);
    fields.forEach(
      (field, index) =>
        (field.onmouseover = () => {
          field.classList.remove('off');
          field.classList.add('on');
        })
    );
  }
})();
