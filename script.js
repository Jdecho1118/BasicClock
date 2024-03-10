function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  // Get the clock element and set its text content
  const clockElement = document.getElementById('clock');
  clockElement.textContent = formattedTime;

  // Change background color
  changeBackgroundColor();
}

function changeBackgroundColor() {
  // Get a random color
  const randomColor = getRandomColor();

  // Apply the random color to the body background
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set up the interval for updating the clock
setInterval(updateClock, 1000);

// Initial call to updateClock
updateClock();
