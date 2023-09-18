fetch("https://cataas.com/cat")
    .then(res => res.blob())
    .then(res => {
        const url = URL.createObjectURL(res)
        const img = document.createElement("img");
        img.src = url
    })
    .catch(err => {
        console.log(err)
    })

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => {
        const img = document.createElement("img");
        img.src = res.message
        content.appendChild(img)
    })
    .catch(err => {
         console.log(err)
    })


function imgdog(){
    document.getElementById("cachorro").src = "url";
}