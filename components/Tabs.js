// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
// {
//     "topics": [
//         "javascript",
//         "bootstrap",
//         "technology",
//         "jquery",
//         "node.js"
//     ]
// }

const topicsContainer = document.querySelector('.topics');

function topicMaker(topicData) {
	const topicDiv = document.createElement('div');
	// const topic = document.createElement('h2');
	// topicDiv.appendChild(topic);
	topicDiv.classList.add('tab');
	topicDiv.textContent = topicData;
	// console.log('topicDiv', topicDiv);
	return topicDiv;
}
// const topicsData = axios.get('https://lambda-times-api.herokuapp.com/topics');
// console.log('data', topicsData);

// a little trick for console.logs — if you wrap whatever entity you're hoping to print in a {}, 
// it's shorthand to say print this Object {} with a property of `variableName` and a value of `variableValue`
// { topicsData } = { topicsData: topicsData }, —— then in the console it'll print { topicsData: Promise }  
// (and you can ) unfold the object to see all fields of said object. 
// console.log({ topicsData });

// console.log('topic function', topicMaker(topicsData));

// const testData = axios.get('https://api.github.com/users/mikefgalvin');
// console.log('testData', testData);


axios.get('https://lambda-times-api.herokuapp.com/topics')
	.then((res) => {
		// console.log('data came thru', res);
		// const topicContent = res.data.topics;

		// you can use destructuring for less `.property` notation:
		const { topics } = res.data;
		// console.log({ topics });

		// console.log('topic content', topicContent);
		// topicContent.forEach(item => {
		topics.forEach(topic => {
			// const newTopic = topicMaker(item);
			// topicsContainer.appendChild(newTopic);

			// you are welcome to do an inline call to topicMaker() if you prefer this. Just tossing it out as an option
			topicsContainer.appendChild(topicMaker(topic));
		});
	})
	.catch((error) => {
		// console.log('it didnt work', error);

		// here's a better way of displaying errors in the console
		console.error(error);
	})


// topicsArray.forEach((item) => {
//     axios.get(item)
//     .then((res) => {
//         const topicContent = res.data;
//         const newTopic = topicMaker(topicContent);
//         topicsContainer.appendChild(newTopic);
//     })
//     .catch((err) => {
        // console.log('shit');
//     })
// })