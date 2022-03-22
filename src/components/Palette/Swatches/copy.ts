function copy(e: MouseEvent) {
  const target = e.currentTarget as HTMLButtonElement
  const value = target.dataset.clipboard
  navigator.clipboard.writeText(value)
  const body = target.querySelector('.card-body') as Element
  console.log(body)
  body.classList.add('swap-active')
  setTimeout(() => {
    body.classList.remove('swap-active')
  }, 1200)
}

document.querySelectorAll('.swatch').forEach(swatch => swatch.addEventListener('click', copy, false))