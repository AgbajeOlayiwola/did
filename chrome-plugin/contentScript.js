// contentScript.js

function editTweets(username) {
  const tweets = document.querySelectorAll('[data-testid="tweet"]')
  tweets.forEach((tweet) => {
    const tweetUsername = tweet.querySelector('[data-testid="tweet"]').innerText
    if (tweetUsername.includes(username)) {
      tweet.style.backgroundColor = "red"
    }
  })
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "editTweets") {
    editTweets(message.username)
  }
})
