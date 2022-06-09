// Code your solution in this file!
let scuberHqStreet = 42;

let distanceInBlocks;
function distanceFromHqInBlocks(distanceInBlocks) {
    if(distanceInBlocks >42){
        return (distanceInBlocks - scuberHqStreet)
    }else {
        return scuberHqStreet-distanceInBlocks
    }
}
distanceFromHqInBlocks()


let distanceInFeet;
function distanceFromHqInFeet(distanceInBlocks) {
    if(distanceInBlocks >42){
        return (distanceInBlocks - scuberHqStreet)*264
    }else {
        return (scuberHqStreet - distanceInBlocks)*264
    }
    
}
distanceFromHqInFeet()




function distanceTravelledInFeet(start, destination) {
    if (destination > start){
        return (destination - start)*264
    }else{
        return (start - destination)*264
    }
}
distanceTravelledInFeet()





function calculatesFarePrice(start, destination) {
    const distanceVariance = distanceTravelledInFeet(start, destination);
    if (distanceVariance <400){
        return distanceVariance*0
    }else if(distanceVariance >400 && distanceVariance <2000){
        return (distanceVariance - 400)*0.02
    }else if(distanceVariance >2000 && distanceVariance <2500){
        return 25
    }else {
        return "cannot travel that far"
    }
}
calculatesFarePrice()