const questions = [
{
	question: "Method overloading is done during _______",
	answers: [
	{text:"Program compilation", correct: true},
	{text:"Dynamic binding", correct: false},
	{text:"Late binding", correct: false},
	{text:"Runtime", correct: false}
	]
},

{
	question: "At run-time, a Java program is nothing more than objects 'talking' to ___________",
	answers: [
	{text:"Other classes", correct: false},
	{text:"Other binders", correct: false},
	{text:"Other objects", correct: true},
	{text:"Other methods", correct: false}
	]
},

{
	question: "In OOP, the concept of IS-A is based on",
	answers: [
	{text:"Interface implementation", correct: false},
	{text:"Class inheritance", correct: true},
	{text:"Both", correct: false},
	{text:"None", correct: false}
	]
},

{
	question: "The relation between the Car and Owner or BankAccount and Customer is an example of",
	answers: [
	{text:"Aggregation", correct: false},
	{text:"Composition", correct: false},
	{text:"Association", correct: true},
	{text:"None", correct: false}
	]
},

{
	question: "Polymorphism is one interface with __________",
	answers: [
	{text:"Single record", correct: false},
	{text:"Single method", correct: false},
	{text:"Multiple record", correct: false},
	{text:"Multiple methods", correct: true}
	]
},

{
	question: "Method overloading is done during _______",
	answers: [
	{text:"Program compilation", correct: true},
	{text:"Dynamic binding", correct: false},
	{text:"Late binding", correct: false},
	{text:"Runtime", correct: false}
	]
},

{
	question: "Ad hoc polymorphism is ____________",
	answers: [
	{text:"Method overriding", correct: true},
	{text:"Dynamic binding", correct: false},
	{text:"Method overloading", correct: false},
	{text:"Subclassing polymorphism", correct: false}
	]
},

{
	question: "Which concept of Java is a way of converting real world objects in terms of class?",
	answers: [
	{text:"Polymorphism", correct: false},
	{text:"Abstraction", correct: true},
	{text:"Inheritance", correct: false},
	{text:"Encapsulation", correct: false}
	]
},

{
	question: "What is it called if an object has its own lifecycle and there is no owner?",
	answers: [
	{text:"Association", correct: true},
	{text:"Encapsulation", correct: false},
	{text:"Aggregation", correct: false},
	{text:"Composition", correct: false}
	]
},

{
	question: "Constructors are used to:",
	answers: [
	{text:"To build a user interface", correct: false},
	{text:"Initialize a newly created object", correct: true},
	{text:"To create a sub-class", correct: false},
	{text:"Free memory", correct: false}
	]
}
] ;

const answerButtons = document.getElementById("ans-but") ;
const nextButton = document.getElementById("next") ;
const questionElement = document.getElementById("question") ;

let currentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz() {
	currentQuestionIndex = 0 ;
	score = 0 ;
	nextButton.innerHTML = "Next" ;
	showQuestion() ;
}

function showQuestion() {
	resetState() ;
	let currentQuestion = questions[currentQuestionIndex] ;
	let questionNo = currentQuestionIndex + 1 ;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question ;

	currentQuestion.answers.forEach(answer =>{
		const button = document.createElement("button") ;
		button.innerHTML = answer.text ;
		button.classList.add("btn") ;
		answerButtons.appendChild(button) ;
		if(answer.correct){
			button.dataset.correct = answer.correct ;
		}
		button.addEventListener("click", selectAnswer) ;
	}) ;
}

function resetState() {
	nextButton.style.display = "none" ;
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild) ;
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target ;
	const isCorrect = selectedBtn.dataset.correct === "true" ;
	if(isCorrect){
		selectedBtn.classList.add("correct") ;
		score++ ;
	}else{
		selectedBtn.classList.add("incorrect") ;
	}
	Array.from(answerButtons.children).forEach(button =>{
		if(button.dataset.correct === "true"){
			button.classList.add("correct")
		} 
		button.disabled = true ;
	}) ;
	nextButton.style.display = "block" ;
}

function showScore() {
	resetState() ;
	questionElement.innerHTML = `you scored ${score} out of ${questions.length}!` ;
	nextButton.innerHTML = "Play Again" ;
	nextButton.style.display = "block" ;
}

function handleNextButton() {
	currentQuestionIndex++ ;
	if (currentQuestionIndex < questions.length) {
		showQuestion() ;
	}else{
		showScore() ;
	}
}
nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < questions.length){
		handleNextButton() ;
	}else{
		startQuiz() ;
	}
})
startQuiz();