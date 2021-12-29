const box = document.querySelector(".box")

const observer = new ResizeObserver((entries) => {
    const theBox = entries[0]
    const isSmall = theBox.contentRect.width < 150
    theBox.target.getElementsByClassName.backgroundColor = isSmall ? "blue" : "red"

})


observer.observe(box)