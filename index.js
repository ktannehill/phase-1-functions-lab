const scuberHqBlock = 42;

function distanceFromHqInBlocks(passengerBlock) {
    if(passengerBlock >= 42) {
        return passengerBlock - scuberHqBlock;
    } else {
        return scuberHqBlock - passengerBlock;
    }
};

function distanceFromHqInFeet(passengerBlock) {
    return distanceFromHqInBlocks(passengerBlock) * 264;
};

function distanceTravelledInFeet(start, destination) {
    if(start > destination) {
        return 264 * (start - destination);
    }
    return 264 * (destination - start);
};

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if(distanceInFeet <= 400) {
        return 0;
    } else if(distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if(distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};

console.log(calculatesFarePrice(43, 42));