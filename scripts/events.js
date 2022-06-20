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
  coffeeShopCard,
  darkThemeButton,
  lightThemeButton,
  forestControl,
  rainControl,
  coffeeShopControl,
  fireControl
} from './elements.js'


export default function Events({controls, timer, sounds, theme}) {
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

  forestControl.addEventListener('input', function() {
    sounds.adjustVolume(sounds.forestSound, forestControl.value)
  })

  rainButton.addEventListener('click', function() {
    controls.toggle(rainCard)
    sounds.playAudio(sounds.rainSound, rainCard)
  })

  rainControl.addEventListener('input', function() {
    sounds.adjustVolume(sounds.rainSound, rainControl.value)
  })

  coffeeShopButton.addEventListener('click', function() {
    controls.toggle(coffeeShopCard)
    sounds.playAudio(sounds.coffeeShopSound, coffeeShopCard)
  })

  coffeeShopControl.addEventListener('input', function() {
    sounds.adjustVolume(sounds.coffeeShopSound, coffeeShopControl.value)
  })

  fireButton.addEventListener('click', function() {
    controls.toggle(fireCard)
    sounds.playAudio(sounds.fireSound, fireCard)
  })

  fireControl.addEventListener('input', function() {
    sounds.adjustVolume(sounds.fireSound, fireControl.value)
  })

  lightThemeButton.addEventListener('click', function() {
    theme.toggle(lightThemeButton, darkThemeButton)
  })

  darkThemeButton.addEventListener('click', function() {
    theme.toggle(darkThemeButton, lightThemeButton)
  })
}