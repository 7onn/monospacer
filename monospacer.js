toggleFontFamily = () => {
  all = document.getElementsByTagName("*")
  for (i = 0; i < all.length; i++) {
    all[i].style.fontFamily = "Monospace, monospace, Menlo, menlo"
  }
}

toggleFontFamily()
setTimeout(toggleFontFamily, 100)
setTimeout(toggleFontFamily, 200)
setTimeout(toggleFontFamily, 300)
setTimeout(toggleFontFamily, 500)
setTimeout(toggleFontFamily, 800)
setTimeout(toggleFontFamily, 1300)
setTimeout(toggleFontFamily, 2100)
setTimeout(toggleFontFamily, 3400)
setTimeout(toggleFontFamily, 5500)
setTimeout(toggleFontFamily, 8900)
setTimeout(toggleFontFamily, 14400)
setTimeout(toggleFontFamily, 23300)
