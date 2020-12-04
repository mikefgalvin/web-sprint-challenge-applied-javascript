// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');

function Header() {

	const headerDiv = document.createElement('div');
	const date = document.createElement('span');
	const headerTitle = document.createElement('h1');
	const temp = document.createElement('span');

	// headerDiv.appendChild(date);
	// headerDiv.appendChild(headerTitle);
	// 	headerDiv.appendChild(temp);

	headerDiv.append(date, headerTitle, temp);

	headerDiv.classList.add('header');
	date.classList.add('date');
	temp.classList.add('temp');

	const todayDate = new Date(Date.now())
	date.textContent = todayDate.toDateString();
	
	// date.textContent = 'MARCH 28, 2020';
	headerTitle.textContent = 'Lambda Times';
	temp.textContent = '98°';

	// console.log('headerDiv', headerDiv);
	return headerDiv;
}

// console.log('function', Header());

// const headerInfo = Header();

// headerContainer.appendChild(headerInfo);
headerContainer.appendChild(Header());