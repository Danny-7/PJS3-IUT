const presentationContainer = document.querySelector(".presentation");
const presentationDiv = document.querySelectorAll(".left-item > div");
const candTitle = document.querySelector(".candidatures__title p");
const candBtn = document.querySelector(".candidatures__btn");
const degrees = document.querySelectorAll(".degree");
const degreeTitle = document.querySelector(".degrees > h1");
const newsContainer = document.querySelector(".news");

const appearOptions = {
    threshold: 1
};

const display = (options, addedClass) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add(addedClass);
                observer.unobserve(entry.target);
            }
        });
    }, options);
}



const appearOnScroll = display(appearOptions, 'appear');
const appearOnScrollNews = display({
    threshold: 0.2
}, 'appear');

const displayPresentation = display({
    threshold: 0
}, 'show-fade');

displayPresentation.observe(presentationContainer);
presentationDiv.forEach(div => displayPresentation.observe(div));

displayPresentation.observe(candTitle);
// degree section 
degrees.forEach(degree => appearOnScroll.observe(degree));
appearOnScroll.observe(degreeTitle);
appearOnScroll.observe(candBtn);
appearOnScrollNews.observe(newsContainer);