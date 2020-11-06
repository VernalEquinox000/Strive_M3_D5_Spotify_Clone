const getArtist = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/13", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((artistObj) => {
      console.log(artistObj);
      let jumbotronEl = document.createElement("div");
      jumbotronEl.setAttribute("id", "jumbotron");
      jumbotronEl.classList.add("container-fluid");
      jumbotronEl.classList.add("black-bg");
      jumbotronEl.style.cssText = `background: url('${artistObj.picture_xl}');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position-y: 20%`;
      document.querySelector(".jumbo-contain").appendChild(jumbotronEl);
      jumbotronEl.innerHTML = `
              
                  <div class="container py-5">
                  <div class="text-container">
                      <h1 class="mt-5">${artistObj.name}</h1>
                      <h6 class="text-primary">${artistObj.nb_fan} listeners</h6>
                      
                  </div>
                  </div>
              </div>
        `;
    })

    .catch((err) => {
      console.error(err);
    });
};

const trackList = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/119606", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((trackOjb) => {
      console.log(trackOjb);
      let tableEl = document.createElement("table");
      tableEl.classList.add(
        "table",
        "table-borderless",
        "tale-hover",
        "table-dark"
      );
      tableEl.style.minWidth = "500px";
      document.querySelector(".table-contain").appendChild(tableEl);

      tableEl.innerHTML = `
            <thead>
            <tr>
                <th scope="col">Play</th>
                <th scope="col">Title</th>
                <th scope="col">Album</th>
                
                <th scope="col"><i class="far fa-clock"></i></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row"><i class="fas fa-play"></i></th>
                <td>${trackOjb.tracks.data[2].title}</td>
                <td>${trackOjb.title}</td>
                
                <td>${trackOjb.tracks.data[2].duration} Sec</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row"><i class="fas fa-play"></i></th>
                <td>${trackOjb.tracks.data[3].title}</td>
                <td>${trackOjb.title}</td>
                
                <td>${trackOjb.tracks.data[3].duration} Sec</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row"><i class="fas fa-play"></i></th>
                <td>${trackOjb.tracks.data[6].title}</td>
                <td>${trackOjb.title}</td>
                
                <td>${trackOjb.tracks.data[6].duration} Sec</td>
                <td></td>
            </tr>
            </tbody>
    `;
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAlbums = () => {
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
      let card = document.querySelector("h2+div.card.mb-3");
      card.innerHTML = `
            <div class="row no-gutters">
                        <div class="col-4">
                            <img src="${albumObj.data[1].album.cover}" class="card-img" alt="...">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                            <div class="card-text">
                                <span class="d-inline-block text-truncate" style="max-width: 100%;">${albumObj.data[0].artist.name}</strong><br>
                                ${albumObj.data[1].album.title}- Album</span>
                            </div>
                            </div>
                        </div>
                        </div>
      `;

      albumObj.data.forEach((element) => {
        let divElement = document.createElement("div");
        divElement.classList.add("col");
        divElement.classList.add("mb-4");
        document.querySelectorAll(".row.row-cols-1")[0].appendChild(divElement);
        divElement.innerHTML = `
                <div class="col mb-4">
                <div class="card mx-auto mb-4 p-3 h-100" style="min-width:160px;">
                <div>
                    <img src="${element.album.cover}">
                    <div class="play-btn rounded-pill"></div>
                </div>
                <div class="card-text">
                    <span class="mt-3 d-inline-block text-truncate" style="max-width: 100%;">
                    <strong>${element.album.title}</strong>
                </div>
                </div>
            </div>      
        `;
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

getArtist();

getAlbums();

trackList();
