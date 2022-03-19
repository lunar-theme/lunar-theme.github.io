function copy(e: MouseEvent) {
  const target = e.currentTarget as HTMLButtonElement
  const value = target.dataset.clipboard
  navigator.clipboard.writeText(value)
  const title = target.querySelector('.card-title') as HTMLHeadingElement
  title.innerText = 'Copied!'
  setTimeout(() => {
    title.innerText = title.dataset.name
  }, 1200)
}

document.querySelectorAll('.swatch').forEach(swatch => swatch.addEventListener('click', copy, false))