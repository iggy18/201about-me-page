'use strict';

var user = prompt('what is your name?');
    alert(' welcome, ' + user);

var game = confirm('would you like to play a guessing game?');
    if (game === true) {
        alert('okay! lets play!');
    } else {
        alert('well whatever, nevermind');
    }

var guess1 = prompt('where did I live before seattle?').toLowerCase();
    if (guess1 === 'mississippi') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('oops! the correct answer was Mississippi');
    }

var guess2 = prompt('what is my favorite athletic pastime?').toLowerCase();
    if (guess2 === 'snowboarding') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('oh no! the correct answer is snowboarding');
    }

var guess3 = prompt('what coding school am I attending?').toLowerCase();
    if (guess3 === 'codefellows') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('bummer! the correct answer is codefellows');
    }

var guess4 = prompt('where did I work before I came to codefellows?').toLowerCase();
    if (guess4 === 'victoria clipper') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('soory! the correct answer is victoria clipper, eh');
    }

var guess5 = prompt('who do I hope to make proud?').toLowerCase();
    if (guess5 === 'mom') {
        // console.log('thats correct');
        alert('thats correct! thanks for playing, ' + user);
    } else {
        alert('the correct answer is my mom <3 thanks for playing, ' + user);
    }