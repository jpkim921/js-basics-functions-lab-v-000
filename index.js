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
  return distance;
  let cost;

  // distance < 0 ? cost = 0 : cost = distance * 0.02

  switch (distance) {
    case distance > 2500:
      cost = "cannot travel that far";
      break;
    case distance > 2000:
      cost = 25;
      break;
    case distance < 400:
      cost = 0;
      break;
    default:
      cost = distance * 0.02;
      break;
  }

  return cost;
}
