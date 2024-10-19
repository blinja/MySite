document.addEventListener('DOMContentLoaded', function() {
  const greetings = ["Hi,", "Hola,", "Bonjour,", "Hallo,", "Ciao,", "Привет,", "こんにちは,"];
  const finalGreeting = "Hi,";
  const nameText = "~ I am Euler Katwimuke";
  const welcomeText = "~ Welcome to My Portfolio";
  const greetingElement = document.getElementById('greeting');
  const nameElement = document.getElementById('name');
  const welcomeElement = document.getElementById('welcome');

  // Function to animate greeting text
  function animateGreeting(greetings, element, delay) {
      let index = 0;
      const interval = setInterval(() => {
          element.textContent = greetings[index]; // Set the current greeting
          index++;

          // Once all greetings have been displayed, stop the interval
          if (index >= greetings.length) {
              clearInterval(interval);
              // Settle on the final greeting
              setTimeout(() => {
                  element.textContent = finalGreeting;
                  element.classList.add('show'); // Optional: Add a class for additional effects
              }, delay); // Settle delay before showing final greeting
          }
      }, 500); // Change greeting every 500ms
  }

  // Animate greeting text first
  animateGreeting(greetings, greetingElement, 500); // 500ms delay before final greeting

  // Increase pause before animating name text
  const pauseBeforeName = 1000; // Longer pause before name

  // Animate name text after the pause
  setTimeout(() => {
      animateText(nameText, nameElement, 400); // 400ms delay for name text
  }, (greetings.length * 500) + pauseBeforeName); // Start after greeting text and pause

  // Animate welcome text after the name with a longer pause
  const pauseBeforeWelcome = 500; // Pause before welcome text
  setTimeout(() => {
      animateText(welcomeText, welcomeElement, 350); // 350ms delay for welcome text
  }, (greetings.length * 500) + pauseBeforeName + (nameText.split(" ").length * 400) + pauseBeforeWelcome); // Start after name and pause

  // Reuse existing animateText function for name and welcome text
  function animateText(text, element, delay, additionalPause = 0) {
      const words = text.split(" ");
      element.innerHTML = ""; // Clear the element

      // Use a timeout for each word
      words.forEach((word, index) => {
          const span = document.createElement('span');
          span.className = 'animated-word';
          span.textContent = word; // Use textContent to avoid HTML issues
          element.appendChild(span);

          // Add space after each word, except the last one
          if (index < words.length - 1) {
              const space = document.createElement('span');
              space.innerHTML = '&nbsp;'; // Create a non-breaking space
              element.appendChild(space);
          }

          // Set a timeout for each word to animate
          setTimeout(() => {
              span.classList.add('show');
          }, delay * index + additionalPause); // Add the additional pause to all words
      });

      // Add additional pause after the last word if specified
      setTimeout(() => {
          element.innerHTML += ''; // Trigger reflow to keep it visible
      }, delay * words.length + additionalPause);
  }
});



// Create and append the custom cursor element
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Update the position of the custom cursor based on mouse movement
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

// Ensure cursor enlarges and changes color when hovering over clickable elements
document.querySelectorAll('button, a, input[type="button"], input[type="submit"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    customCursor.style.transform = 'scale(1.3)';
    customCursor.style.backgroundColor = '#A875A8';
  });
  el.addEventListener('mouseleave', () => {
    customCursor.style.transform = 'scale(1)';
    customCursor.style.backgroundColor = '#C8A2C8';
  });
});

// Add hover effect to .app icons for cursor enlargement
document.querySelectorAll('.app').forEach(el => {
  el.addEventListener('mouseenter', () => {
    customCursor.style.transform = 'scale(1.3)';
    customCursor.style.backgroundColor = '#A875A8';
  });
  el.addEventListener('mouseleave', () => {
    customCursor.style.transform = 'scale(1)';
    customCursor.style.backgroundColor = '#C8A2C8';
  });
});

// Add hover effect to .project elements for cursor enlargement
document.querySelectorAll('.project').forEach(el => {
  el.addEventListener('mouseenter', () => {
    customCursor.style.transform = 'scale(1.3)';
    customCursor.style.backgroundColor = '#A875A8';
  });
  el.addEventListener('mouseleave', () => {
    customCursor.style.transform = 'scale(1)';
    customCursor.style.backgroundColor = '#C8A2C8';
  });
});

