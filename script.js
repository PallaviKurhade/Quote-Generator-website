const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  document.getElementById("quote").innerText = `"${selectedQuote.quote}"`;
  document.getElementById("author").innerText =  `_ ${selectedQuote.author}`;
}
