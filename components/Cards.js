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
    // console.log('card data came thru', res);
    const bootstrapContent = res.data.articles.bootstrap;
    // console.log('bootstrap content', bootstrapContent);
    const javascriptContent = res.data.articles.javascript;
    // console.log('js content', javascriptContent);
    const jqueryContent = res.data.articles.jquery;
    // console.log('jquery content', jqueryContent);
    const nodeContent = res.data.articles.node;
    // console.log('node content', nodeContent);
    const technologyContent = res.data.articles.technology;
    const technologyContent0 = res.data.articles.technology[0];
    const technologyContent1 = res.data.articles.technology[1];
    const technologyContent2 = res.data.articles.technology[2];
    console.log('tech content', technologyContent);
    console.log('tech content 1', technologyContent0);
    console.log('tech content 2', technologyContent1);
    console.log('tech content 3', technologyContent2);


    const newCardMaker = cardMaker(technologyContent0);
    cardsContainer.appendChild(newCardMaker);
        // const obj = res.data.articles.bootstrap;
        // console.log('obj', obj);
        // for(let i = 0; i < obj.length; i++){
        //     // console.log('loop 1', obj[i]);
        //     for(let prop in obj[i]){
        //         console.log('loop 2', obj[i][prop])
        //     }
        // }
        // const obj2 = res.data.articles.javascript;
        // console.log('obj', obj2);
        // for(let i = 0; i < obj2.length; i++){
        //     // console.log('loop 3', obj2[i]);
        //     for(let prop in obj2[i]){
        //         console.log('loop 4', obj2[i][prop])
        //     }
        // }
        // const obj3 = res.data.articles.jquery;
        // console.log('obj', obj3);
        // for(let i = 0; i < obj3.length; i++){
        //     // console.log('loop 5', obj3[i]);
        //     for(let prop in obj3[i]){
        //         console.log('loop 6', obj3[i][prop])
        //     }
        // }
        // const obj4 = res.data.articles.node;
        // console.log('obj', obj4);
        // for(let i = 0; i < obj4.length; i++){
        //     // console.log('loop 7', obj4[i]);
        //     for(let prop in obj4[i]){
        //         console.log('loop 8', obj4[i][prop])
        //     }
        // }
        // const obj5 = res.data.articles.node;
        // console.log('obj', obj5);
        // for(let i = 0; i < obj5.length; i++){
        //     // console.log('loop 9', obj5[i]);
        //     for(let prop in obj5[i]){
        //         console.log('loop 10', obj5[i][prop])
        //     }
        // }  


  })
  .catch((error) => {
    console.log('it didnt work', error);
  })


//   let obj = res.date['articles'];
//   for(let i=0; i , obj.length; i++){
//       console.log(obj[i]);
//       for(let prop in obj[i]){
//           console.log(prop, obj[i].prop)
//       }
//   }
