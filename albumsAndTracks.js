class album {
  constructor(artist, album, albumDesc, releaseDate, genre, imageUrl, rating) {
    this.artist = artist;
    this.album = album;
    this.albumDesc = albumDesc;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}
let albums = [];
const addAlbum = function (album) {
  albums.push(album);
  localStorage.setItem("albums", JSON.stringify(albums));
};

class track {
  constructor(title, duration, album) {
    this.title = title;
    this.duration = duration;
    this.album = album;
  }
}

let tracks;
if (JSON.parse(localStorage.getItem("tracks")) !== null) {
  tracks = JSON.parse(localStorage.getItem("tracks"));
} else {
  tracks = [];
}

const addTrack = function (track) {
  if (
    JSON.parse(localStorage.getItem("tracks")) === null ||
    JSON.parse(localStorage.getItem("tracks")).length < 97
  ) {
    localStorage.setItem("tracks", JSON.stringify(tracks));
    tracks.push(track);
  } else {
    tracks.push(track);
  }
};

let playlists;
if (JSON.parse(localStorage.getItem("playlists")) !== null) {
  playlists = JSON.parse(localStorage.getItem("playlists"));
} else {
  playlists = [];
}

const addPlaylist = function (album) {
  playlists.push(album);
  localStorage.setItem("playlists", JSON.stringify(playlists));
};

let taylorSwift = new album(
  "Taylor Swift",
  "Folklore",
  "Folklore is the eighth studio album by American singer-songwriter Taylor Swift. It was a surprise album, released through Republic Records on July 24, 2020, eleven months after its predecessor, Lover.",
  "24 July 2020",
  "Pop Music",
  "images/album/Taylor_Swift_Folklore.png",
  "4"
);
addAlbum(taylorSwift);

let taylorSwift1 = new track("The 1", "3:31", "Folklore");
addTrack(taylorSwift1);
let taylorSwift2 = new track("Cardigan", "4:01", "Folklore");
addTrack(taylorSwift2);
let taylorSwift3 = new track(
  "The Last Great American Dynasty",
  "3:44",
  "Folklore"
);
addTrack(taylorSwift3);
let taylorSwift4 = new track("Exile", "4:46", "Folklore");
addTrack(taylorSwift4);
let taylorSwift5 = new track("My Tears Ricochet", "4:16", "Folklore");
addTrack(taylorSwift5);
let taylorSwift6 = new track("Mirrorball", "3:29", "Folklore");
addTrack(taylorSwift6);
let taylorSwift7 = new track("Seven", "3:29", "Folklore");
addTrack(taylorSwift7);
let taylorSwift8 = new track("August", "4:14", "Folklore");
addTrack(taylorSwift8);
let taylorSwift9 = new track("This is me trying", "3:16", "Folklore");
addTrack(taylorSwift9);
let taylorSwift10 = new track("Illicit Affairs", "3:23", "Folklore");
addTrack(taylorSwift10);
let taylorSwift11 = new track("Invisible String", "4:13", "Folklore");
addTrack(taylorSwift11);
let taylorSwift12 = new track("Mad Woman", "3:58", "Folklore");
addTrack(taylorSwift12);
let taylorSwift13 = new track("Epiphany", "4:50", "Folklore");
addTrack(taylorSwift13);
let taylorSwift14 = new track("Betty", "5:17", "Folklore");
addTrack(taylorSwift14);
let taylorSwift15 = new track("Peace", "5:51", "Folklore");
addTrack(taylorSwift15);
let taylorSwift16 = new track("Hoax", "3:41", "Folklore");
addTrack(taylorSwift16);

let tomPetty = new album(
  "Tom Petty",
  "Wildflowers",
  "Wildflowers is the second solo studio album by American musician Tom Petty, released on November 1, 1994. The album was the first released by Petty after signing a contract with Warner Bros. Records and the first of three albums produced by Rick Rubin.",
  "1 November 1994",
  "Rock and Roll",
  "images/album/Tom_Petty_Wildflowers.jpg",
  "4"
);
addAlbum(tomPetty);
let tomPetty1 = new track("Wildflowers", "3:14", "Wildflowers");
let tomPetty2 = new track("You Don't Know How It Feels", "4:49", "Wildflowers");
let tomPetty3 = new track("Time to Move On", "3:15", "Wildflowers");
let tomPetty4 = new track("You Wreck Me", "6:03", "Wildflowers");
let tomPetty5 = new track("It's Good to Be King", "5:11", "Wildflowers");
let tomPetty6 = new track("Only a Broken Heart", "4:29", "Wildflowers");
let tomPetty7 = new track("Honey Bee", "4:58", "Wildflowers");
let tomPetty8 = new track("Don't Fade on Me", "3:33", "Wildflowers");
let tomPetty9 = new track("Hard on Me", "3:47", "Wildflowers");
let tomPetty10 = new track("Cabin Down Below", "2:52", "Wildflowers");
let tomPetty11 = new track("To Find a Friend", "3:56", "Wildflowers");
let tomPetty12 = new track("A Higher Place", "3:57", "Wildflowers");
let tomPetty13 = new track("House in the Woods", "5:33", "Wildflowers");
let tomPetty14 = new track("Crawling Back to You", "5:06", "Wildflowers");
let tomPetty15 = new track("Wake Up Time", "5:20", "Wildflowers");
addTrack(tomPetty1);
addTrack(tomPetty2);
addTrack(tomPetty3);
addTrack(tomPetty4);
addTrack(tomPetty5);
addTrack(tomPetty6);
addTrack(tomPetty7);
addTrack(tomPetty8);
addTrack(tomPetty9);
addTrack(tomPetty10);
addTrack(tomPetty11);
addTrack(tomPetty12);
addTrack(tomPetty13);
addTrack(tomPetty14);
addTrack(tomPetty15);

let blackPink = new album(
  "The Album",
  "BlackPink",
  "The Album is the debut studio album by South Korean girl group Blackpink, released on October 2, 2020, by YG Entertainment and Interscope. Becoming available for pre-order on August 28, it was released nearly 18 months after Kill This Love. ",
  "2 October 2020",
  "K-pop",
  "images/album/blackpink.png",
  "4"
);

let blackPink1 = new track("How You Like That", "3:01", "BlackPink");
let blackPink2 = new track("Ice Cream", "2:56", "BlackPink");
let blackPink3 = new track("Pretty Savage", "3:19", "BlackPink");
let blackPink4 = new track("Bet You Wanna", "2:39", "BlackPink");
let blackPink5 = new track("Lovesick Girls", "3:13", "BlackPink");
let blackPink6 = new track("Crazy Over You", "2:42", "BlackPink");
let blackPink7 = new track("Love to Hate Me", "2:50", "BlackPink");
let blackPink8 = new track("You Never Know", "3:49", "BlackPink");

addAlbum(blackPink);
addTrack(blackPink1);
addTrack(blackPink2);
addTrack(blackPink3);
addTrack(blackPink4);
addTrack(blackPink5);
addTrack(blackPink6);
addTrack(blackPink7);
addTrack(blackPink8);

let tphFirst = new album(
  "Tom Petty & The Heartbreakers",
  "Tom Petty & The Heartbreakers",
  "Tom Petty and the Heartbreakers is the debut album by the band of the same name, released on November 9, 1976 by Shelter Records. The album was recorded and mixed at the Shelter Studio in Hollywood, California.",
  "9 November 1976",
  "Rock and roll",
  "images/album/tph1.jpg",
  "4"
);

addAlbum(tphFirst);
let tphFirst1 = new track(
  "Rockin'Around (With You)",
  "2:29",
  "Tom Petty & The Heartbreakers"
);
let tphFirst2 = new track("Breakdown", "2:43", "Tom Petty & The Heartbreakers");
let tphFirst3 = new track(
  "Hometown Blues",
  "2:14",
  "Tom Petty & The Heartbreakers"
);
let tphFirst4 = new track(
  "The Wild One, Forever",
  "3:03",
  "Tom Petty & The Heartbreakers"
);
let tphFirst5 = new track(
  "Anything That's Rock 'n' Roll",
  "2:24",
  "Tom Petty & The Heartbreakers"
);
let tphFirst6 = new track(
  "Strangered in the Night",
  "3:54",
  "Tom Petty & The Heartbreakers"
);
let tphFirst7 = new track(
  "Fooled Again (I Don't Like It)",
  "3:50",
  "Tom Petty & The Heartbreakers"
);
let tphFirst8 = new track(
  "Mystery Man",
  "3:03",
  "Tom Petty & The Heartbreakers"
);
let tphFirst9 = new track("Luna", "3:58", "Tom Petty & The Heartbreakers");
let tphFirst10 = new track(
  "American Girl",
  "3:34",
  "Tom Petty & The Heartbreakers"
);

addTrack(tphFirst1);
addTrack(tphFirst2);
addTrack(tphFirst3);
addTrack(tphFirst4);
addTrack(tphFirst5);
addTrack(tphFirst6);
addTrack(tphFirst7);
addTrack(tphFirst8);
addTrack(tphFirst9);
addTrack(tphFirst10);

let tphSecond = new album(
  "Tom Petty & The Heartbreakers",
  "You're Gonna Get It!",
  "You're Gonna Get It! is the second album by Tom Petty and the Heartbreakers, released in 1978. Originally, the album was to be titled Terminal Romance. It peaked at No. 23 on the Billboard Top LPs & Tapes chart in 1978.",
  "2 May 1978",
  "Rock and roll",
  "images/album/tph2.jpg",
  "3"
);

addAlbum(tphSecond);
let tphSecond1 = new track(
  "When the Time Comes",
  "2:47",
  "You're Gonna Get It!"
);
let tphSecond2 = new track(
  "You're Gonna Get It",
  "3:01",
  "You're Gonna Get It!"
);
let tphSecond3 = new track("Hurt", "3:16", "You're Gonna Get It!");
let tphSecond4 = new track("Magnolia", "3:03", "You're Gonna Get It!");
let tphSecond5 = new track(
  "Too Much Ain't Enough",
  "2:56",
  "You're Gonna Get It!"
);
let tphSecond6 = new track("I Need to Know", "2:24", "You're Gonna Get It!");
let tphSecond7 = new track(
  "Listen to Her Heart",
  "3:04",
  "You're Gonna Get It!"
);
let tphSecond8 = new track(
  "No Second Thoughts",
  "2:41",
  "You're Gonna Get It!"
);
let tphSecond9 = new track("Restless", "3.24", "You're Gonna Get It!");
let tphSecond10 = new track(
  "Baby's a Rock'n'Roller",
  "2:53",
  "You're Gonna Get It!"
);

addTrack(tphSecond1);
addTrack(tphSecond2);
addTrack(tphSecond3);
addTrack(tphSecond4);
addTrack(tphSecond5);
addTrack(tphSecond6);
addTrack(tphSecond7);
addTrack(tphSecond8);
addTrack(tphSecond9);
addTrack(tphSecond10);

let tphThird = new album(
  "Tom Petty & The Heartbreakers",
  "Damn The Torpedoes",
  "Damn the Torpedoes is the third studio album by Tom Petty and the Heartbreakers, released on October 19, 1979. This was the first of three Petty albums originally released by the Backstreet Records label, distributed by MCA Records. It built on the commercial success and critical acclaim of his two previous albums and reached #2 on the Billboard album chart.",
  "19 October 1979",
  "Rock and roll",
  "images/album/tph3.jpg",
  "5"
);

addAlbum(tphThird);
let tphThird1 = new track("Refugee", "3:22", "Damn The Torpedoes");
let tphThird2 = new track("Here Comes My Girl", "4:27", "Damn The Torpedoes");
let tphThird3 = new track("Even The Losers", "3:59", "Damn The Torpedoes");
let tphThird4 = new track(
  "Shadow of a Doubt (A Complex Kid)",
  "4:25",
  "Damn The Torpedoes"
);
let tphThird5 = new track("Century City", "3:45", "Damn The Torpedoes");
let tphThird6 = new track(
  "Don't Do Me Like That",
  "2:44",
  "Damn The Torpedoes"
);
let tphThird7 = new track("You Tell Me", "4:35", "Damn The Torpedoes");
let tphThird8 = new track(
  "What Are You Doin' in My Life",
  "3:27",
  "Damn The Torpedoes"
);
let tphThird9 = new track("Louisiana Rain", "5:54", "Damn The Torpedoes");

addTrack(tphThird1);
addTrack(tphThird2);
addTrack(tphThird3);
addTrack(tphThird4);
addTrack(tphThird5);
addTrack(tphThird6);
addTrack(tphThird7);
addTrack(tphThird8);
addTrack(tphThird9);

let tphFourth = new album(
  "Tom Petty & The Heartbreakers",
  "Hard Promises",
  "Hard Promises is the fourth studio album by Tom Petty and the Heartbreakers released on May 5, 1981 on Backstreet Records.",
  "19 October 1979",
  "Rock and roll",
  "images/album/tph4.jpg",
  "4"
);

addAlbum(tphFourth);
let tphFourth1 = new track("The Waiting", "3:58", "Hard Promises");
let tphFourth2 = new track(
  "A Woman in Love (It's Not Me)",
  "4:22",
  "Hard Promises"
);
let tphFourth3 = new track("Nightwatchman", "3:59", "Hard Promises");
let tphFourth4 = new track("Something Big", "4:44", "Hard Promises");
let tphFourth5 = new track("Kings Road", "3:27", "Hard Promises");
let tphFourth6 = new track("Letting You Go", "3:24", "Hard Promises");
let tphFourth7 = new track("A Thing About You", "3:33", "Hard Promises");
let tphFourth8 = new track("Insider", "4:23", "Hard Promises");
let tphFourth9 = new track("The Criminal Kind", "4:00", "Hard Promises");
let tphFourth10 = new track(
  "You Can Still Change Your Mind",
  "4:15",
  "Hard Promises"
);

addTrack(tphFourth1);
addTrack(tphFourth2);
addTrack(tphFourth3);
addTrack(tphFourth4);
addTrack(tphFourth5);
addTrack(tphFourth6);
addTrack(tphFourth7);
addTrack(tphFourth8);
addTrack(tphFourth9);
addTrack(tphFourth10);

let tphFifth = new album(
  "Tom Petty & The Heartbreakers",
  "Long After Dark",
  "Long After Dark is the fifth studio album by American rock band Tom Petty and the Heartbreakers, released November 2, 1982 on Backstreet Records. Notable for the MTV hit You Got Lucky, the album was also the band's first to feature Howie Epstein on bass and harmony vocals. Epstein's vocals are prevalent throughout the album and from that point on, became an integral part of the Heartbreakers' sound.",
  "19 October 1979",
  "Rock and roll",
  "images/album/TPH5.jpg",
  "3"
);

addAlbum(tphFifth);
let tphFifth1 = new track("A One Story Town", "3:06", "Long After Dark");
let tphFifth2 = new track("You Got Lucky", "3:37", "Long After Dark");
let tphFifth3 = new track("Deliver Me", "3:28", "Long After Dark");
let tphFifth4 = new track("Change of Heart", "3:18", "Long After Dark");
let tphFifth5 = new track("Finding Out", "3:36", "Long After Dark");
let tphFifth6 = new track("We Stand a Chance", "3:38", "Long After Dark");
let tphFifth7 = new track("Straight into Darkness", "3:49", "Long After Dark");
let tphFifth8 = new track("The Same Old You", "3:31", "Long After Dark");
let tphFifth9 = new track("Between Two Worlds", "5:12", "Long After Dark");
let tphFifth10 = new track("A Wasted Life", "4:35", "Long After Dark");

addTrack(tphFifth1);
addTrack(tphFifth2);
addTrack(tphFifth3);
addTrack(tphFifth4);
addTrack(tphFifth5);
addTrack(tphFifth6);
addTrack(tphFifth7);
addTrack(tphFifth8);
addTrack(tphFifth9);
addTrack(tphFifth10);

let myTurn = new album(
  "Lil Baby",
  "My Turn",
  "My Turn is the second studio album by American rapper Lil Baby. It was released on February 28, 2020, by Capitol Records, Motown Records, Wolfpack Music Group, and Quality Control Music.",
  "28 February 2020",
  "Hip-Hop/Rap",
  "images/album/myTurn.png",
  "3"
);

addAlbum(myTurn);
let myTurn1 = new track("Get Ugly", "2:41", "My Turn");
let myTurn2 = new track("Heatin Up", "2:59", "My Turn");
let myTurn3 = new track("How", "3:28", "My Turn");
let myTurn4 = new track("Grace", "3:18", "My Turn");
let myTurn5 = new track("Woah", "3:36", "My Turn");
let myTurn6 = new track("Live of My Closet", "3:38", "My Turn");
let myTurn7 = new track("Same Thing", "3:49", "My Turn");
let myTurn8 = new track("Emotionally Scarred", "3:31", "My Turn");
let myTurn9 = new track("Commercial", "5:12", "My Turn");
let myTurn10 = new track("Forever", "4:35", "My Turn");

addTrack(myTurn1);
addTrack(myTurn2);
addTrack(myTurn3);
addTrack(myTurn4);
addTrack(myTurn5);
addTrack(myTurn6);
addTrack(myTurn7);
addTrack(myTurn8);
addTrack(myTurn9);
addTrack(myTurn10);
