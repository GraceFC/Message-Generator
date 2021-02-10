//genrate a random number
const randomNum = num => {
    return Math.floor(Math.random() * num);
}

const messagePool = {
    color: ['white', 'red', 'yellow', 'blue', 'orange', 'green'],
    food: ['eggs', 'sandwich', 'avocado', 'lynchee', 'apples', 'crabs'],
    exercising: ['running', 'pilates', 'playing tennis', 'swimming']
}