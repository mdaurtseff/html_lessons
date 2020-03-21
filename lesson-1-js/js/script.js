//let number = 5;

//console.log("Hello world");
//alert("Вход вопрещен !"); // модальное окно !

//let answer = confirm("Если ли вам 18+ ?");

//let answer = prompt("Если ли вам 18+ ?");
//console.log(answer);

/*let answers = [],
	questions = [
	"Как ваше имя ?",
	"Как ваше Фамилия ?",
	"Сколько вам лет ?"	
	];

	for (let i = 0; i < questions.length; i++){
 	answers[i] = prompt(questions[i]);
 	console.log(answers[i]);
	}*/
/*	let age = prompt("Сколько вам лет ?");

	if (age >= 18) {
		alert("Можно идти");
	} else {
		alert("рано ещё");
	}
*/
function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " , мне " + age + " лет и это моя первая программа !");

  	function checkAge() {

  		let agePers = prompt("Сколько вам лет ?")

  		if (agePers >= 18) {
  			alert("Можешь смотерть");
  		} else {
  			alert("Рано ещё");
  		}
  	}

	function showSkills() {

		let Skills = ["Html", "Css", "C++", "C"];

		for (let i = 0; i < Skills.length; i++) {
			document.writeln("Я владею : " + Skills[i] + "<br/>" );
		}
	}
  function calcPow(num) {
  	console.log(num ** 2);
  }
  	checkAge();
  	showSkills();
 	calcPow(4);
	}

myFirstApp("Marat", "15");