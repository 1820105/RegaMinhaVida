const para = document.querySelector("p")
fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json()
})
.then(data => {
    var advice = data.slip.advice
    para.innerText = advice
})