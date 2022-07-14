const text = document.getElementById('text');
const author = document.getElementById('author');
const btn = document.getElementById('new-quote')

const getQuote = async () => {
  const response = await fetch("https://type.fit/api/quotes");
  
  const quotes = await response.json();
  const num = Math.floor(Math.random()*quotes.length);
  const item = quotes[num];
  const quote = item.text;
  const authorName = item.author;
  text.innerText = quote;
  author.innerText = authorName;
}

btn.addEventListener('click', getQuote)

getQuote();