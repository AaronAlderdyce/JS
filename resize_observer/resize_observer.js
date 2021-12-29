const box = document.querySelector(".box")

const observer = new ResizeObserver((entries) => {
    const theBox = entries[0]
    const isSmall = entries[0]

})


observer.observe(box)