console.log("hello");
// initialis the variables
let songindex = 0;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songitem = Array.from(document.getElementsByClassName('poster'));
let mastersongname = document.getElementById('mastersongname');
let songs = [
    { songname: "naina", filepath: "0.ogg" },
    { songname: "blank space", filepath: "1.ogg" },
    { songname: "galti se mistake", filepath: "2.ogg" },
    { songname: "pinga", filepath: "3.ogg" },
    { songname: "hawaijahaj", filepath: "4.ogg" },
    { songname: "kutu ma kutu", filepath: "5.ogg" },
    { songname: "galtisemistake", filepath: "6.ogg" },
    { songname: "pinga-bajirao mastani", filepath: "7.ogg" },
    { songname: "naina-dangal", filepath: "8.ogg" },
    { songname: "blankspace-taylor", filepath: "9.ogg" },
    { songname: "pinga-deepika", filepath: "10.ogg" },
    { songname: "pinga-priyanka", filepath: "11.ogg" }

]

let audioelement = new Audio("naina.ogg");
//listen to events
audioelement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);

    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

//handle play pause buttom
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle')
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle')
    }
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `${songindex}.ogg`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 11) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audioelement.src = `${songindex}.ogg`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audioelement.src = `${songindex}.ogg`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})



