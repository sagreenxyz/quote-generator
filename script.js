const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

function getRandomElement(arry) {
    return arry[Math.floor(Math.random() * arry.length)]
}

function newQuote() {
    randApiQuote = getRandomElement(apiQuotes)
    randLocalQuote = getRandomElement(localQuotes)
    const quote = randApiQuote || randLocalQuote
    authorText.textContent = quote.author || 'Unknown'
    
    // Special format for long-length quote texts
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
    } catch (error) {
        alert('Error Fetching Data from Server: Will Use Local Data Instead')
    } finally {
        newQuote()
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

// On Load
getQuotes()
newQuoteBtn.addEventListener('click', getQuotes)
twitterBtn.addEventListener('click', tweetQuote)