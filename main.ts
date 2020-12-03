input.onButtonPressed(Button.A, function () {
    zero = input.runningTime()
})
let sec = 0
let zero = 0
music.setVolume(7)
let time = 0
zero = 0
basic.forever(function () {
    time = input.runningTime() - zero
    sec = time / 1000
    basic.showNumber(Math.round(sec))
    music.playTone(523, music.beat(BeatFraction.Whole))
})
