const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// show loader and hide text container
function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loader and show quote/author
function hideLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
// get quote from forismatic API
async function getQuote() {
  showLoader();
  //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  //const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    let data = [];
    data = await response.json();
    const rand = randomNum();
    console.log('The number is', rand);
    let quotesArray = data[rand];
    console.log(quotesArray);
    authorText.innerText = quotesArray.author;
    quoteText.innerText = quotesArray.text;
    hideLoader();
  } catch (error) {
    getQuote();
    console.log('Whoops no quote'+ error);
  }

}

newQuoteBtn.addEventListener('click', getQuote);
// get a random number between 1 and 1643
function randomNum() {
  return Math.floor((Math.random() * 1643) + 1);
} 

// On Load
getQuote();