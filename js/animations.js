const candBtn = document.querySelector(".candidatures__btn");
const degrees = document.querySelectorAll(".degree");
const degreeTitle = document.querySelector(".degrees > h1");
const newsContainer = document.querySelector(".news");

const appearOptions = {
    threshold: 1
};

const display = (options) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);
}



const appearOnScroll = display(appearOptions);
const appearOnScrollNews = display({
    threshold: 0.2
})

// degree section 
degrees.forEach(degree => appearOnScroll.observe(degree));
appearOnScroll.observe(degreeTitle);
appearOnScroll.observe(candBtn);
appearOnScrollNews.observe(newsContainer);