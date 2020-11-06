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

function returnCard(songInfo) {
  return `
      <div class="col text-center" id=${songInfo.id}>
        <a href="/album_page.html?id=${songInfo.album.id}">
          <img class="img-fluid" src=${songInfo.album.cover_medium} alt="1" />
        </a>
        <p>
          <a href="/album_page.html?id=${songInfo.album.id}">
            Album: "${
              songInfo.album.title.length < 16
                ? `${songInfo.album.title}`
                : `${songInfo.album.title.substring(0, 16)}...`
            }"<br>
          </a>
          <a href="/artist_page.html?id=${songInfo.artist.id}">
            Artist: ${songInfo.artist.name}
          </a>
        </p>
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
      const main = document.getElementById("v-pills-tabContent");
      main.innerHTML = "";
      found = [];

      found = data.data;

      if (found.length > 0) {
        found.forEach((track) => {
          main.innerHTML += returnCard(track);
        });
      }
    });
};

const searchButton = document.getElementById("search");
searchButton.addEventListener("change", search);
// Targeting individual pages
