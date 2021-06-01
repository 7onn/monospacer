all = document.getElementsByTagName("*")

toggleFontFamily = () => {
  for (i = 0; i < all.length; i++) {
    all[i].style.fontFamily = "Monospace, monospace, Menlo, menlo"
  }
  setTimeout(toggleFontFamily, 2000)
}

toggleFontFamily()
