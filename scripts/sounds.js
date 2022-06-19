export default function() {
  const buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')

  const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

  const forestSound = new Audio('../audios/forest.wav')
  const rainSound = new Audio('../audios/rain.wav')
  const coffeeShopSound = new Audio('../audios/coffee-shop.wav')
  const fireSound = new Audio('../audios/fire.wav')

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function playAudio(sound, card) {
    sound.loop = true
    let isActive = card.classList.contains('active')
    isActive === false ? sound.pause() : sound.play() 
  }

  function forestPlay() {
    forestSound.play()
  }

  function forestPause() {
    forestSound.pause()
  }

  function rainPlay() {
    rainSound.play()
  }

  function coffeeShopPlay() {
    coffeeShopSound.play()
  }

  function firePlay() {
    fireSound.play()
  }

  return {
    pressButton,
    timeEnd,
    playAudio,
    forestSound,
    rainSound,
    coffeeShopSound,
    fireSound
  }
}
