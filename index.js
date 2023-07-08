const body = document.querySelector("body");
const btn = document.getElementById("openBtn")

const lay = document.createElement("div")
lay.className = "modalLay"

const modalDiv = document.createElement("div")
modalDiv.className = "modalDiv"

const modalTitle = document.createElement("h2")
modalTitle.className = "modalTitle"
modalTitle.innerText = "행동 기록"
modalDiv.appendChild(modalTitle)


const closeBtn = document.createElement("button")
closeBtn.className = "closeBtn"
closeBtn.innerText = "X"
modalDiv.appendChild(closeBtn)

const modalSpan1 = document.createElement("span")
const modalSpan2 = document.createElement("span")
const modalSpan3 = document.createElement("span")
modalSpan1.className = "modalSpan"
modalSpan2.className = "modalSpan"
modalSpan3.className = "modalSpan"
modalSpan1.innerText = `Open : 0`
modalSpan2.innerText = `CloseBtn : 0`
modalSpan3.innerText = `CloseLayout : 0`
modalDiv.appendChild(modalSpan1)
modalDiv.appendChild(modalSpan2)
modalDiv.appendChild(modalSpan3)

let cntOpen = 0;
let cntCloseBtn = 0;
let cntCloseLay = 0;

closeBtn.addEventListener("click", () => {
    lay.style.display = "none"
    modalDiv.style.display = "none"
    cntCloseBtn += 1;
    modalSpan2.innerText = `CloseBtn : ${cntCloseBtn}`
})

lay.addEventListener("click", () => {
    lay.style.display = "none"
    modalDiv.style.display = "none"
    cntCloseLay += 1;
    modalSpan3.innerText = `CloseLayout : ${cntCloseLay}`
})

btn.addEventListener("click", () => {
    cntOpen += 1;
    body.appendChild(lay)
    body.appendChild(modalDiv)
    modalSpan1.innerText = `Open : ${cntOpen}`
    lay.style.display = "flex"
    modalDiv.style.display = "flex"
})