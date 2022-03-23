// Code your solution in this file!

const HQ = 42;
function distanceFromHqInBlocks(start){
  if (start >= HQ){
    return start - HQ;
  }
  return HQ - start;
}
//function parameter set to currentBlock in order to take in any value!
function distanceFromHqInFeet(start){
  //declared a varible to equal 1st function because it returns the # of blocks from HQ
  let numOfBlocks = distanceFromHqInBlocks(start);
  //this is going to take the return value of passed in fuction and multiply it by # of feet per block
   return numOfBlocks * 264;
 }
  
 function distanceTravelledInFeet(start, destination){
  let distanceInFeet =  start - destination;
    return Math.abs(distanceInFeet * 264);
  }
  //I learned the use of Math.abs! :)


  function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination) 
  let fare
     if (distance  < 400){
       return fare = 0
     }else if (distance > 400 && distance <= 2000) {
       let fare = distance - 400
       return fare * 0.02
     }else if (distance > 2000 && distance < 2500){
       return fare = 25
     }else if (distance > 2500) {
       return 'cannot travel that far'
     }
  return fare
   }