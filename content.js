const Drowzee =
    "data:image/png;base64,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";

// URL of the generic image
const REPLACEMENT_NAME = "Anonymous";
const REPLACEMENT_HANDLE = " @anonymous";

// Selectors for different elements
const PROFILE_DIV_SELECTOR =
    'div[data-testid^="UserAvatar-Container-"] div.css-1dbjc4n.r-1niwhzg.r-vvn4in.r-u6sd8q.r-4gszlv.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-13qz1uu.r-1wyyakw:not([data-anonymized])';
const PROFILE_IMG_SELECTOR = "img.css-9pa8cd:not([data-anonymized])";

/**
const NAME_SELECTOR =
    'div[data-testid="User-Name"] a:not([tabindex]) div div span span';
const HANDLE_SELECTOR =
    'div[data-testid="User-Name"] a[tabindex="-1"] div span';
 */

const NAME_SELECTOR =
    'div[data-testid="User-Name"] div[dir="ltr"] span span:not([data-anonymized])';
const HANDLE_SELECTOR =
    'div[data-testid="User-Name"] *[tabindex="-1"] span:not([data-anonymized])';

const HOVER_SELECTOR = 'div[data-testid="HoverCard"]';

const RETWEET_SELECTOR =
    'span[data-testid="socialContext"]:not([data-anonymized])';

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

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
    if (elem.classList.contains("correcto")) {
        alert("correct answer 💩")
        score += 100;
        document.getElementById("clippy-score").innerHTML = score;
    } else {
        alert("YOUR SUS, FAIL FAIL 👽")
        score -= 150;
        document.getElementById("clippy-score").innerHTML = score;
    }
}

let originalData = {};
// Function to replace profile images, names and handles
function replaceElements() {
    let tweets = document.querySelectorAll(
        'article[data-testid="tweet"]:not([data-anonymized])'
    );
    tweets.forEach((tweet) => {
        originalData[tweet.querySelector(HANDLE_SELECTOR).innerText] = {
            name: tweet.querySelector(NAME_SELECTOR).innerText,
            profileImg: tweet.querySelector(PROFILE_IMG_SELECTOR).src,
        };
        tweet.setAttribute("data-anonymized", "true");
    });
    // Replace profile images
    let profileDivs = document.querySelectorAll(`${PROFILE_DIV_SELECTOR}`);
    for (let div of profileDivs) {
        div.style.backgroundImage = `url(${Drowzee})`;
        div.setAttribute("data-anonymized", "true");
    }

    // Replace names
    let nameElements = document.querySelectorAll(`${NAME_SELECTOR}`);
    for (let element of nameElements) {
        element.innerText = REPLACEMENT_NAME;
        element.setAttribute("data-anonymized", "true");
    }

    // Replace handles
    let handleElements = document.querySelectorAll(`${HANDLE_SELECTOR}`);
    for (let element of handleElements) {
        element.innerText = REPLACEMENT_HANDLE;
        element.setAttribute("data-anonymized", "true");
    }

    // Replace retweets
    let retweetElements = document.querySelectorAll(`${RETWEET_SELECTOR}`);
    for (let element of retweetElements) {
        element.innerText = "Someone you follow retweeted";
        element.setAttribute("data-anonymized", "true");
    }

    //TEST
    let dropdown = document.createElement("div");

    let hoverThing = document.querySelectorAll(HOVER_SELECTOR);
    for (let element of hoverThing) {
        const correctUsername = element.querySelector(
            'a[tabindex="-1"] span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0'
        ).innerText;
        console.log("correctUsername", correctUsername);
        console.log(
            "correctUsername in originalData",
            originalData[correctUsername]
        );

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
                    <div class="option button-19 ${option1 === correctUsername ? 'correcto' : 'wrongo'}">${option1}</div>
                    <div class="option button-19 ${option2 === correctUsername ? 'correcto' : 'wrongo'}">${option2}</div>
                    <div class="option button-19 ${option3 === correctUsername ? 'correcto' : 'wrongo'}">${option3}</div>
                </div>
            </div>
        </div>
    `;
        element.style.overflow = "inherit";
        element.children[0].replaceChildren(dropdown);

        dropdown.onclick = handleScore
    }
}

const clippy = document.createElement("div")
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

  </div>
    `
document.body.appendChild(clippy);

// Throttle the replace function
const throttledReplaceElements = throttle(replaceElements, 500);

// Call the function when the page loads
window.onload = throttledReplaceElements;

// Observe changes
let bodyList = document.querySelector("body");
let observer = new MutationObserver((mutations) => {
    // Check if the mutation involves elements we're interested in
    for (let mutation of mutations) {
        if (
            mutation.target.matches(PROFILE_DIV_SELECTOR) ||
            mutation.target.matches(PROFILE_IMG_SELECTOR) ||
            mutation.target.matches(NAME_SELECTOR) ||
            mutation.target.matches(HANDLE_SELECTOR) ||
            mutation.target.matches(RETWEET_SELECTOR) ||
            Array.from(mutation.addedNodes).some(
                (node) =>
                    node.matches &&
                    (node.matches(PROFILE_DIV_SELECTOR) ||
                        node.matches(PROFILE_IMG_SELECTOR) ||
                        node.matches(NAME_SELECTOR) ||
                        node.matches(HANDLE_SELECTOR))
            )
        ) {
            throttledReplaceElements();
            break;
        }
    }
});
let config = { childList: true, subtree: true };
observer.observe(bodyList, config);
