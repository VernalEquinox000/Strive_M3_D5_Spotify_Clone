const populateAlbums = function () {
  let albumDiv = document.querySelector("#v-pills-home>div");

  // ROW TITLE
  let rowTitle = document.createTextNode("#TGIFRIDAY");
  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);

  /* response = fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "8922e7eb38msha406b3662407a30p14661djsn13118198de68"
    }
  })
    .then(response => response.json()).then((songs) => 
      let songs = response.data
      songs.foreach(element => { */
  
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((albumObj) => {
      console.log(albumObj);
      
      albumObj.data.forEach((element) => {
        let divElement = document.createElement("div");
        divElement.classList.add("col");
        divElement.classList.add("mb-4");
        document.querySelectorAll(".row.row-cols-1")[0].appendChild(divElement);

        divElement.innerHTML =
          `<div class="col mb-4">
                <div class="card mx-auto mb-4 p-3 h-100" style="min-width:160px;" id='${element.album.id}' onclick=(openAlbum(${element.album.id}))>
                <div>
                    <img src="${element.album.cover}">
                    <div class="play-btn rounded-pill"></div>
                </div>
                <div class="card-text">
                    <span class="mt-3 d-inline-block text-truncate" style="max-width: 100%;">
                    <strong>${element.album.title}</strong>
                </div>
                </div>
            </div>`
      })
    })
}
  
const openAlbum = (id) => {
  window.open("album.html?id=" + id);
  console.log("openAlbum id_____________", id);
};




/*         let albumCol = document.createElement("div");
        albumCol.classList.add("col");
        albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a href="album.html?${element.album.title}"
                                ><img src="${element.album.cover_big}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${element.album.title}</strong></h6>
                          </div>`;
        albumRow.appendChild(albumCol);
      )
      })
  
    })
}
 */





  /* part to change
  albumsLocal = JSON.parse(localStorage.getItem("albums"));
  for (let i = 0; i < albumsLocal.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                              <a href="album.html?${albumsLocal[i].album}"
                                ><img src="${albumsLocal[i].imageUrl}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${albumsLocal[i].album}</strong></h6>
                          </div>`;
    albumRow.appendChild(albumCol);
  } */




//////////////////////////////////////////////////////////////////////////////////
/* const populateLibrary = function () {
  let albumDiv = document.querySelector("#v-pills-library>div");
  // ROW TITLE
  let rowTitle;
  if (playlists.length === 0) {
    rowTitle = document.createTextNode("#YOUR PLAYLIST IS EMPTY");
  } else {
    rowTitle = document.createTextNode("#YOUR PLAYLIST");
  }

  let rowTitleDiv = document.createElement("div");
  rowTitleDiv.classList.add(
    "row",
    "row-cols-6",
    "row-cols-md-6",
    "row-cols-lg-6",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(rowTitleDiv);
  let rowTitleCol = document.createElement("div");
  rowTitleCol.classList.add("col");
  rowTitleDiv.appendChild(rowTitleCol);
  let rowTitleH1 = document.createElement("h1");
  rowTitleH1.appendChild(rowTitle);
  rowTitleCol.appendChild(rowTitleH1);

  //ALBUM ROW
  let albumRow = document.createElement("div");
  albumRow.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "row-cols-xl-6"
  );
  albumDiv.appendChild(albumRow);
  for (let i = 0; i < playlists.length; i++) {
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML = `<div class="card mx-auto" style="width: 15 rem">
                                <a href="album.html?${playlists[i].album}"
                                  ><img src="${playlists[i].imageUrl}" class="card-img-top" alt="..."
                                />
                                <div class="play-btn rounded-pill"></div>
                                </a>
                              </div>
                              <h6 class="card-title"><strong>${playlists[i].album}</strong></h6>
                            </div>`;
    albumRow.appendChild(albumCol);
  }
};

const addPlayList = function () {
  let artist = document.querySelector("#inputArtist").value;
  let playlistName = document.querySelector("#inputAlbum").value;
  let desc = document.querySelector("#inputDesc").value;
  let genre = document.querySelector("#inputGenre").value;
  let date = document.querySelector("#inputDate").value;
  let rating = document.querySelector("#inputRating").value;
  let image = document.querySelector("#inputFile").value;
  let url = "images/album/" + image.slice(12);
  console.log(image.slice(12));
  let newAlbum = new album(
    artist,
    playlistName,
    desc,
    date,
    genre,
    url,
    rating
  );
  addPlaylist(newAlbum);
  location.reload();
}; */
populateAlbums();
/* populateLibrary(); */
