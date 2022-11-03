let apiQuotes = []

function getRandomElement(arry) {
    return arry[Math.floor(Math.random() * arry.length)]
}

function newQuote() {
    randApiQuote = getRandomElement(apiQuotes)
    randLocalQuote = getRandomElement(localQuotes)
    const quote = randApiQuote || randLocalQuote
    console.log(quote)
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

// On Load
getQuotes()