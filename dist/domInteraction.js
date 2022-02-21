var myH2 = document.getElementById('my-h2');
myH2.innerText = 'Satti Reddy likes violence ⚔';
myH2.addEventListener('mouseenter', function (ev) {
    myH2.style.color = 'violet';
    myH2.style.transitionDuration = "1s";
    myH2.style.cursor = "pointer";
});
myH2.addEventListener("mouseleave", function (ev) {
    myH2.style.color = 'purple';
});
var myInput = document.getElementById('my-input');
myInput.addEventListener('click', function (ev) {
    var target = (ev.target); // yeah gotta cast type to HTMLInputElement else value property doesn't exist on type EventTarget. Hover over ev.`target`.
    target.value = "From Ts file.";
});
