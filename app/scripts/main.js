
var pos = 0, correct = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC;
var studentAnswers = [], correctAnswers = [];
var questions = [
    [ "How many states are in the United States?", "32", "48", "50", "C" ],
    [ "What is the capital of California?", "Los Angeles", "San Francisco", "Sacramento", "C" ],
    [ "Who was the first President of the United States?", "George Washington", "Abraham Lincoln", "Thomas Jefferson", "A" ],
    [ "What three colors make up the flag of the United States?", "Red, White & Orange", "Red, White & Green", "Red, White & Blue", "C" ],
    [ "What is the capital of the United States?", "Los Angeles", "Washington D.C.", "New York", "B" ],
    [ "What is the national anthem of the United States?", "The Star Spangled Banner", "America the Beautiful", "Happy Birthday", "A" ],
    [ "What is the most populous city in the United States?", "Los Angeles", "Miami", "New York", "C" ],
    [ "What is the largest state in the United States?", "Texas", "Alaska", "California", "B" ],
    [ "What is the largest lake in the United States?", "Lake Powell", "Lake Superior", "Great Salt Lake", "B" ],
    [ "What is the capital of Utah?", "Salt Lake City", "Provo", "Ogden", "A" ],
];

for ( var i = 0; i < questions.length; i++ ) {
    correctAnswers.push( questions[ i ][ 4 ]);
}

function _( x ) {
    return document.getElementById( x );
}

function renderQuestion() {
    test = _( 'test' );

    if ( pos >= questions.length ) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct!</h2><br>";
        test.innerHTML += "<p>You got " + Math.round( ( correct / questions.length ) * 100 ) + "% of the questions right!</p>";
        test.innerHTML += "<ul><h4>Your answers:</h4><li> " + studentAnswers + "</li></ul>";
        test.innerHTML += "<ul><h4>Correct answers:</h4><li> " + correctAnswers + "</li></ul>";
        _( 'test_status' ).innerHTML = "Test Complete";
        pos = 0;
        correct = 0;
        return false;
    }

    _( 'test_status' ).innerHTML = "Question " + ( pos + 1 ) + " of " + questions.length;
    question = questions[ pos ][ 0 ];
    choiceA = questions[ pos ][ 1 ];
    choiceB = questions[ pos ][ 2 ];
    choiceC = questions[ pos ][ 3 ];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A' class='options'> " + choiceA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B' class='options'> " + choiceB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C' class='options'> " + choiceC + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()' class='btn btn-primary'>Submit Answer</button>";
}

function checkAnswer() {
    choices = document.getElementsByName( 'choices' );
    for ( var i = 0; i < choices.length; i++ ) {
        if ( choices[ i ].checked ) {
            choice = choices[ i ].value;
        }
    }

    if ( choice === questions[ pos ][ 4 ] ) {
        studentAnswers.push( choice );
        correct++;
    }

    pos++;
    renderQuestion();
}

window.addEventListener( 'load', renderQuestion, false );
console.log( studentAnswers );
