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
  }
};

const populateLibrary = function () {
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
};
populateAlbums();
populateLibrary();
