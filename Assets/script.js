/*psuedo comments

1.add event listener to button
2. assign variable to array
3.create 5 arrays with 4 strings in each array, each string is a guess option for each question there are 5 questions
4.Create condition if start button is clicked
5create orderd list using js
6.create div inside is a button using js add a class to it and appendChild a button to each list item use foreach
7.create div using js as the question use text content to add variable question1 ,question2, question3...so on
8.appendChild to div container under the question
9.if ordered list is clicked get the event.target, and get the data attr.
10.if data-atr is equal to the answer string, add 10 points and display "Correct" text content in a div that is created using js and give it a class
11.if data-atr is wrong or not equal to the answer string, deduct some time
12.if time === 0, it is game over text content then restart.
13.after each answer store a counter var and increment it, if it equals 5 then show the high scores function and enter name, then if name is entered show the highscores using function call and pass the arguments in
14.clear scores will set the text content of the ol li to blank*/


// rename each as options1, options2
const options1 = ['strings', 'alerts', 'booleans', 'numbers'];
const answer1 = 'alerts'
const options2 = ['quotes', 'curly braces', 'parenthesis', 'square brackets'];
const answer2 = 'parenthesis'
const options3 = ['numbers of strings', 'other arrays', 'booleans', 'all of the above'];
const answer3 = 'all of the above';
const options4 = ['commas', 'curly brackets', 'quotes', 'parenthesis'];
const answer4 = 'quotes';
const options5 = ['Javascript', 'terminal/bash', 'for loops', 'console.log'];
const answer5 = 'console.log';
var body = document.querySelector('body');

let questionListItem = ['', '', '', ''];

var score = 0;

var item = "a";

// Functions
var content = document.querySelector('#content');

questions = ['Commonly used Data Types Do not include...', 'condition in an if else statement is enclosed within', 'Arrays in Javascript can be used to Store _________', 'String Values Must Be Enclosed Within _________  When being assigned to Variables', 'A very useful tool during development is used to print out to debugger is called ___________'];
currentPage = 0;

scoreListItem = [];
var time = 100;


function nextScreen(questionsArray, optionsArray, answer, currentPage) {


    while (content.firstChild) {
        content.removeChild(content.firstChild);
        console.log('removed body children');
    }
    var heading = document.createElement('h1');
    content.appendChild(heading);
    var questionsHeadingHolder = document.querySelector('h1');
    questionsToBeApended = questionsHeadingHolder.textContent = questionsArray;
    var questionsDiv = document.createElement('div');
    content.appendChild(questionsDiv);
    questionsDiv.setAttribute('id', 'questionsDiv');
    var questionsOrderedList = document.createElement('ol');
    document.querySelector('#questionsDiv').appendChild(questionsOrderedList);
    var orderedListClass = document.querySelector('ol');
    orderedListClass.classList.add('lists');

    for (i = 0; i < optionsArray.length; i++) {
        var createdListItem = document.createElement('li')
        createdListItem.setAttribute('data-answer', answer);
        createdListItem.setAttribute('id', optionsArray[i]);
        questionsOrderedList.appendChild(createdListItem);
        document.querySelector('li').className = 'list-item-answer';
        document.getElementById(optionsArray[i]).textContent = optionsArray[i]

    }

    let selectedAnswer;
    orderedListClass.addEventListener("click", function(event) {

        selectedAnswer = event.target.getAttribute('id');
        alert(selectedAnswer);

        if (selectedAnswer === event.target.getAttribute('data-answer')) {
            alert("Correct");
            score += 10;
            actionAccordingToAnswer("Correct", currentPage, score, orderedListClass)
        } else {
            alert("Wrong");
            time -= 10;
            actionAccordingToAnswer("Incorrect", currentPage, score, orderedListClass)
        }
    })


}

function actionAccordingToAnswer(status, currentPage, score, orderedListClass) {
    var answerStatus = document.createElement('h2');
    orderedListClass.append(answerStatus);
    answerStatus.textContent = status;
    document.getElementById('updatedScores').textContent = score;
    setTimeout(function() {
        answerStatus.textContent = "";
    }, 2000);
    displayScreen(currentPage + 1)
}
// show scores function
function showScores(name) {
    while (content.firstChild) {
        alert();
        content.removeChild(content.firstChild);
    }
    var heading = document.createElement('h1');
    heading.textContent = "High Scores";
    content.appendChild(heading);
    var listOfScores = document.createElement('ol');
    topScore = document.createElement('li');

    content.appendChild(listOfScores);
    listOfScores.appendChild(topScore);
    topScore.textContent = "Player:" + name + "-SCORE:" + score;
    for (i = 0; i <= 3; i++) {
        scoreListItem = document.createElement('li');
        listOfScores.appendChild(scoreListItem);
    }
    clearButton = document.createElement("button");
    content.append(clearButton)
    clearButton.textContent = "Clear HighScores";
    clearButton.setAttribute("id", "clearButton")
    let clearButtonId = document.getElementById("clearButton");
    clearButtonId.addEventListener("click", function(event) {
        event.preventDefault();
        topScore.textContent = "";
    })
    let goBackButton = document.createElement("button");
    content.append(goBackButton);
    goBackButton.textContent = "Go Back";
    goBackButton.setAttribute("id", "backButton");
    let backButtonId = document.getElementById("backButton");
    backButtonId.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.reload();
    })
}

// gameover input score screen
function inputScoreGameFinished() {
    while (content.firstChild) {

        content.removeChild(content.firstChild);

    }
    var heading = document.createElement('h1');
    time = 0;
    content.appendChild(heading);
    heading.textContent = "Input Scores";
    var heading2score = document.createElement('h2');
    heading2score.textContent = "Your Score is: " + score;
    content.appendChild(heading2score);
    var inputElement = document.createElement('INPUT');

    inputElement.setAttribute("type", "text");

    inputElement.setAttribute("placeholder", "Enter your name");

    inputElement.setAttribute("id", "submitScoreInput");
    content.appendChild(inputElement);
    let inputButton = document.createElement('button');
    inputButton.setAttribute("id", "submitScoreButton");
    content.appendChild(inputButton);
    inputButton.textContent = "Submit";
    document.getElementById('submitScoreButton').addEventListener("click", function(event) {
        if (document.getElementById("submitScoreInput").value === "") {
            event.preventDefault();
            alert("Enter a proper name");
        } else {
            event.preventDefault();
            var name = submitScoreInput.value;
            showScores(name);
        }

    })

}


// Game start button click event listener funcion
document.getElementById('start').onclick = function(event) {
    event.preventDefault();
    currentPage = 1;
    timeInterval = setInterval(function() {
        time--;
        document.getElementById('time').textContent = time;
        if (time <= 0) {
            inputScoreGameFinished();
            clearInterval(timeInterval);
            // call the function display text box and display scores


        }
    }, 1000)
    displayScreen(1);
};


function displayScreen(currentPage) {
    if (currentPage === 1) {
        nextScreen(questions[0], options1, answer1, currentPage);

    } else if (currentPage === 2) {
        nextScreen(questions[1], options2, answer2, currentPage);
    } else if (currentPage === 3) {
        nextScreen(questions[2], options3, answer3, currentPage);
    } else if (currentPage === 4) {
        nextScreen(questions[3], options4, answer4, currentPage);
    } else if (currentPage === 5) {
        nextScreen(questions[4], options5, answer5, currentPage)
    } else if (currentPage === 6) {
        inputScoreGameFinished();
    }
}