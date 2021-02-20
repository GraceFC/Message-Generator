//genrate a random number
const randomNum = num => {
    return Math.floor(Math.random() * num);
}





const printMessage = () => {
    const messagePool = {
        color: ['white', 'red', 'yellow', 'blue', 'orange', 'green'],
        food: ['eggs', 'sandwich', 'avocado', 'lynchee', 'apples', 'crabs'],
        exercising: ['running', 'pilates', 'playing tennis', 'swimming']
    }
    const randomMessage = [];
    itemIDX = randomNum (3);
    if (itemIDX == 0) {
        let messageIDX = randomNum (messagePool.color.length);
        randomMessage.push(`This customer's favorite color is: ${messagePool.color[messageIDX]}`);
        return randomMessage;
    } else if (itemIDX == 1) {
        let messageIDX = randomNum (messagePool.food.length);
        randomMessage.push(`This customer's favorite food is: ${messagePool.food[messageIDX]}`);
        return randomMessage;
    } else if (itemIDX == 2) {
        let messageIDX = randomNum (messagePool.exercising.length);
        randomMessage.push(`This customer's favorite excercising: ${messagePool.exercising[messageIDX]}`);
        return randomMessage;
    } else {
        return "The customer didn't provide correct information.";
    }


    /*for (let item in messagePool) {
        let itemLength = messagePool[item].length;
        let messageIDX = randomNum (itemLength);
        switch (item) {
            case 'color':
                randomMessage.push(`This customer's favorite color is: ${messagePool[item][messageIDX]}`);
                return randomMessage;
                break;
            case 'food':
                randomMessage.push(`This customer's favorite food is: ${messagePool[item][messageIDX]}`);
                return randomMessage;
                break;
            case 'exercising':
                randomMessage.push(`This customer's favorite exercise is: ${messagePool[item][messageIDX]}`);
                return randomMessage;
                break;
            default:
                return "The customer didn't provide correct information.";
                break;
        }
    } */
}



console.log(printMessage());