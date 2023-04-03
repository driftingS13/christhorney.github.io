let pilot1Name = document.getElementById("pilot1Name")
let pilot2Name = document.getElementById("pilot2Name")
let p1a = document.getElementById("p1a")
let p1b = document.getElementById("p1b")
let p1c = document.getElementById("p1c")
let p1d = document.getElementById("p1d")
let p1e = document.getElementById("p1e")
let p2a = document.getElementById("p2a")
let p2b = document.getElementById("p2b")
let p2c = document.getElementById("p2c")
let p2d = document.getElementById("p2d")
let p2e = document.getElementById("p2e")
let resEl = document.getElementById("res-el")
let prevEl = document.getElementById("prev-el")
let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")

function names(){
    pilot1Name.textContent = name1.value

    pilot2Name.textContent = name2.value

}

function resBtn(){
    let result1 = parseInt(p1a.value) + parseInt(p1b.value) + parseInt(p1c.value) + parseInt(p1d.value) + parseInt(p1e.value);
    let result2 = parseInt(p2a.value) + parseInt(p2b.value) + parseInt(p2c.value) + parseInt(p2d.value) + parseInt(p2e.value);
    if (result1 > result2) {
        resEl.textContent = name1.value + " is the Winner with " + result1 + " points!";
        prevEl.textContent += name1.value + " WON with " + result1 + " Points! " + name2.value + " LOST with " + result2 + " Points. ";
    }
    else if (result2 > result1) {
        resEl.textContent = name2.value + " is the Winner with " + result2 + " points!";
        prevEl.textContent += name2.value + " WON with " + result2 + " Points! " + name1.value + " LOST with " + result1 + " Points. ";
    }
    else {
        resEl.textContent = "It's a draw! Both pilots scored " + result1 + " points.";
        prevEl.textContent += "It's a draw! Both pilots scored " + result1 + " points. ";
    }
}
        
