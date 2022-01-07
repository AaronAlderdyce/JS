let lastRenderTime = 0


function main(currentTime) {
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime

}
window.requestAnimationFrame(main)