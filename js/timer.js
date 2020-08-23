let countdown
const displayCountdown = document.querySelector('.display_countdown')
const endTime = document.querySelector('.display_return-time')

const timer = (seconds) => {
  clearInterval(countdown)
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

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

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp)
  const hours = end.getHours()
  const mins = end.getMinutes()
  const adjustedHour = hours > 12 ? hours - 12 : hours
  const adjustedMin = mins > 9 ? mins : `0${mins}`

  const endTimeDisplay = `Be Back At ${adjustedHour}:${adjustedMin}`

  endTime.textContent = endTimeDisplay
}
