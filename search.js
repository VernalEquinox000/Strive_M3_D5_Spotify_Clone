let searchModal = document.getElementById("search_modal");
searchModal.innerHTML = `<div class="modal fade bg-transparent" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    
    <div class="modal-body">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
              fill="currentColor" fill-rule="evenodd"></path>
          </svg></span>
        </div>
        <input id="search" type="text" class="form-control" placeholder="Search" aria-label="" aria-describedby="basic-addon1">
        </div>
    </div>
    
  </div>
</div>
</div>`;

const loadSearchModal = () => {
  let searchContainer = document.getElementById("load_search");
  searchContainer.setAttribute("data-toggle", "modal");
  searchContainer.setAttribute("data-target", "#searchModal");
};

const searchContainer = document.getElementById("load_search");
searchContainer.addEventListener("click", loadSearchModal);

const loadSearchResult = () => {
  let search = document.getElementById("search");
  console.log(search.value);
};

function queryResult(searchQuery = "", found = "") {
  return `
  <div class="row ">
    <div class="col-12">
      <h1 >
       ${found > 0 ? found : "No Search"} results found for '${searchQuery}'
      </h1>
    </div>
  </div>
  <div id="albums" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
    
  </div>
   `;
}

function returnAlbumCard(albumInfo) {
  return `
  <div class="col mb-4">

      <div class="card mx-auto mb-4 p-3 h-100" style="min-width:160px;" id='${albumInfo.album.id}' onclick=(goToAlbum(${albumInfo.album.id}))>
      <div>
          <img src="${albumInfo.album.cover}">
          <div class="play-btn rounded-pill"></div>
      </div>
      <div class="card-text">
          <span class="mt-3 d-inline-block text-light text-truncate" style="max-width: 100%;">
          <strong>${albumInfo.album.title}</strong>
      </div>
    </div>
              
    </div>`;
}

const headers = {
  "x-rapidapi-key": "7fdc40bd2cmsh7d59ae153879834p1eed5djsnc89fc67b0b36",
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
};

const search = function () {
  const searchQuery = document.getElementById("search").value;

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      found = [];

      found = data.data;
      console.log(found.length);
      const main = document.querySelector("#v-pills-home>div");

      main.innerHTML = queryResult(searchQuery, found.length);

      let albums = document.getElementById("albums");

      if (found.length > 0) {
        found.forEach((track) => {
          albums.innerHTML += returnAlbumCard(track);
        });
      }
    });
  searchQuery = "";
};

const goToAlbum = (id) => {
  window.open("album.html?id=" + id);
  console.log("openAlbum id_____________", id);
};

const searchButton = document.getElementById("search");
searchButton.addEventListener("change", search);
