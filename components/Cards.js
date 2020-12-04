// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const dataTest = axios.get('https://lambda-times-api.herokuapp.com/articles');
console.log('card data', dataTest);
const cardsContainer = document.querySelector('.cards-container');

function cardMaker(article) {

const card = document.createElement('div');
const headline = document.createElement('div');
const authorDiv = document.createElement('div');
const imageDiv = document.createElement('div');
const image = document.createElement('img');
const authorName = document.createElement('span');

card.appendChild(headline);
card.appendChild(authorDiv);
authorDiv.appendChild(imageDiv);
imageDiv.appendChild(image);
authorDiv.appendChild(authorName);

card.classList.add('card');
headline.classList.add('headline');
authorDiv.classList.add('author');
imageDiv.classList.add('img-container');

headline.textContent = article.headline;
image.src = article.authorPhoto;
authorName.textContent = article.authorName;

card.addEventListener('click', (event) => {
    console.log(headline);
});

return card;

}

axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    const dataLook = res.data.articles;
    console.log('datalook', dataLook);
   
    const bootstrapContent0 = res.data.articles.bootstrap[0];
    const bootstrapContent1 = res.data.articles.bootstrap[1];
    const bootstrapContent2 = res.data.articles.bootstrap[2];
    const javascriptContent0 = res.data.articles.javascript[0];
    const javascriptContent1 = res.data.articles.javascript[1];
    const javascriptContent2 = res.data.articles.javascript[2];
    const javascriptContent3 = res.data.articles.javascript[3];
    const jqueryContent0 = res.data.articles.jquery[0];
    const jqueryContent1 = res.data.articles.jquery[1];
    const jqueryContent2 = res.data.articles.jquery[2];
    const nodeContent0 = res.data.articles.node[0];
    const nodeContent1 = res.data.articles.node[1];
    const technologyContent0 = res.data.articles.technology[0];
    const technologyContent1 = res.data.articles.technology[1];
    const technologyContent2 = res.data.articles.technology[2];

    const cardArray = [
        bootstrapContent0,
        bootstrapContent1,
        bootstrapContent2,
        javascriptContent0,
        javascriptContent1,
        javascriptContent2,
        javascriptContent3,
        jqueryContent0,
        jqueryContent1,
        jqueryContent2,
        nodeContent0,
        nodeContent1,
        technologyContent0,
        technologyContent1,
        technologyContent2
    ]
    cardArray.forEach((item) => { 
        const newCardMaker = cardMaker(item);
        cardsContainer.appendChild(newCardMaker);
    })
  })
  .catch((error) => {
    console.log('it didnt work', error);
  })
