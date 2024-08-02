const ACCESS_KEY = "uQLi1P6u_JhcRwgt5Lra9sHKWg-eTwVqtWR37zFmFjs";
const SECRET_KEY = "HF8vMM6gPFNS0FJguJFr19qjesq8J0M3VumWIRQDbKY";

document.querySelector('form').addEventListener('submit' , async function(event) {
    event.preventDefault9();
    const query = document.querySelector("#search").value;
    console.log({query});
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
    console.log({url})

    const response = await fetch(url);
    const data = await response.json();
    const images = data.results;
    let imageElements = '';

    for(let image of images) {
        const imageUrl = img.urls.regular;
        imageElements += `<img src="${imageUrl}" alt="">`;
        console.log({imageUrl});
    }
    document.querySelector('.images').innerHTML = imageElements;
    console.log({data});
} )