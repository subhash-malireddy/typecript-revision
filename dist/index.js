var heading = "Hey I'm revisig Typescript";
var myH1 = document.getElementById('my-h1');
myH1.textContent = "Hey!! I started learning typescript";
myH1.style.color = "#db0e48";
var fname = "Subbi";
var lname = "Reddy";
(function (fname, lname) {
    console.log(fname + " " + lname);
})(fname, lname);
