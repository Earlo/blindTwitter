// URL of the generic image
const GENERIC_IMAGE_URL = "https://xsgames.co/randomusers/avatar.php?g=pixel";
// Replacement for the user's name and handle
const REPLACEMENT_NAME = "Anonymous";
const REPLACEMENT_HANDLE = " @anonymous";

// Selectors for different elements
const PROFILE_DIV_SELECTOR =
    "div.css-1dbjc4n.r-1niwhzg.r-vvn4in.r-u6sd8q.r-4gszlv.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-13qz1uu.r-1wyyakw";
const PROFILE_IMG_SELECTOR = "img.css-9pa8cd";
const NAME_HANDLE_SELECTOR =
    'div[data-testid="User-Name"] a[role="link"] span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0';
const RETWEET_SELECTOR = 'span[data-testid="socialContext"]';

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

// Function to replace profile images, names and handles
function replaceElements() {
    // Replace profile images
    let profileDivs = document.querySelectorAll(PROFILE_DIV_SELECTOR);
    let profileImgs = document.querySelectorAll(PROFILE_IMG_SELECTOR);
    for (let div of profileDivs) {
        div.style.backgroundImage = `url(${GENERIC_IMAGE_URL})`;
    }
    for (let img of profileImgs) {
        img.src = GENERIC_IMAGE_URL;
    }

    // Replace names and handles
    let nameElements = document.querySelectorAll(NAME_HANDLE_SELECTOR);
    for (let element of nameElements) {
        element.innerText = REPLACEMENT_NAME;
    }
    let handleElements = document.querySelectorAll(NAME_HANDLE_SELECTOR);
    for (let element of handleElements) {
        element.innerText = REPLACEMENT_HANDLE;
    }

    // Replace retweets
    let retweetElements = document.querySelectorAll(RETWEET_SELECTOR);
    for (let element of retweetElements) {
        element.innerText = "Someone you follow retweeted";
    }
}

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
            mutation.target.matches(NAME_HANDLE_SELECTOR) ||
            mutation.target.matches(RETWEET_SELECTOR) ||
            Array.from(mutation.addedNodes).some(
                (node) =>
                    node.matches &&
                    (node.matches(PROFILE_DIV_SELECTOR) ||
                        node.matches(PROFILE_IMG_SELECTOR) ||
                        node.matches(NAME_HANDLE_SELECTOR))
            )
        ) {
            throttledReplaceElements();
            break;
        }
    }
});
let config = { childList: true, subtree: true };
observer.observe(bodyList, config);
