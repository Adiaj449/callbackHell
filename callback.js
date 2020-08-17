function displayOne(num) {
    console.log(num);
    console.log("Happy Independence Day !!")
}

function displayTwo(num) {
    console.log(num);
    setTimeout(function () {
        displayOne(--num);
    }, 3000);
}

function displayThree(num) {
    console.log(num);
    setTimeout(function () {
        displayTwo(--num);
    }, 3000);
}

function displayFour(num) {
    console.log(num);
    setTimeout(function () {
        displayThree(--num);
    }, 3000);
}

function displayFive(num) {
    console.log(num);
    setTimeout(function () {
        displayFour(--num);
    }, 3000);
}

function displaySix(num) {
    console.log(num);
    setTimeout(function () {
        displayFive(--num);
    }, 3000);
}

function displaySeven(num) {
    console.log(num);
    setTimeout(function () {
        displaySix(--num);
    }, 3000);
}

function displayEight(num) {
    console.log(num);
    setTimeout(function () {
        displaySeven(--num);
    }, 3000);
}

function displayNine(num) {
    console.log(num);
    setTimeout(function () {
        displayEight(--num);
    }, 3000);
}

function displayTen(num) {
    console.log(num);
    setTimeout(function () {
        displayNine(--num);
    }, 3000);
    
}

let age = showDisplay();

function showDisplay() {
    let i =10;
    setTimeout(function () {
        displayTen(i);
    }, 3000);
}
