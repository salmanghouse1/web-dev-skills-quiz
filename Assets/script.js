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

const answers1 = ['strings', 'alerts', 'booleans', 'numbers'];
const answers2 = ['quotes', 'curly braces', 'parenthesis', 'square brackets'];
const answers3 = ['numbers of strings', 'other arrays', 'booleans', 'all of the above'];
const answers4 = ['commas', 'curly brackets', 'quotes', 'parenthesis'];

var body = document.querySelector('body');

let questionListItem = ['', '', '', ''];

var score = 0;

var item = "a";

// Functions
var content = document.querySelector('#content');

questions = ['Commonly used Data Types Do not include...', '', '', '', ''];
currentPage = 0;

var score = 0;

var time = 100;

function nextScreen(questionsArray, answersArray) {


    while (document.querySelector('#content').firstChild) {
        document.querySelector('#content').removeChild(document.querySelector('#content').firstChild);
        console.log('removed body children');
    }
    var heading = document.createElement('h1');
    document.querySelector('#content').appendChild(heading);
    var questionsHeadingHolder = document.querySelector('h1');
    questionsToBeApended = questionsHeadingHolder.textContent = questionsArray;
    var questionsDiv = document.createElement('div');
    document.querySelector('#content').appendChild(questionsDiv);
    questionsDiv.setAttribute('id', 'questionsDiv');
    var questionsOrderedList = docgument.createElement('ol');
    document.querySelector('#questionsDiv').appendChild(questionsOrderedList);
    var orderedListClass = document.querySelector('ol');
    orderedListClass.classList.add('lists');
    for (i = 0; i < answersArray.length; i++) {
        var createdListItem = document.createElement('li');
        createdListItem.setAttribute('data-answer', answersArray[i]);
        createdListItem.setAttribute('id', answersArray[i]);
        questionsOrderedList.appendChild(createdListItem);
        document.querySelector('li').className = 'list-item-answer';
        document.getElementById(answersArray[i]).textContent = answersArray[i]

    }


    orderedListClass.addEventListener("click", function() {

        selectedAnswer = event.target.getAttribute('data-answer');
        alert(selectedAnswer);
        if (selectedAnswer === "alerts") {
            alert("Correct");


            var answerStatus = document.createElement('h2');
            orderedListClass.append(answerStatus);

            answerStatus.textContent = "Correct";
            setTimeout(function() {
                answerStatus.textContent = "";
            }, 400);
            return selectedAnswerCorrect;
        } else {
            alert("Wrong");
            return selectedAnswer;

        }

    })


}

function recalculateScoreOrTime() {

    if (selectedAnswerCorrect) {
        var score = score + 10;

    } else {

        var time = time - 20;
    }

}






document.getElementById('start').onclick = function() {
    event.preventDefault;

    console.log("clicked");
    currentPage = 1;

    setInterval(function() {
        time--;
        document.getElementById('time').textContent = time;
    }, 1000)

    if (currentPage === 1) {
        nextScreen(questions[0], answers1);
        recalculateScoreOrTime(selectedAnswer);

        //add conditions in nextScreen Function
        currentPage = 2;
    } else if (currentPage === 2) {
        nextScreen(questions[1], answers2);
        currentPage = 3;
    }
};