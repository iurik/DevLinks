function toggleMode() {
  const html = document.documentElement

  /*   if (html.classList.contains('light')) {
      html.classList.remove('light')
    } else {
      html.classList.add('light')
    } */
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/profile-light.png')
    img.setAttribute('alt', 'Foto de Iuri sorrindo, usando boné bordô, fundo claro')
  } else {
    img.setAttribute('src', './assets/profile.png')
    img.setAttribute('alt', 'Foto de Iuri sorrindo, fundo escuro')
  }

}