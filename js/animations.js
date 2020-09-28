const presentationContainer = document.querySelector(".presentation");
const presentationDiv = document.querySelectorAll(".left-item > div");
const candTitle = document.querySelector(".candidatures__title p");
const candBtn = document.querySelector(".candidatures__btn");
const degrees = document.querySelectorAll(".degree");
const degreeTitle = document.querySelector(".degrees > h1");
const newsContainer = document.querySelector(".news");
const newsBtn = document.querySelector(".news__btn");


const appearOptions = {
    threshold: 1
};

// function to intersect the event 
const display = (options, addedClass) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // add the class to the element
                entry.target.classList.add(addedClass);
                observer.unobserve(entry.target);
            }
        });
    }, options);
}


// functions to add the animations
const appearOnScroll = display(appearOptions, 'appear');
const appearOnScrollNews = display({
    threshold: 0.2 // percentage when the intersection observer start
}, 'appear');

const displayPresentation = display({
    threshold: 0
}, 'show-fade');

// jumbotron section
displayPresentation.observe(presentationContainer);
presentationDiv.forEach(div => displayPresentation.observe(div));

//candidatures section
displayPresentation.observe(candTitle);
appearOnScroll.observe(candBtn);
// degree section 
degrees.forEach(degree => appearOnScroll.observe(degree));
appearOnScroll.observe(degreeTitle);
// news section 
appearOnScrollNews.observe(newsContainer);
appearOnScrollNews.observe(newsBtn);