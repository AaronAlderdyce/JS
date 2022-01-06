import { updateBird, setupBird, getBirdRect } from "./bird.js"


document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")
const subtitle = document.querySelector("[data-subtitle]")
let lastTime



function updateLoop(time) {

    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return
    }
    const delta = time - lastTime
    updateBird(delta)
    if (checkLose()) return handlelose()
    lastTime = time
    window.requestAnimationFrame(updateLoop)
}



function checkLose() {
    const birdRect = getBirdRect()
    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight
    return outsideWorld
}

function handleStart() {
    title.classList.add("hide")
    setupBird()
    lastTime = null
    window.requestAnimationFrame(updateLoop)
}

function handlelose() {
    setTimeout(() => {
        title.classList.remove("hide")
        subtitle.classList.remove("hide")
        subtitle.textContent = ""
        document.addEventListener("keypress", handleStart, { once: true })

    }, 100)

}