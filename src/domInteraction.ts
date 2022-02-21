const myH2:HTMLElement =  document.getElementById('my-h2')

myH2.innerText = 'Satti Reddy likes violence ⚔'

myH2.addEventListener('mouseenter', (ev:MouseEvent) => {
    myH2.style.color = 'violet'
    myH2.style.transitionDuration = "1s"
    myH2.style.cursor = "pointer"
})
myH2.addEventListener("mouseleave", (ev:MouseEvent) => {
    myH2.style.color = 'purple'
})

const myInput = document.getElementById('my-input') as HTMLInputElement

myInput.addEventListener('click', (ev: Event) => {
    const target = (ev.target) as HTMLInputElement  // yeah gotta cast type to HTMLInputElement else value property doesn't exist on type EventTarget. Hover over ev.`target`.
    target.value = "From Ts file."
})