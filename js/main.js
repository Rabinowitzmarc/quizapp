
//array of questions and answers for the simpons quiz
var questions = [
  {
    question : "What is Homer Simpons middle name?",
    answer : "Jay"
  },
  {
    question : "What is the secret ingredient in a Flaming Homer/Moe?",
    answer : "Krusty-Brand cough syrup"
  },
  {
    question : "What is Patty and Selma Bouvier's favorite TV show?",
    answer : "MacGyver"
  }
];
//loop for cycling through questions.
for (var i = 0; i < questions.length; i++) {
  var question = questions[i].question//Pulls the questions from the object array

  var textQuestion = document.getElementById('question' + [i]);//grabs the id of the questions
  console.log(question,textQuestion)//tests the question in the console

  textQuestion.textContent = question;//prints the questions to the screen
};

function simponsFunction() {// function that is used to trigger ansers for the quiz
  var correct = 0;
  var incorrect = 0;

  for (var i = 0; i < questions.length; i++) {
    var answer = questions[i].answer;
    var textAnswer = document.getElementById('answer' + [i]);
    var guess = document.getElementById('answer' + [i]).value;
    var questionArea = document.getElementById('question' + [i]);

    if(answer == guess) {
			// update class on questionSpot
			questionArea.className = 'correct';
			// add one to correct
			correct++;

		} else {
			// update class on questionSpot
			questionArea.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values

	document.getElementById('correct').textContent = correct;
  var image = document.createElement("IMG");
  image.className = "imageClass";
  image.setAttribute("src", "img/giphy.webp")
  textQuestion.appendChild(image);
	document.getElementById('incorrect').textContent = incorrect;

}
