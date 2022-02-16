const heading: string = "Hey I'm revisig Typescript"

const myH1: HTMLElement = document.getElementById('my-h1')

myH1.textContent = "Hey!! I started learning typescript"
myH1.style.color = "#db0e48"

let fname: string = "Subbi"

let lname: string = "Reddy";


(function (fname: string, lname: string): void {
    console.log(`${fname} ${lname}`)
})(fname, lname)

