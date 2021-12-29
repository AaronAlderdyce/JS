const cards = document.querySelectorAll(".card")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {

    threshold: 1,
})

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return

}, {})

lastCardObserver.observe(document.querySelector(".card:last-child"))

cards.forEach(card => {
    observer.observe(cards)
})