const URL = '';
fetch("http://127.0.0.1:8000/plants/?format=json")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    document.querySelector('#plantName').innerHTML = data.name
})