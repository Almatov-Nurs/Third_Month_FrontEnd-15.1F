let positionX = 0;
let positionY = 0;

let sc = 0
let mn = 0
let hr = 0
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

let c = 0
const counter = () => {
    sc++
    if (sc === 60) {
        sc -= 60
        mn++
    } else if (mn === 60) {
        mn -= 60
        hr++
    }
    if (sc < 10 && mn < 10 && hr < 10) {
        h2.innerText = `0${hr}:0${mn}:0${sc}`
    } else if (sc < 10 && mn < 10 && hr > 10) {
        h2.innerText = `${hr}:0${mn}:0${sc}`
    } else if (sc > 10 && mn < 10 && hr < 10) {
        h2.innerText = `0${hr}:0${mn}:${sc}`
    } else if (sc < 10 && mn > 10 && hr < 10) {
        h2.innerText = `0${hr}:${mn}:0${sc}`
    } else if (sc < 10 && mn > 10 && hr > 10) {
        h2.innerText = `${hr}:${mn}:0${sc}`
    } else if (sc < 10 && mn > 10 && hr < 10) {
        h2.innerText = `${hr}:0${mn}:${sc}`
    } else if (sc > 10 && mn > 10 && hr < 10) {
        h2.innerText = `0${hr}:${mn}:${sc}`
    }
}
setInterval(counter, 1000)

const runBlock = () => {
    const block = document.querySelector(".block")
    const warp = document.querySelector(".warp")

    if (positionX < (warp.clientWidth - block.clientWidth + 2) && positionY < (warp.clientHeight - block.clientHeight + 2)) {
        positionX += 16
        block.style.left = positionX + "px"
        setTimeout(runBlock, 100)
    } else if (positionY < (warp.clientHeight - block.clientHeight) && positionX >= (warp.clientWidth - block.clientWidth)) {
        positionY += 16
        block.style.top = positionY + "px"
        setTimeout(runBlock, 100)
    } else if (positionY >= (warp.clientHeight - block.clientHeight) && positionX > 0) {
        positionX -= 16
        block.style.left = positionX + "px"
        setTimeout(runBlock, 100)
    } else if (positionY > 0 && positionX === 0) {
        const up = setInterval(() => {
            positionY -= 16
            block.style.top = positionY + "px"
            if (positionY === 0 && positionX === 0) {
                clearInterval(up)
                c++
                h3.innerText = c
                runBlock()
            }
        }, 100)
    }
}
runBlock()