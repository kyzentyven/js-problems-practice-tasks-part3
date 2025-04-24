const heights = [65, 67, 85, 55, 57, 60, 75, 82];

function getMaxHeight(numbers){
    let max = numbers[0];
    for(number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

const maxHeight = getMaxHeight(heights);
console.log('Max value is:', maxHeight);