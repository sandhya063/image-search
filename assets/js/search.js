import { ACCESS_KEY } from './constants.js';
import {setQuery} from './localstorage.js';


export default async function  searchImages(query) {
    setQuery(query);
    const now = new Date();
    const expires =  now.setTime(now.getTime() + (24 * 60 * 60 * 1000));

    document.cookie = `query=${query};expires=${new Date(expires)};path=/`;
    console.log({query});
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
    console.log({url})

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const images = data.results;
    let imageElements = '';
    for(let image of images) {
        const imageUrl = image.urls.regular;
        imageElements += `<img src="${imageUrl}" alt="">`; 
        console.log({imageUrl});
    }
    document.querySelector('.images').innerHTML = imageElements;
}