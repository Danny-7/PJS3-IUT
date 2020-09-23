const counterTitle = document.querySelector('.counter__section > h1');
const counters = document.querySelector('.counters');
const countersNum = document.querySelectorAll('.count');
const countersDiv = document.querySelectorAll('.count__card');

import {
    CountUp
} from './countUp.js'

const counterOptions = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
};

// function to start counter up
const launchCounter = () => {
    countersNum.forEach(counter =>
        new CountUp(counter, counter.textContent, counterOptions)
        .start());
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