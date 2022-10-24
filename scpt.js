const para = document.querySelector("p")
fetch("http://127.0.0.1:8000/plants/1/?format=json")
.then(Response => {
    return Response.json()
})
.then(data1 => {
    var advise = data1.plantName
    para.innerText = advise
})