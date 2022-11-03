let apiQuotes = []

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        alert(error)
    }
}

// On Load
getQuotes()