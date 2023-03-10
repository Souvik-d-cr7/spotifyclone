console.log('Welcome to musify');
// Initialize Varriable
let songIndex = 0;
let AudioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Shayad - arijit singh", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kuch to Hai - arman malik", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ik vaari aa - arijit singh", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Thomkiya Thomkiya - akriti kakar", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tu banja gali benaras ki - asit tripathi", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tip Tip - Udit Narayan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Kaun tujhe - palak muchal", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Phir Kabhi - arijit singh", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jashne bahara - A.R Rahman", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tera Fitoor - arijit singh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

//audio element play

// Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime <= 0){
        AudioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        AudioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to event
AudioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    myprogressbar.value = progress;
})
// change the seekbar
myprogressbar.addEventListener('change',()=>{
    AudioElement.currentTime = (myprogressbar.value*AudioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        AudioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        AudioElement.currentTime = 0;
        gif.style.opacity = 1;
        AudioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    AudioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    AudioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})