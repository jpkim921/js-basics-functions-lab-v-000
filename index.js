// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  const hq = 42;
  return Math.abs(hq - blocks);
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(dist1, dist2 ) {
  return Math.abs(distanceFromHqInFeet(dist1) - distanceFromHqInFeet(dist2));
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let cost;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

  return cost;
}
