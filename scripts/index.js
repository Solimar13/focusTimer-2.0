import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import Sounds from './sounds.js'

import {
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
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.pause
})

const sounds = Sounds()

Events({ controls, timer, sounds })
