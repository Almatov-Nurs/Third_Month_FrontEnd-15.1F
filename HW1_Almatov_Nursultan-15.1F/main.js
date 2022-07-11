const trueINN = (inn) => {
    const regExp_1 = /1/
    const regExp_0 = /0/
    if (regExp_1.test(inn[0])) {
        if (inn.length === 14) {
            if (inn.match(/\d{14}/)) {
                alert("инн принят")
            } else {
                alert("инн не принят, только цифры")
            }
        } else {
            alert("инн не принят, должно быть 14 цифр")
        }
    } else if (regExp_0.test(inn[0])) {
        if (inn.length === 14) {
            if (inn.match(/\d{14}/)) {
                alert("инн принят")
            } else {
                alert("инн не принят, только цифры")
            }
        } else {
            alert("инн не принят, должно быть 14 цифр")
        }
    } else {
        alert("инн не принят")
    }
}

let INN = prompt("введите ИНН:")

trueINN(INN)

const button = document.getElementById("btn")

let positionX = 0
let positionXR = 0

let positionY = 0

button.addEventListener("click", () => {
    const warp = document.querySelector(".warp")
    const block = document.querySelector(".block")

    const runBlockToLeft = () => {
        if (positionX < (warp.clientWidth - block.clientWidth)) {
            positionX += 16
            block.style.left = positionX + "px"
            console.log(`left: ${positionX}`)
            runBlockToLeft()
        }
    }
    const runBlockToDown = () => {
        if (positionY < (warp.clientHeight - block.clientHeight)) {
            positionY += 16
            block.style.top = positionY + "px"
            console.log(`top: ${positionY}`)
            runBlockToDown()
        }
    }
    const runBlockToRight = () => {
        if (positionXR < positionX) {
            positionXR += 16
            block.style.left = `${positionX - positionXR}px`
            console.log(`right: ${positionXR}`)
            runBlockToRight()
        }
    }
    const runBlockToUp = () => {
        if (positionY > 0) {
            positionY -= 16
            positionX -= 16
            positionXR -= 16
            block.style.left = positionX + "px"
            block.style.top = positionY + "px"
            console.log(`top: ${positionY}`)
            runBlockToUp()
        }
    }
    if (positionX < (warp.clientWidth - block.clientWidth)) {
        runBlockToLeft()
    } else if (positionXR >= (warp.clientWidth - block.clientWidth)) {
        runBlockToUp()
    } else if (positionY >= (warp.clientHeight - block.clientHeight)) {
        runBlockToRight()
    } else if (positionX >= (warp.clientWidth - block.clientWidth)) {
        runBlockToDown()
    }
})