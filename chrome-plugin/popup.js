document.getElementById("editButton").addEventListener("click", function () {
  const username = "jidekelekunn"
  // document.getElementById("usernameInput").value.trim()
  if (username === "") {
    alert("Please enter a Twitter username.")
    return
  }

  // Get the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabId = tabs[0].id

    // Inject the content script into the current tab
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: editTweets,
      args: [username],
    })
  })
})

// Function to edit tweets
function editTweets(username) {
  // Function to apply styling to a tweet
  const applyStylingToTweet = (tweet) => {
    const tweetUsernameElement = tweet.querySelector(".css-175oi2r")
    if (tweetUsernameElement) {
      const tweetUsername = tweetUsernameElement.innerText
      if (tweetUsername.includes(username)) {
        tweet.style.backgroundColor = "#7d343475"
        tweet.classList.add("red-background")
      }
    }
  }

  // Apply styling to existing tweets
  const tweets = document.querySelectorAll('[data-testid="tweet"]')
  tweets.forEach((tweet) => {
    applyStylingToTweet(tweet)
  })

  // Function to handle scroll event
  const handleScroll = () => {
    const lastTweet = document.querySelector(".tweet:last-of-type")
    if (!lastTweet) {
      console.log("No tweets found.")
      return
    }

    const lastTweetOffset = lastTweet.offsetTop + lastTweet.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    const bottomOffset = 20

    if (pageOffset > lastTweetOffset - bottomOffset) {
      const newTweets = document.querySelectorAll(".tweet:not(.red-background)")
      newTweets.forEach((tweet) => {
        applyStylingToTweet(tweet)
      })
    }
  }

  // Observe changes to the body of the document
  const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.matches('[data-testid="tweet"]') &&
            !node.classList.contains("red-background")
          ) {
            applyStylingToTweet(node)
          }
        })
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll)
}
