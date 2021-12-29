const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show")
    })
    console.log(entries)
})

observer.observe(cards[0])