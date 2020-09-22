const counterTitle = document.querySelector('.counter__section > h1');
const counters = document.querySelector('.counters');
const countersDiv = document.querySelectorAll('.count__card');

// function to start counter up
const launchCounter = () => {
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    $('.count').addClass('animated fadeInDownBig');
    $('h3').addClass('animated fadeIn')
};

// trigger which launch launchCounter function when is intersecting 
const launch = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            launchCounter();
            observer.unobserve(entry.target);
        }
    });
});

// function which return an observer and take animation options
const appear = (options) => {
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


launch.observe(counters);

const titleAppear = appear({
    threshold: 0.2
});
titleAppear.observe(counterTitle);

const counterAppear = appear({
    threshold: 0.5
});

countersDiv.forEach(count => counterAppear.observe(count));