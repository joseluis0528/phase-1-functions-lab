// Code your solution in this file!

const headquarters = 42;

function distanceFromHqInBlocks(number) {
    if (number > headquarters) {
        return number - headquarters;
    } else return headquarters - number;
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(number, headquarters) {
    if (number < headquarters) {
        return (headquarters - number) * 264;
    } else return (number - headquarters) * 264;
}


function calculatesFarePrice(number, headquarters) {
    let distance = distanceTravelledInFeet(number, headquarters);
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02; 
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else return "cannot travel that far";
}