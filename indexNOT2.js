async function loadSongs(artist) {
    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
        }
    })
    let songs = await response.json();
    return songs.data;
}


let artist = ["clash", "kraftwerk", "mars volta", "smiths", "tool", "zu"]



async function loadArtists() {
    let songsList = document.querySelector("#songs")
songsList.innerHTML=""

    artists.forEach(async artist => {
        let songs = await loadSongs(artist)
        songsList.innerHTML += songs.map(song =>
            `<li>$(song.title)</li>`).join("")
    })
}