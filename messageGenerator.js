//genrate a random number
const randomNum = num => {
    return Math.floor(Math.random() * num);
}

const messagePool = {
    color: ['white', 'red', 'yellow', 'blue', 'orange', 'green'],
    food: ['eggs', 'sandwich', 'avocado', 'lynchee', 'apples', 'crabs'],
    exercising: ['running', 'pilates', 'playing tennis', 'swimming']
}

const randomMessage = [];

for (let item in messagePool) {
    itemLength = messagePool[item].length;
    messageIDX = random (itemLength);
    switch (item) {
        case 'color':
            return randomMessage.push(`This customer's favorite color is: ${messagePool[item][messageIDX]}`);
            break;
        case 'food':
            return randomMessage.push(`This customer's favorite food is: ${messagePool[item][messageIDX]}`);
            break;
        case 'exercising':
            return randomMessage.push(`This customer's favorite exercise is: ${messagePool[item][messageIDX]}`);
            break;
        default:
            return "The customer didn't provide correct information."
            break;
    }

}