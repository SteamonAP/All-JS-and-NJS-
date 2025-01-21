const accessKey = "LMJdIvkpqwPrBB5fi6Wa66riNTdeZOD3rz6YWdcGjZk";  // Unsplash Access Key
const incognitoApiKey = "CQYPfFOm2T-TT4CBAmT7XrQitomTSui-k8LR0975fE";  // Night API Key

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-btn");
const incognitoSwitch = document.getElementById('incognito-switch');
const warningModal = document.getElementById('warning-modal');
const enableIncognitoBtn = document.getElementById('enable-incognito');
const exitModalBtn = document.getElementById('exit-modal');
const blurredBg = document.getElementById('blurred-bg');
const body = document.body;

let inputData = "";
let page = 1;
let incognitoModeEnabled = false;

// Function to clear search results
function clearSearchResults() {
    searchResults.innerHTML = '';
}

// Function to clear search input
function clearSearchInput() {
    inputEl.value = '';
}

// Enable Dark Mode
function enableDarkMode() {
    body.classList.add('dark');
}

// Disable Dark Mode
function disableDarkMode() {
    body.classList.remove('dark');
}

// Show Modal for Incognito Mode warning

function showWarningModal() {
    warningModal.style.display = 'block';
    blurredBg.style.display = 'block'; // Show the blurred background
}

// Hide Modal
function hideWarningModal() {
    warningModal.style.display = 'none';
    blurredBg.style.display = 'none'; // Hide the blurred background
}

// Fetch images using the appropriate API based on the mode
async function searchImages() {
    inputData = inputEl.value;
    let url = "";

    if (incognitoModeEnabled) {
        // Incognito Mode: Use Night API (NSFW)
        url = `https://api.night-api.com/images/nsfw?page=${page}&query=${inputData}`;
        const response = await fetch(url, {
            headers: {
                authorization: incognitoApiKey
            }
        });
        const data = await response.json();

        if (page === 1) {
            clearSearchResults();  // Clear results when starting a new search
        }

        data.results.map(result => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('search-result');

            const image = document.createElement('img');
            image.src = result.url;
            image.alt = result.alt_description || 'Image';

            const imageLink = document.createElement('a');
            imageLink.href = result.page;
            imageLink.target = '_blank';
            imageLink.textContent = result.alt_description || 'Click to view image';

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });
    } else {
        // Normal Mode: Use Unsplash API
        url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            clearSearchResults();
        }

        data.results.map(result => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('search-result');

            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description || 'Image';

            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';
            imageLink.textContent = result.alt_description || 'Click to view image';

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });
    }

    // Show the "Show More" button after first load
    page++;
    if (page > 1) {
        showMore.style.display = 'block';
    }
}

// Toggle between Incognito and Normal Mode
incognitoSwitch.addEventListener('change', () => {
    if (incognitoSwitch.checked) {
        showWarningModal();  // Show the warning modal before enabling incognito
    } else {
        disableDarkMode();
        incognitoModeEnabled = false;
        clearSearchResults();
        clearSearchInput();  // Clear input history
    }
});

// Enable Incognito Mode After Confirmation
enableIncognitoBtn.addEventListener('click', () => {
    enableDarkMode();
    incognitoModeEnabled = true;
    hideWarningModal();
    clearSearchResults();  // Clear previous results
    clearSearchInput();    // Clear search input
});

// Exit the Modal without Enabling Incognito
exitModalBtn.addEventListener('click', () => {
    hideWarningModal();
    incognitoSwitch.checked = false;
    incognitoModeEnabled = false;
    incognitoSwitch.classList.remove('active');
    
    
});

// Handle form submission
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

// Handle "Show More" button click
showMore.addEventListener('click', () => {
    searchImages();
});
