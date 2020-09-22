const degrees = document.querySelectorAll(".degree");
const degreeTitle = document.querySelector(".diplomes > h1");
const candBtn = document.querySelector(".candidatures_btn");

const appearOptions = {
    threshold: 1
};

const callBack = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
};



const appearOnScroll = new IntersectionObserver(callBack, appearOptions);

// degree section 
degrees.forEach(degree => appearOnScroll.observe(degree));
appearOnScroll.observe(degreeTitle);
appearOnScroll.observe(candBtn);