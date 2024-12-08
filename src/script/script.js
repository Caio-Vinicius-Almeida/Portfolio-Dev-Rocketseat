const btn = document.getElementById("CaretDoubleDown")

btn.addEventListener("click", (event) => {
  event.preventDefault()
  btn.scrollIntoView({
    behavior: "smooth",
  })
})
