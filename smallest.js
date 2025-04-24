const heights = [65, 67, 85, 55, 57, 60, 75, 82];

function getMinHeight(numbers){
    let min = numbers[0];
    for(number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const minHeight = getMinHeight(heights);
console.log('Min value is:', minHeight);