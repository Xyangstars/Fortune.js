
const userInput = window.prompt('Do you want to see your fortune or run away, accept or retreat?');

function fortune (userInput, fortunes) {
    userInput = userInput.toLowerCase();
    fortunes = ['You will see popcorn flying', 'You will fall asleep soon', 'Get gud', 'There is a fly thinking of you', 'Love will find you soon'];
    if (userInput === 'accept') {
        console.log(fortunes[Math.floor(Math.random() * fortunes.length)]);
    } else {
        console.log("You're no fun!");
    }
};

fortune ('accept')

