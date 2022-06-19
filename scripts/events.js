import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddFiveMinutes,
  buttonLessFiveMinutes,
  forestButton,
  rainButton,
  fireButton,
  coffeeShopButton,
  forestCard,
  rainCard,
  fireCard,
  coffeeShopCard
} from './elements.js'


export default function Events({controls, timer, sounds}) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sounds.pressButton()
  })
  
  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })
  
  buttonStop.addEventListener('click', function () {
    timer.reset()
    controls.pause()
    sounds.pressButton()
  })
  
  buttonAddFiveMinutes.addEventListener('click', function () {
    timer.addFiveMinutes()
    sounds.pressButton()
  })
  
  buttonLessFiveMinutes.addEventListener('click', function () {
    timer.lessFiveMinutes()
    sounds.pressButton()
  })

  forestButton.addEventListener('click', function() {
    controls.toggle(forestCard)
    sounds.playAudio(sounds.forestSound, forestCard)
  })

  rainButton.addEventListener('click', function() {
    controls.toggle(rainCard)
    sounds.playAudio(sounds.rainSound, rainCard)
  })

  coffeeShopButton.addEventListener('click', function() {
    controls.toggle(coffeeShopCard)
    sounds.playAudio(sounds.coffeeShopSound, coffeeShopCard)
  })

  fireButton.addEventListener('click', function() {
    controls.toggle(fireCard)
    sounds.playAudio(sounds.fireSound, fireCard)
  })
}