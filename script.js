'use strict';

var user = prompt('what is your name?');
    alert(' welcome, ' + user);

var game = confirm('would you like to play a guessing game?');
    if (game === true) {
        alert('okay! lets play!');
    } else {
        alert('well whatever, nevermind');
    }

var guess1 = prompt('answer yes, or no. did I used to live in Mississippi?').toLowerCase();
    if (guess1 === 'yes') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('oops! we must not have met, my southern charm is hard to miss');
    }

var guess2 = prompt('is snowbording my favorite athletic pastime?').toLowerCase();
    if (guess2 === 'yes') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('oh no! are you saying I look more like a skiier?!');
    }

var guess3 = prompt('am I currently attending codefellows?').toLowerCase();
    if (guess3 === 'yes') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('I wouldnt be able to quiz you if I wasnt ');
    }

var guess4 = prompt('did I work on board the Victoria Clipper?').toLowerCase();
    if (guess4 === 'yes') {
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('soory! what are you on aboot? I was an onboard attendant, eh');
    }

var guess5 = prompt('do I hope to make my mom proud?').toLowerCase();
    if (guess5 === 'yes') {
        // console.log('thats correct');
        alert('thats correct! thanks for playing,' + user + '. <3 LOVE YOU MOM!');
    } else {
        alert(' I do want to make my mom proud! <3 LOVE YOU MOM! thanks for playing ' + user);
    }