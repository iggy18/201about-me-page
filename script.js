'use strict';

var score = 0;

var user = prompt('what is your name?');
    alert(' welcome, ' + user);

var game = confirm('would you like to play a guessing game?');
    if (game === true) {
        alert('okay! lets play!');
    } else {
        alert('well whatever, nevermind');
    }

function question1() {
var guess1 = prompt('answer yes, or no. did I used to live in Mississippi?').toLowerCase();
    if (guess1 === 'yes') {
        score = score + 1;
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('oops! we must not have met, my southern charm is hard to miss');
    }
}

question1();

function question2() {
var guess2 = prompt('is snowbording my favorite athletic pastime?').toLowerCase();
    if (guess2 === 'yes') {
        score = score + 1;
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('oh no! are you saying I look more like a skiier?!');
    }
}

question2();

function question3() {
var guess3 = prompt('am I currently attending codefellows?').toLowerCase();
    if (guess3 === 'yes') {
        score = score + 1;
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('I wouldnt be able to quiz you if I wasnt ');
    }
}

question3();

function question4() { 
var guess4 = prompt('did I work on board the Victoria Clipper?').toLowerCase();
    if (guess4 === 'yes') {
        score = score + 1;
        // console.log('thats correct');
        alert('thats correct!');
    } else {
        alert('soory! what are you on aboot? I was an onboard attendant, eh');
    }
}

question4();

function question5() {
var guess5 = prompt('do I hope to make my mom proud?').toLowerCase();
    if (guess5 === 'yes') {
        score = score + 1;
        // console.log('thats correct');
        alert('thats correct! thanks for playing, ' + user + '. <3 LOVE YOU MOM!');
    } else {
        alert(' I do want to make my mom proud! <3 LOVE YOU MOM! thanks for playing ' + user);
    }
}

question5();

// var number = Math.floor(Math.random() * 10 + 1);
// for (var i = 0; i < 4 ; i++) {
//     var game2 = parseInt(prompt ('guess a number between 1 and 10'));
//     if ( game2 === number ) {
//         alert('thats correct!');
//         score = score + 1;
//         break;
//     } else if ( game2 < number ) {
//         alert('too low!');
//     } else if (game2 > number) {
//         alert('too high');
//     }  else {
//         alert('the correct answer was ' + number);
//     }
// }

function question6() {
var correctNumber = Math.floor(Math.random() * 10 + 1);
var guesses = 0;
while (guesses <= 4) {
    var game2 = parseInt(prompt ('guess a number between 1 and 10'));
    if ( game2 === correctNumber ) {
        alert('thats correct!');
        score = score + 1;
        break;
    }  else if (guesses === 4){
        alert('the correct answer was ' + correctNumber);
    } else if ( game2 < correctNumber ) {
        alert('too low!');
    } else if (game2 > correctNumber) {
        alert('too high');
    }
    guesses++
}

}

question6();

function question7() {
var ray = ['eyes', 'nose', 'mouth', 'lips', 'ears', 'beard', 'freckles', 'mole', 'scar', 'pimple', 'pimples']
// var count = 0

for (var i = 0; i < 6; i++) {
    var game3 = prompt(' what feature can you find on a face?');
    if (ray.includes(game3.toLowerCase())) {
        alert('thats correct!');
        score = score + 1;
        break;
    } else if (i === 5 && !ray.includes(game3.toLowerCase())) {
        alert('you ran out of guesses, these were the answers: eyes, nose, mouth, lips, ears, beard, freckles, mole, scar, pimple, pimples');
    } else {
        alert('on what planet?');
    }

}
}
question7();

alert('congrats! youre done answering questions. you got ' + score + ' correct answers!')
