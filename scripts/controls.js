export default function Controls({buttonPlay, buttonPause}) {
  function hideShowButtons(hideButton, showButton) {
    hideButton.classList.add('hide')
    showButton.classList.remove('hide')
  }

  function play() {
    hideShowButtons(buttonPlay, buttonPause)
  }

  function pause() {
    hideShowButtons(buttonPause, buttonPlay)
  }

  function toggle(card) {
    card.classList.toggle('active')
  }

  return {
    play,
    pause,
    toggle
  }
}
