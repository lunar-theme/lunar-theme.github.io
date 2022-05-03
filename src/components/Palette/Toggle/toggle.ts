const toggler = document.querySelector('#toggler');
const toggleTarget = document.querySelector('#toggleTarget');

const toggle = (index: number) => {
  Array.from(toggler.children).forEach((element, idx) => {
    if (idx === index) {
      element.classList.add('btn-active');
    } else {
      element.classList.remove('btn-active');
    }
  });
  if (index === 0) {
    toggleTarget.classList.remove('swap-active');
  } else {
    toggleTarget.classList.add('swap-active');
  }
}

Array.from(toggler.children).forEach((element, idx) =>  element.addEventListener('click', () => toggle(idx)));