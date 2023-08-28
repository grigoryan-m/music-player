// Array of all tracks.

const tracks = [
    {
        name: 'Улет',
        author: 'Oxxxymiron',
        cover: 'src/01-bnu-oxxxy/cover.png',
        track: 'src/01-bnu-oxxxy/track.mp3'
    },
    {
        name: 'Confutatis',
        author: 'Mozart',
        cover: 'src/02-confutatis-mozart/cover.jpg',
        track: 'src/02-confutatis-mozart/track.mp3'
    },
    {
        name: "It's just a burning memory",
        author: 'Caretaker',
        cover: 'src/03-eatoft-caretaker/cover.jpg',
        track: 'src/03-eatoft-caretaker/track.mp3'
    }
];

let current_track = 0;

// Wait until DOM is loaded

document.addEventListener("DOMContentLoaded", (event)=>{
    // Get all needed DOM elements

    const bg = document.getElementsByClassName("bg-image")[0];
    const cover = document.getElementsByClassName("cover")[0];
    const title = document.getElementsByClassName("title")[0];
    const author = document.getElementsByClassName("author")[0];

    // Get info on current track after DOM is loaded

    get_info(bg, cover, title, author); // Pass variables as parameters
    
    // Run the function if next button is clicked
    const nextButton = document.getElementsByClassName("next")[0];
    nextButton.addEventListener("click", () => {
        if(current_track != tracks.length - 1){ // If it's not last track...
            current_track++; // ...go to next track...
            get_info(bg, cover, title, author); // ...and get info about it.
        }
    });
    
    // Run the function if prev button is clicked
    const prevButton = document.getElementsByClassName("prev")[0];
    prevButton.addEventListener("click", ()=>{
        if(current_track != 0){ // If it's not first track...
            current_track--; // ...go to previous track...
            get_info(bg, cover, title, author); // ...and get info about it.
        }
    });
});

// Function that gets info about current track.

function get_info(bgElement, coverElement, titleElement, authorElement){
    coverElement.src = tracks[current_track].cover; // Change the cover
    bgElement.style.backgroundImage = `url(${tracks[current_track].cover})`; // Change background of the page
    titleElement.innerText = tracks[current_track].name; // Change the title of the track
    authorElement.innerText = tracks[current_track].author; // Change author of the track
}