const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// Show the loader
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

// Stop to show the loader
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

// Show new quote
function newQuote() {
    loading()
    // Pick a random quote from apiQuotes
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Check if author field is blank and replace it with 'Unknown'
    if(!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }
    // Check quote length to determine styling
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text
    complete()
}

async function getQuotes() {
    loading()
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch(error) {
        // handling error
    }
}

function tweetQuote() {
    const tweet = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(tweet, '_blank')
}

twitterBtn.addEventListener('click', tweetQuote)
newQuoteBtn.addEventListener('click', getQuotes)

getQuotes()