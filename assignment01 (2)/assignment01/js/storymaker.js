// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1'); 
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');


// Constants for p tag to display query selectors
const noun1P = document.querySelector('#choosenNoun1');
const verbP = document.querySelector('#choosenVerb');
const adjectiveP = document.querySelector('#choosenAdjective');
const noun2P = document.querySelector('#choosenNoun2');
const settingP = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const playbackP = document.querySelector('#playback');
const randomP = document.querySelector('#random');

var storyDisplay = document.querySelector('#story');

// Variables for pre-defined arrays
const nouns1 = ['dog', 'cat', 'bird', 'fish', 'rabbit'];
const verbs = ['runs', 'jumps', 'hops', 'swims', 'flies'];
const adjectives = ['happy', 'sad', 'angry', 'excited', 'bored'];
const nouns2 = ['park', 'school', 'store', 'zoo', 'beach'];
const settings = ['Sabaody Archipelago', 'Water 7', 'Skypiea', 'Alabasta', 'Wano Country'];



// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;



/* Functions
-------------------------------------------------- */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
} 
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1P.textContent = nouns1[noun1Count];
    // increment count
    noun1Count++;


    // if-else to change count setting
    if (noun1Count === nouns1.length) {
        noun1Count = 0;
    }
}

function verb_on_click() {
    verbP.textContent = verbs[verbCount];
    verbCount++;

    if (verbCount === verbs.length) {
        verbCount = 0;
    }

    
}

function adjective_on_click() {
    adjectiveP.textContent = adjectives[adjectiveCount];
    adjectiveCount++;

    if (adjectiveCount === adjectives.length) {
        adjectiveCount = 0;
    }
    
}

function noun2_on_click() {
    noun2P.textContent = nouns2[noun2Count];
    noun2Count++;

    if (noun2Count === nouns2.length) {
        noun2Count = 0;
    }
    
}

function setting_on_click() {
    settingP.textContent = settings[settingCount];
    settingCount++;

    if (settingCount === settings.length) {
        settingCount = 0;
    }
    
}

// concatenate the user story and display
function playback_on_click() {
    const userStory = `In the world of "One Piece," there was a ${adjectives[adjectiveCount]} ${nouns1[noun1Count]} who ${verbs[verbCount]} through the ${settings[settingCount]}, after word they went to ${nouns2[noun2Count]}. The end.`;
    storyDisplay.textContent = userStory;    
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = `Anime One Piece: In the land of the ${getRandomElement(nouns1)}, the ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(verbs)} ${getRandomElement(settings)}.`;
    storyDisplay.textContent = randomStory;
    
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackP.addEventListener('click', playback_on_click);
randomP.addEventListener('click', random_on_click);   