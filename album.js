const queryString = window.location.search;
const queryAlbum = queryString.slice(1);
console.log(JSON.parse(localStorage.getItem("tracks")));
tracks = JSON.parse(localStorage.getItem("tracks"));
albums = JSON.parse(localStorage.getItem("albums"));

let clickedAlbum = decodeURI(queryAlbum);
for (let i = 0; i < albums.length; i++) {
  if (albums[i].album === clickedAlbum) {
    clickedAlbum = albums[i];
  }
}
if (clickedAlbum.album === undefined) {
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].album === clickedAlbum) {
      clickedAlbum = playlists[i];
    }
  }
}
console.log(clickedAlbum);
let albumTitle = document.querySelector("#albumTitle");
albumTitle.innerText = clickedAlbum.album;
let albumDesc = document.querySelector("#albumDesc");
albumDesc.innerText = clickedAlbum.albumDesc;
let albumImg = document.querySelector("#albumImg");
albumImg.setAttribute("src", clickedAlbum.imageUrl);

let albumTrack = [];
for (let i = 0; i < tracks.length; i++) {
  if (tracks[i].album === clickedAlbum.album) {
    albumTrack.push(tracks[i]);
  }
}
console.log(albumTrack);
let tbody = document.querySelector("tbody");
for (let i = 0; i < albumTrack.length; i++) {
  let tr = document.createElement("tr");
  tr.innerHTML = `<th scope="row">${i + 1}</th>
                    <td>
                        <div class="container">
                        <div><strong>${albumTrack[i].title}</strong></div>
                        <div><a href="artist.html">${
                          clickedAlbum.artist
                        }</a></div>
                        </div>
                    </td>
                    <td>${albumTrack[i].album}</td>
                    <td>3 days ago</td>
                    <td>${albumTrack[i].duration}</td>
                    <td><a type="button" onclick="removeTrack(this)">Remove</a></td>`;
  tbody.appendChild(tr);
}
let lastTr = document.createElement("tr");
lastTr.innerHTML = document.createElement("tr");
lastTr.innerHTML = `<th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Add Track</button></td>
                  <td></td>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title text-dark" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body text-dark">
                          <form>
                          <div class="form-group row">
                            <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputTitle">
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="inputDuration" class="col-sm-2 col-form-label">Duration</label>
                            <div class="col-sm-10">
                              <input type="time" class="form-control" id="inputDuration">
                            </div>
                          </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" onclick='addNewTrack()' data-dismiss="modal">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  `;

tbody.appendChild(lastTr);

const addNewTrack = function () {
  let lastRow = tbody.querySelector("tr:nth-last-of-type(2)");

  let newListTr = document.createElement("tr");
  let titleInput = document.querySelector("#inputTitle");
  let durationInput = document.querySelector("#inputDuration");
  newListTr.innerHTML = `<th scope="row">${albumTrack.length + 1}</th>
                          <td>
                              <div class="container">
                              <div><strong>${titleInput.value}</strong></div>
                              <div>${clickedAlbum.artist}</div>
                              </div>
                          </td>
                          <td>${clickedAlbum.album}</td>
                          <td>3 days ago</td>
                          <td>${durationInput.value}</td>
                          <td><a type="button" onclick="removeTrack(this)">Remove</a></td>`;
  if (lastRow === null) {
    lastRow = document.querySelector("tbody");
    lastRow.classList.add("animate");
    lastRow.classList.add("fadeIn");
    setTimeout(function () {
      lastRow.appendChild(newListTr);
    }, 2500);
  } else {
    lastRow.classList.add("animate");
    lastRow.classList.add("fadeIn");
    setTimeout(function () {
      lastRow.insertAdjacentElement("afterend", newListTr);
    }, 2500);
  }

  tracks.push(
    new track(titleInput.value, durationInput.value, clickedAlbum.album)
  );
  localStorage.setItem("tracks", JSON.stringify(tracks));
  location.reload();
  console.log(lastRow);
};

const removeTrack = function (e) {
  let row = e.parentElement.parentElement;
  row.classList.add("animate");
  row.classList.add("fadeOut");
  let selectedTrack = row.querySelector("strong");
  let tracks = JSON.parse(localStorage.getItem("tracks"));
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].title === selectedTrack.innerText) {
      tracks.splice(i, 1);
    }
  }
  localStorage.setItem("tracks", JSON.stringify(tracks));
  setTimeout(function () {
    row.remove();
  }, 2500);
};
