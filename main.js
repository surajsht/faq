let show = document.querySelectorAll(".show")
let hide = document.querySelectorAll(".hide")

show.forEach(function (show) {
  show.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-solid")) {
      let parentElement = e.target.parentElement.parentElement
      let nextSibling = parentElement.nextElementSibling

      let siblingContentHeight = nextSibling
        .querySelector("p")
        .getBoundingClientRect().height

      nextSibling.style.height = siblingContentHeight + "px"

      show.style.display = "none"

      let iconHide = parentElement.querySelector(".hide")
      iconHide.style.display = "block"
    } else {
      return
    }
  })
})

hide.forEach(function (hide) {
  hide.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-solid")) {
      let parentElement = e.target.parentElement.parentElement
      let nextSibling = parentElement.nextElementSibling

      nextSibling.style.height = 0 + "px"

      hide.style.display = "none"

      let iconShow = parentElement.querySelector(".show")

      iconShow.style.display = "block"
    }
  })
})
