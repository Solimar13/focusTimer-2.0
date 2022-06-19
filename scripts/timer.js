import Sounds from './sounds.js'

export default function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes == undefined ? minutes : newMinutes
    seconds = seconds == undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = seconds == 0 && minutes == 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        updateDisplay()
        resetControls()
        Sounds().timeEnd()
        return
      }

      if (seconds == 0) {
        seconds = 2

        minutes--
      }

      updateDisplay(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function addFiveMinutes() {
    updateDisplay(
      Number(minutesDisplay.textContent) + 5,
      Number(secondsDisplay.textContent)
    )
  }

  function lessFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes > 5) {
      updateDisplay(minutes - 5, seconds)
    } else {
      updateDisplay(0, seconds)
    }
  }

  function reset() {
    clearTimeout(timerTimeOut)
    updateDisplay()
  }

  return {
    updateDisplay,
    countDown,
    hold,
    addFiveMinutes,
    lessFiveMinutes,
    reset
  }
}
