// URL of the generic image
const REPLACEMENT_NAME = "Anonymous";
const REPLACEMENT_HANDLE = " @anonymous";

// Tweet Selector
const TWEET_SELECTOR = 'article[data-testid="tweet"]:not([data-anonymized])';
// Selectors for different elements
const PROFILE_DIV_SELECTOR =
    'div[data-testid^="UserAvatar-Container-"] [style*="background-image"]';
const PROFILE_IMG_SELECTOR = "img.css-9pa8cd:not([data-anonymized])";
const NAME_SELECTOR =
    'div[data-testid="User-Name"] div[dir="ltr"] span span:not([data-anonymized])';
const HANDLE_SELECTOR =
    'div[data-testid="User-Name"] *[tabindex="-1"] span:not([data-anonymized])';
const RETWEET_SELECTOR =
    'span[data-testid="socialContext"]:not([data-anonymized])';

const HOVER_SELECTOR = 'div[data-testid="HoverCard"]';

// Function to replace profile images, names and handles
function replaceElements() {
    let tweets = document.querySelectorAll(TWEET_SELECTOR);
    tweets.forEach((tweet) => {
        let profileDivs = tweet.querySelectorAll(`${PROFILE_DIV_SELECTOR}`);
        for (let div of profileDivs) {
            div.style.backgroundImage = `url(${Morko})`;
        }
        let nameElements = tweet.querySelectorAll(`${NAME_SELECTOR}`);
        for (let element of nameElements) {
            element.innerText = REPLACEMENT_NAME;
        }
        let handleElements = tweet.querySelectorAll(`${HANDLE_SELECTOR}`);
        for (let element of handleElements) {
            element.innerText = REPLACEMENT_HANDLE;
        }
        let retweetElements = tweet.querySelectorAll(`${RETWEET_SELECTOR}`);
        for (let element of retweetElements) {
            element.innerText = "Someone you follow retweeted";
        }
        tweet.setAttribute("data-anonymized", "true");
    });

    let hoverThing = document.querySelectorAll(HOVER_SELECTOR);
    for (let element of hoverThing) {
        element.style.display = "none";
    }
}

const observer = new MutationObserver((mutations) => {
    if (
        mutations.some((mutation) =>
            ["childList", "subtree"].includes(mutation.type)
        )
    ) {
        replaceElements();
    }
});

observer.observe(document, {
    childList: true,
    subtree: true,
});
