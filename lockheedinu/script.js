// Array of meme image URLs
const memes = [
    'https://example.com/meme1.jpg',
    'https://example.com/meme2.jpg',
    'https://example.com/meme3.jpg',
    // Add more meme URLs here
];

// Get the meme container element
const memeContainer = document.getElementById('meme-container');

// Function to display memes
function displayMemes() {
    memes.forEach(meme => {
        const memeItem = document.createElement('div');
        memeItem.classList.add('meme-item');

        const memeImg = document.createElement('img');
        memeImg.src = meme;
        memeImg.alt = 'Meme';

        memeItem.appendChild(memeImg);
        memeContainer.appendChild(memeItem);
    });
}

// Call the displayMemes function to load the memes
displayMemes();