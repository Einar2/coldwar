let btn_play = document.querySelector('.btn_play')
let play_img = document.querySelector('.btn_play img')
let audio = true
let play = false


let btn_audio = document.querySelector('.btn_audio')
let audio_img = document.querySelector('.btn_audio img')

let back_video = document.querySelector('.bv')


btn_play.addEventListener('click', () => {
    if(play === false){
        back_video.pause()
        play_img.src = 'img/pause.png'
        play = true
    }
    else{
        back_video.play()
        play_img.src = 'img/play.png'
        play = false
    }
})



// audio



let aud = new Audio('./audio/main.mp3')




btn_audio.addEventListener('click', () => {
    if(audio === false){
        audio_img.src = 'img/no_audio.png'
        audio = true
        aud.pause()
    }
    else{
        aud.play()
        audio_img.src = 'img/audio.png'
        audio = false
    }
})











