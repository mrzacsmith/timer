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
  const display = seconds

  displayCountdown.textContent = display
}
