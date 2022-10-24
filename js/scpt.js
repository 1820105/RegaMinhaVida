//const para = document.querySelector("p")
//fetch("http://127.0.0.1:8000/plants/1/?format=json")
//.then(Response => {
//    return Response.json()
//})
//.then(data => {
//    var advise = data.plantName
//    para.innerText = advise
//})


const url = "http://127.0.0.1:8000/plants/"
const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

// Get all posts
async function getAllPosts() {
    const response = await fetch(url);
        //console.log(response);   

    const data = await response.json();
        //console.log(data);
        //loadingElement.classList.add("hide");
    
    data.map((post)=> {
        const div = document.createElement("div")
        const plantName = document.createElement("h2")
        const soilMoisture = document.createElement("p")
        const airHumidity = document.createElement("a")

        plantName.innerText = post.plantName;
        soilMoisture.innerText = post.soilMoisture;
        airHumidity.innerText = post.airHumidity
        //link.setAttribute("href", `/post.html?id=${post.id}`)

        div.appendChild(plantName);
        div.appendChild(soilMoisture);
        div.appendChild(airHumidity);

        postsContainer.appendChild(div);

    })
}

getAllPosts();