// Add hover effect to .menu elements for cursor enlargement
document.querySelectorAll('.menu').forEach(el => {
  el.addEventListener('mouseenter', () => {
    customCursor.style.transform = 'scale(1.3)';
    customCursor.style.backgroundColor = '#A875A8';
  });
  el.addEventListener('mouseleave', () => {
    customCursor.style.transform = 'scale(1)';
    customCursor.style.backgroundColor = '#C8A2C8';
  });
});

function toggleMenu() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href'); // Get the target section id
    const targetSection = document.querySelector(targetId); // Get the target section

    // Smooth scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close the dropdown menu after clicking
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'none';
  });
});


function openApp(app) {
  const appContent = document.getElementById("app-content");
  appContent.innerHTML = ''; // Clear previous content

  if (app === 'tictactoe') {
    startTicTacToe(appContent);
  } else if (app === 'linkedin') {
    appContent.innerHTML = '<h3>LinkedIn</h3><p>Link to your LinkedIn profile here.</p>';
  } else if (app === 'github') {
    appContent.innerHTML = '<h3>GitHub</h3><p>Link to your GitHub profile here.</p>';
  } else if (app === 'twitter') {
    appContent.innerHTML = '<h3>Twitter</h3><p>Link to your Twitter profile here.</p>';
  } else if (app === 'contact') {
    appContent.innerHTML = `
      <h3>Contact Me</h3>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    `;
  }
}

function startTicTacToe(container) {
  const board = document.createElement('div');
  board.classList.add('tic-tac-toe');

  let currentPlayer = 'X';
  const cells = Array(9).fill(null);
  let gameActive = true;
  const statusText = document.createElement('div');
  statusText.classList.add('game-result');

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('button');
    cell.addEventListener('click', () => handleCellClick(cell, i));
    board.appendChild(cell);
  }

  function handleCellClick(cell, index) {
    if (cells[index] || !gameActive) return;
    cells[index] = currentPlayer;
    cell.textContent = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function checkResult() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        statusText.textContent = `${cells[a]} wins!`;
        gameActive = false;
        return;
      }
    }

    if (!cells.includes(null)) {
      statusText.textContent = 'It\'s a draw!';
      gameActive = false;
    }
  }

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-btn');
  closeButton.textContent = 'Close';
  
  // Fix: Ensure close button functionality works
  closeButton.onclick = () => {
    container.innerHTML = ''; // Clear content to close the app
  };

  container.appendChild(board);
  container.appendChild(statusText);
  container.appendChild(closeButton);
}

function updateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById('time').textContent = now.toLocaleTimeString([], options);
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

const starCount = 150;
const starsContainer = document.querySelector('.stars');



// Function to create stars at random positions
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const starCount = 100; // Number of stars
  const starSize = 5; // Bigger star size

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const randomX = Math.random() * window.innerWidth; // Random horizontal position
    const randomY = Math.random() * window.innerHeight; // Random vertical position
    star.style.width = `${starSize}px`; // Set star size
    star.style.height = `${starSize}px`; // Set star size
    star.style.left = `${randomX}px`; // Initial horizontal position
    star.style.top = `${randomY}px`; // Initial vertical position
    starsContainer.appendChild(star);
  }
}

// Function to move stars continuously from left to right
function moveStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star) => {
    const currentLeft = parseFloat(star.style.left);
    const newLeft = currentLeft + 1; // Control the speed of movement here (1px per frame)
    
    // If the star goes off the right edge, reposition it on the left
    if (newLeft > window.innerWidth) {
      star.style.left = '-10px'; // Position it off-screen on the left
    } else {
      star.style.left = `${newLeft}px`; // Move star to the right
    }
  });
}

// Start the movement after stars are created
window.onload = function() {
  createStars(); // First, create the stars
  setInterval(moveStars, 15); // Move the stars continuously, adjust interval for smoothness
};

// Select all project elements
const projects = document.querySelectorAll('.project');

// Add click event listener to each project
projects.forEach(project => {
    project.addEventListener('click', () => {
        const link = project.getAttribute('data-link');
        window.open(link, '_blank'); // Open the link in a new tab
    });
});
