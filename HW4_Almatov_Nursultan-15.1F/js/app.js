const som = document.querySelector("#som")
const current = document.querySelector("#current")

const selCurrent = document.querySelector("#selectCur")

const convert = (elem, target, curr, isTrue) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            isTrue
                ? (target.value = (elem.value / response[curr.value]).toFixed(2))
                : (target.value = (elem.value * response[curr.value]).toFixed(2))
            elem.value === "" ? (target.value = "") : null
        })
    })
}

convert(som, current, selCurrent, 1)
convert(current, som, selCurrent, )
