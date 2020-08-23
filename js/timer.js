let countdown
const displayCountdown = document.querySelector('.display_countdown')

const timer = (seconds) => {
  const now = Date.now()
  const then = now + seconds * 1000
  // console.log(now, then)
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft <= 0) {
      clearInterval(countdown)
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const secsRemaining = seconds % 60
  const display =
    secsRemaining > 9
      ? `${minutes}:${secsRemaining}`
      : `${minutes}:0${secsRemaining}`

  displayCountdown.textContent = display
}
