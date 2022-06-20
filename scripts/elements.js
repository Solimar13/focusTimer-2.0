const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddFiveMinutes = document.querySelector('.plus')
const buttonLessFiveMinutes = document.querySelector('.minus')

const forestCard = document.querySelector('.forest')
const rainCard = document.querySelector('.rain')
const coffeeShopCard = document.querySelector('.coffee-shop')
const fireCard = document.querySelector('.fire')

const forestButton = forestCard.querySelector('.cardButton')
const rainButton = rainCard.querySelector('.cardButton')
const coffeeShopButton = coffeeShopCard.querySelector('.cardButton')
const fireButton = fireCard.querySelector('.cardButton')

const lightThemeButton = document.querySelector('.light-theme')
const darkThemeButton = document.querySelector('.dark-theme')

const forestControl = document.querySelector('#forestControl')
const rainControl = document.querySelector('#rainControl')
const coffeeShopControl = document.querySelector('#coffeeShopControl')
const fireControl = document.querySelector('#fireControl')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddFiveMinutes,
  buttonLessFiveMinutes,
  forestCard,
  rainCard,
  fireCard,
  coffeeShopCard,
  forestButton,
  rainButton,
  fireButton,
  coffeeShopButton,
  lightThemeButton,
  darkThemeButton,
  forestControl,
  rainControl,
  coffeeShopControl,
  fireControl,
  minutesDisplay,
  secondsDisplay,
}