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

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

let score = 0;

function handleScore(event) {
    const elem = event.target;
    if (elem.classList.contains("option")) {
        if (elem.classList.contains("correct")) {
            elem.classList.add("jello-vertical");
            score += 100;
            document.getElementById("clippy-score").innerHTML = score;
        } else {
            elem.classList.add("wobble-hor-top");
            score -= 150;
            document.getElementById("clippy-score").innerHTML = score;
        }
    }
}

let originalData = {};
// Function to replace profile images, names and handles
function replaceElements() {
    let tweets = document.querySelectorAll(TWEET_SELECTOR);
    tweets.forEach((tweet) => {
        originalData[tweet.querySelector(HANDLE_SELECTOR).innerText] = {
            name: tweet.querySelector(NAME_SELECTOR).innerText,
            profileImg: tweet.querySelector(PROFILE_IMG_SELECTOR).src,
        };
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

    let dropdown = document.createElement("div");
    let hoverThing = document.querySelectorAll(HOVER_SELECTOR);
    for (let element of hoverThing) {
        const correctUsername = element.querySelector(
            'a[tabindex="-1"] span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0'
        ).innerText;

        let options = Object.entries(originalData).filter(
            ([nick]) => nick !== correctUsername
        );
        let a = options[Math.floor(Math.random() * options.length)][0];
        let b = options[Math.floor(Math.random() * options.length)][0];

        const [option1, option2, option3] = shuffle([a, b, correctUsername]);

        dropdown.innerHTML = `
        <div class="guess-container">
            <div class="guess-header">
                AmoGuess©
            </div>
            <span>Guess the correct user:</span>
            <div class="container">
                <div class="options">
                    <div class="option button-19 ${
                        option1 === correctUsername ? "correct" : "wrong"
                    }">${option1}</div>
                    <div class="option button-19 ${
                        option2 === correctUsername ? "correct" : "wrong"
                    }">${option2}</div>
                    <div class="option button-19 ${
                        option3 === correctUsername ? "correct" : "wrong"
                    }">${option3}</div>
                </div>
            </div>
        </div>
    `;
        element.style.overflow = "inherit";
        element.children[0].replaceChildren(dropdown);

        dropdown.onclick = handleScore;
    }
}

const clippy = document.createElement("div");
clippy.innerHTML = `
<div class="clippy-container clippy-container-container">
    <div class="card">
        <div class="title">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 21l8 0"></path>
                    <path d="M12 17l0 4"></path>
                    <path d="M7 4l10 0"></path>
                    <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
                    <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                </svg>
            </span>
            <p class="title-text">
                AmoGuess© Score
            </p>
        </div>
        <div class="data">
            <p>
                <span id="clippy-score">0</span>
            </p>
            <div class="range">
                <div class="fill">
                </div>
            </div>
        </div>
    </div>
</div>`;
document.body.appendChild(clippy);

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
