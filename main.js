"use strict";

//https://codepen.io/mmadeira/pen/YWZdVR
//https://codepen.io/ljc-dev/pen/oNbyeVv


const fortune = [{
		title: "база Мельница",
		foto: "./img/uchasniki/1.jpg",
		content: "Поначалу план ЭТОГО критиковали местные консервативные партии, утверждая, что ЭТО противоречит лошадиной и человеческой природе. Однако к шестидесятым годам и они признали правоту оппонентов, да и лошади перестали быть актуальными. Назовите ЭТО.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на первый вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Мичуринское",
		foto: "./img/uchasniki/2.jpg",
		content: "В биографическом фильме австриец говорит, что только ненормальные могут заниматься работой, где каждый год двое из двух десятков погибают, пытаясь оставить след в истории. Назовите этого австрийца.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 2 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Ополье",
		foto: "./img/uchasniki/3.jpg",
		content: "Видео вопрос.",
		showVideo: " Смотреть 🎬",
		video: "https://player.vimeo.com/external/406568164.hd.mp4?s=e4db568d7ccf71c87c63fb38ee1848280072bb71&profile_id=172&oauth2_token_id=57447761",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ...",
		showVideoAnswer: "Смотреть ответ 🎬",
		videoAnswer: "https://player.vimeo.com/external/406568164.hd.mp4?s=e4db568d7ccf71c87c63fb38ee1848280072bb71&profile_id=172&oauth2_token_id=57447761",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Ропша",
		foto: "./img/uchasniki/4.jpg",
		content: "Он живёт в столице. Ведёт борьбу с несправедливостью. Курит трубку. Хотя и любит читать, но имеет пробелы в бытовых знаниях — например, однажды оторвал от судна якорь на металлолом. Назовите этого персонажа.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 4 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Рощина",
		foto: "./img/uchasniki/5.jpg",
		content: "Марка выпускаемого в России пластыря отсылает к бренду, который появился в конце девятнадцатого века благодаря фармацевту. Назовите этот бренд.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 5 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Лагоново",
		foto: "./img/uchasniki/6.jpg",
		content: "Отсутствие у НЕГО отличительной детали скромно оправдали неуместностью и тем, что сложная форма добавляла бы полтора цента к стоимости производства. Как звали сына ЕГО создателя?",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 6 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Приморск",
		foto: "./img/uchasniki/1.jpg",
		content: "Вычурные небоскрёбы Дубая напомнили популярному у урбанистов Яну Гейлу ИХ. Назовите московский завод, который специализировался на НИХ.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 7 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "база Александровская",
		foto: "./img/uchasniki/2.jpg",
		content: "В одной миниатюре конструктор показывает владельцу команды прототипы скоростных болидов, а тот не верит в их перспективы на трассе и задаёт вопрос — цитату из известного «Диалога», в котором она относится к одежде. Воспроизведите цитату.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 8 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "Блиц",
		foto: "./img/uchasniki/3.jpg",
		content: "",
		showVideo: "",
		video: "",
		contentBlits: "1 Арабский учёный Ибн аль-Хайса́м был уверен, что регулирование поможет обеспечить урожай круглый год.  Ответьте: что именно делать?",
		contentBlits2: "2 Что регулирование поможет обеспечить урожай круглый год.  Ответьте: что именно делать?",
		contentBlits3: "3 Учёный Ибн аль-Хайса́м был уверен, что регулирование поможет обеспечить урожай круглый год.  Ответьте: что именно делать?",
		answer: "",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "ответ на 1 вопрос Блиц",
		answerBlits2: "ответ на 2 вопрос Блиц",
		answerBlits3: "ответ на 3 вопрос Блиц",
		nextquestion: "Далее..."
	},
	{
		title: "база Б. Ижора",
		foto: "./img/uchasniki/4.jpg",
		content: "Видео вопрос.",
		showVideo: " Смотреть 🎬",
		video: "https://player.vimeo.com/external/406568164.hd.mp4?s=e4db568d7ccf71c87c63fb38ee1848280072bb71&profile_id=172&oauth2_token_id=57447761",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ...",
		showVideoAnswer: "Смотреть ответ 🎬",
		videoAnswer: "https://player.vimeo.com/external/406568164.hd.mp4?s=e4db568d7ccf71c87c63fb38ee1848280072bb71&profile_id=172&oauth2_token_id=57447761",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
	{
		title: "Супер Блиц",
		foto: "./img/uchasniki/5.jpg",
		content: "",
		showVideo: "",
		video: "",
		contentBlits: "1 Не все участники похищения А́льдо Мо́ро были знакомы друг с другом. Поэтому в ходе операции использовали ЕЁ. Альбе́рта Ферре́тти, недавно работавшая над ЕЁ обновлением, заявила, что гордится возможностью демонстрировать креативность и элегантность по всему миру. Назовите ЕЁ.",
		contentBlits2: "2 Не все участники похищения А́льдо Мо́ро были знакомы друг с другом. Поэтому в ходе операци",
		contentBlits3: "3 Гордится возможностью демонстрировать креативность и элегантность по всему миру. Назовите ЕЁ.",
		answer: "",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "ответ на 1 вопрос Супер Блиц",
		answerBlits2: "ответ на 2 вопрос Супер Блиц",
		answerBlits3: "ответ на 3 вопрос Супер Блиц",
		nextquestion: "Далее..."
	},
	{
		title: "база Ломоносов",
		foto: "./img/uchasniki/6.jpg",
		content: "В 1996 году на телеканале Fox создали технологию, позволявшую приделывать к НЕЙ что-то вроде хвоста кометы. Назовите ЕЁ.",
		showVideo: "",
		video: "",
		contentBlits: "",
		contentBlits2: "",
		contentBlits3: "",
		answer: "ответ на 12 вопрос",
		showVideoAnswer: "",
		videoAnswer: "",
		answerBlits: "",
		answerBlits2: "",
		answerBlits3: "",
		nextquestion: ""
	},
]



let riggedNbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


//https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

riggedNbArr = shuffle(riggedNbArr);



console.log(riggedNbArr);

const hoursHand = document.querySelector(".hoursHand");
const minsHand = document.querySelector(".minsHand");
const secsHand = document.querySelector(".secsHand");
const clock = document.querySelector(".clock");
const center = document.querySelector(".center");
const roulette = document.querySelector(".roulette");
const startBtn = document.querySelector(".startBtn");
const resultContainer = document.querySelector(".resultContainer");
const backBtn = document.querySelector(".backBtn");
const scoringWrp = document.querySelector(".scoring_wrp");
const resultTitle = document.querySelector(".resultTitle");
const resultBlits = document.querySelector(".resultBlits");
const resultBlits2 = document.querySelector(".resultBlits2");
const resultBlits3 = document.querySelector(".resultBlits3");
const resultText = document.querySelector(".resultText");
const answerText = document.querySelector(".answerText");
const videoBlock = document.querySelector(".video_block");
const videoWrp = document.querySelector("#video_question");
const videoAnswerWrp = document.querySelector("#video_answer");
const answerBlits = document.querySelector(".answerBlits");
const answerBlits2 = document.querySelector(".answerBlits2");
const answerBlits3 = document.querySelector(".answerBlits3");
const showQuestionBtnBlits2 = document.querySelector(".show_questionBtnBlits2");
const showQuestionBtnBlits3 = document.querySelector(".show_questionBtnBlits3");
const musicKnopkaNaChasah = document.querySelector(".music-knopka-na-chasah");
const gong = document.querySelector("#gong-id");
const playGong = document.querySelector("#play_gong-id");
const musicShowQuestionBtn = document.querySelector(".music_show_question");
const musicShowQuestionBtn2 = document.querySelector(".music_show_question2");
const musicShowQuestionBtn3 = document.querySelector(".music_show_question3");
const musicShowAnswerBtn = document.querySelector(".music_show_answer");
const musicShowAnswerBtn2 = document.querySelector(".music_show_answer2");
const musicShowAnswerBtn3 = document.querySelector(".music_show_answer3");
const answerBtnBlits2 = document.querySelector(".answerBtnBlits2");
const answerBtnBlits3 = document.querySelector(".answerBtnBlits3");
const nextquestion = document.querySelector(".nextquestion");
const showVideoQuestion = document.querySelector(".show-video_question");
const showVideoAnswer = document.querySelector(".show-video_answer");
const nums = document.querySelectorAll("[class*='num']");
const clockUnit = document.querySelectorAll("[class*='clock_unit']");
const numWhiteArrow = document.querySelector(".numWhite_arrow");
const numWhite = document.querySelector(".numWhite");
const fotoPeople = document.querySelector("#foto_people");


let isRoulette = false;
let rouletteHandDeg = 0;
let randNb = 0;
let rolling = false;

const isSummerTime = () => moment().isDST();
let myInterval = setInterval(() => updateClock(), 1000);

const updateCenter = () => {
	if (!isRoulette) {
		center.classList.add("centerClock");
		center.classList.remove("centerRoulette");
	} else {
		center.classList.add("centerRoulette");
		center.classList.remove("centerClock");
	}
}


const toggleResultContainer = () => {
	if (resultContainer.classList.contains("showResultContainer")) {
		resultContainer.classList.add("hideResultContainer");
		resultContainer.classList.remove("showResultContainer");
		zvukZakritiaOkna.play();
		resultText.style.display = 'none';
		videoWrp.style.display = 'none';
		videoAnswerWrp.style.display = 'none';
		resultBlits.style.display = 'none';
		resultBlits2.style.display = 'none';
		resultBlits3.style.display = 'none';
		answerText.style.display = 'none';
		answerBlits.style.display = 'none';
		answerBlits2.style.display = 'none';
		answerBlits3.style.display = 'none';
		nextquestion.style.display = 'none';
		showVideoQuestion.style.display = 'none';
		showVideoAnswer.style.display = 'none';
		showQuestionBtnBlits2.style.display = 'none';
		showQuestionBtnBlits3.style.display = 'none';
		answerBtnBlits2.style.display = 'none';
		answerBtnBlits3.style.display = 'none';
		videoWrp.pause();
		videoAnswerWrp.pause();

	} else {
		resultContainer.classList.add("showResultContainer");
		resultContainer.classList.remove("hideResultContainer");
		zvPoiavleniaOkna();
	}
}

const updateClock = () => {
	if (isRoulette) return;

	const date = new Date();

	const secs = date.getSeconds();
	const secsDeg = secs / 60 * 360 + 90;
	secsHand.style.transform = `rotate(${secsDeg}deg)`;

	const mins = date.getMinutes();
	const minsDeg = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
	minsHand.style.transform = `rotate(${minsDeg}deg)`;
	let hours = date.getHours();
	if (isSummerTime()) {
		hours--;
		if (hours < 0) hours = 23;
	}
	const hoursDeg = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
	hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}

updateClock();

//add centerClock animation class
updateCenter();

const handleGameEnded = () => {
	console.log("end", rouletteHandDeg);
	showResult();
	//reset
	rouletteHandDeg = 90;
}

const showResult = () => {
	let finalNb = 0;
	let result = rouletteHandDeg % 360;
	//decrease result by 15 deg bc of numbers angle.
	result += 15;
	if (result > 360) {
		result -= 360;
	}
	console.log("result", result);
	if (result <= 30) {
		finalNb = 9;
	
	} else if (result <= 60) {
		finalNb = 10;
	
	} else if (result <= 90) {
		finalNb = 11;
	
	} else if (result <= 120) {
		finalNb = 12;

	} else if (result <= 150) {
		finalNb = 1;
	
	} else if (result <= 180) {
		finalNb = 2;
	
	} else if (result <= 210) {
		finalNb = 3;
	
	} else if (result <= 240) {
		finalNb = 4;
	
	} else if (result <= 270) {
		finalNb = 5;
	
	} else if (result <= 300) {
		finalNb = 6;
	
	} else if (result <= 330) {
		finalNb = 7;
	
	} else {
		finalNb = 8;

	}
	console.log("finalNb", finalNb);
	$('.num'+ finalNb).addClass('numWhite_arrow'); 
	$('.num'+ finalNb).removeClass('numWhite');


	//update nb and text
	resultTitle.innerHTML = ` Вопрос № ${finalNb} - <i>${fortune[finalNb - 1].title}</i>`;
	fotoPeople.src = `${fortune[finalNb - 1].foto}`;
	resultText.innerHTML = `${fortune[finalNb - 1].content}`;
	showVideoQuestion.innerHTML = `<i>${fortune[finalNb - 1].showVideo}</i>`; //текст показать видеовопрос
	videoWrp.src = `${fortune[finalNb - 1].video}`; // видео вопрос
	resultBlits.innerHTML = `${fortune[finalNb - 1].contentBlits}`;
	resultBlits2.innerHTML = `${fortune[finalNb - 1].contentBlits2}`;
	resultBlits3.innerHTML = `${fortune[finalNb - 1].contentBlits3}`;
	answerText.innerHTML = `${fortune[finalNb - 1].answer}`;
	showVideoAnswer.innerHTML = `<i>${fortune[finalNb - 1].showVideoAnswer}</i>`; //текст показать видеоответ
	videoAnswerWrp.src = `${fortune[finalNb - 1].videoAnswer}`; // видео ответ
	answerBlits.innerHTML = `${fortune[finalNb - 1].answerBlits}`;
	answerBlits2.innerHTML = `${fortune[finalNb - 1].answerBlits2}`;
	nextquestion.innerHTML = `${fortune[finalNb - 1].nextquestion}`;

	setTimeout(() => {
		toggleResultContainer();
	}, 500);
	//delay in case player push button before result popping up
	setTimeout(() => {
		rolling = false;
	}, 1000);

}

// пауза, продолжить для сет таймаута

// конец

const rotateHandToTop = () => {
	if (rouletteHandDeg === 90 || rouletteHandDeg === 450) return;
	if (rouletteHandDeg > 90 && rouletteHandDeg < 270) {
		rouletteHandDeg--;
	} else {
		rouletteHandDeg++;
	}
	secsHand.style.transform = `rotate(${rouletteHandDeg}deg)`;
	setTimeout(() => rotateHandToTop(), 1);
}

const updateGameHand = () => {

	secsHand.style.transform = `rotate(${rouletteHandDeg}deg)`;

	if (rouletteHandDeg < 3000) {
		rouletteHandDeg += 50;
		setTimeout(() => updateGameHand(), 26);
	} else if (rouletteHandDeg < 3500 + randNb / 1.5) {
		rouletteHandDeg += 20;
		setTimeout(() => updateGameHand(), 27);
	} else if (rouletteHandDeg < 3700 + randNb / 1.4) {
		rouletteHandDeg += 10;
		setTimeout(() => updateGameHand(), 28);
	} else if (rouletteHandDeg < 3900 + randNb / 1.3) {
		rouletteHandDeg += 8;
		setTimeout(() => updateGameHand(), 29);
	} else if (rouletteHandDeg < 4000 + randNb / 1.25) {
		rouletteHandDeg += 6;
		setTimeout(() => updateGameHand(), 30);
	} else if (rouletteHandDeg < 4400 + randNb / 1.2) {
		rouletteHandDeg += 3;
		setTimeout(() => updateGameHand(), 31);
	} else if (rouletteHandDeg < 4450 + randNb / 1.2) {
		rouletteHandDeg += 1;
		setTimeout(() => updateGameHand(), 32);
	} else if (rouletteHandDeg < 4500 + randNb / 1.2) {
		rouletteHandDeg += 1;
		setTimeout(() => updateGameHand(), 33);
	} else if (rouletteHandDeg < 4500 + randNb / 1.15) {
		rouletteHandDeg += 1;
		setTimeout(() => updateGameHand(), 34);
	} else if (rouletteHandDeg < 4500 + randNb / 1.1) {
		rouletteHandDeg += 1;
		setTimeout(() => updateGameHand(), 35);
	} else if (rouletteHandDeg < 4500 + randNb / 1.05) {
		rouletteHandDeg += 1;
		setTimeout(() => updateGameHand(), 36);
	} else if (rouletteHandDeg < 4500 + randNb) {
		rouletteHandDeg += 1;
		setTimeout(() => updateGameHand(), 37);
	} else {
		//game finished
		handleGameEnded();
	}
}


const startGame = () => {
	if (!isRoulette) return;
	if (rolling) return;
	rolling = true;
	//rigged randNb
	if (riggedNbArr.length > 0) {
		const riggedNb = riggedNbArr.shift();
		const positive = Math.floor(Math.random() * 2);
		let randFactor = Math.floor(Math.random() * 12);
		if (!positive) randFactor *= -1;
		randNb = riggedNb * 30 - 90 + randFactor;
		console.log("riggedNb", riggedNb);


	} else {
		//update randNb
		randNb = Math.floor(Math.random() * 360);

	}

	//start rolling 
	updateGameHand();
}

const showGame = () => {
	if (isRoulette) return;

	isRoulette = true;

	//show roulette
	roulette.classList.add("showRoulette");

	//hide hours and mins
	hoursHand.classList.add("hideHand");
	minsHand.classList.add("hideHand");

	//rotate secsHands to top
	const date = new Date();
	const secs = date.getSeconds();
	const secsDeg = secs / 60 * 360 + 90;
	rouletteHandDeg = secsDeg;
	rotateHandToTop();

	//change nums color to white
	nums.forEach(num => num.classList.add("numWhite_arrow"));
	nums.forEach(num => num.classList.add("numWhite"));
	nums.forEach(num => num.classList.add("[class*='clock_unit']"));


	//update center
	updateCenter();

	//show start game button
	startBtn.classList.add("showStartBtn");


}

center.addEventListener("click", showGame);
startBtn.addEventListener("click", startGame);
backBtn.addEventListener("click", toggleResultContainer);


/*Аудио фоновая*/
let fonovaiaMuzika = document.getElementById('fonovaia-muzika-id');
gong.addEventListener('click', zvfonovaiaMuzika, false);

function zvfonovaiaMuzika() {
	fonovaiaMuzika.play();
	fonovaiaMuzika.volume = 0.4;
}



/*Аудио при нажатии на кнопку на часах*/
jQuery(function ($) {
	$('.centerClock').on('click', function () {
		$('.music-knopka-na-chasah')[0].play();
		scoringWrp.style.display = 'flex';
		$(".clock").css('top', '50px');
		$(".clock").css('left', '0px');
		$(".container_wrp").css('background-image', 'url(./img/fon2.jpg)');
		musicIgraNashaZhiznId.pause();
		musicIgraNashaZhiznId.currentTime = 0.0;
		fonovaiaMuzika.volume = 0.06;
	});
	$('.music-knopka-na-chasah').hide();

	


});





/*Аудио при нажатии на гонг*/

let	musicIgraNashaZhiznId = document.getElementById('music-igra-nasha-zhizn-id');
gong.addEventListener('click', musicIgraNashaZhizn, false);

function musicIgraNashaZhizn() {
	musicIgraNashaZhiznId.play();
	musicKnopkaNaChasah.play();
	$("#play_gong-id").fadeOut("slow");
}


/*Аудио при нажатии на кнопкe старт в часах*/

let startBtnId = document.getElementById('startBtn-id');
let	musicVolchokId = document.getElementById('music-volchok-id');
startBtnId.addEventListener('click', fPlay, false);

function fPlay() {
	musicVolchokId.play();
}

/*Аудио появления окна с заданием*/
let zvukPoiavleniaOkna = document.getElementById('zvuk-poiavlenia-okna-id');

function zvPoiavleniaOkna() {
	zvukPoiavleniaOkna.play();
	musicVolchokId.currentTime = 0.0;
	musicVolchokId.pause();
}

/*Аудио закрытия окна с заданием*/
let zvukZakritiaOkna = document.getElementById('zvuk-zakritia-okna-id');

function zvZakritiaOkna() {
	zvukZakritiaOkna.play();
}


/*Секундомер в вопросе*/

window.cancelRequestAnimFrame = (function () {
	return window.cancelAnimationFrame ||
		window.webkitCancelRequestAnimationFrame ||
		window.mozCancelRequestAnimationFrame ||
		window.oCancelRequestAnimationFrame ||
		window.msCancelRequestAnimationFrame ||
		clearTimeout;
})();

window.requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( /* function */ callback, /* DOMElement */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

window.mobileAndTabletcheck = function () {
	let check = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}

document.addEventListener('DOMContentLoaded', () => {
	let anim = null;

	let isRunning = false;

	let startTime = null;
	let pausedTime = 0;
	let elapsedTime = 0;

	const clockEl = document.querySelector('.clock-in');
	const pointerEl = clockEl.querySelector('.clock__pointer');
	const svgEl = clockEl.querySelector('svg');
	const svgEllipse = svgEl.querySelector('ellipse');
	const resetBtnEl = document.querySelector('.clock-button[data-role="clock-reset"]');
	const startBtnEl = document.querySelector('.clock-button[data-role="clock-start-stop"]');
	const start20sBtnEl = document.querySelector('.clock-button20s[data-role="clock-start-stop20s"]');
	const startBtnTextEl = startBtnEl.querySelector('.clock-button__text');
	const start20sBtnTextEl = start20sBtnEl.querySelector('.clock-button__text20s');


	const maxDashoffset = -90;

	// put the left 0 if < 10
	const getFullValue = (val) => {
		return (val < 10) ? '0' + val : val;
	};

	const getFullMils = (val) => {
		if (val < 10) return '00' + val;
		if (val < 100) return '0' + val;

		return val;
	}

	const startCounter = (timestamp) => {
		if (!startTime) startTime = timestamp;

		if (isRunning) {
			elapsedTime = (timestamp - startTime) - pausedTime;

			let dat = new Date(elapsedTime);
			let mins = dat.getMinutes();
			let secs = dat.getSeconds();
			let mils = dat.getMilliseconds();

			let angleBetweenSecs = 360 / 60;
			let angle = (360 * mins) + (angleBetweenSecs * secs) + ((angleBetweenSecs / 1000) * mils);


			mins = getFullValue(mins);
			secs = getFullValue(secs);
			mils = getFullMils(mils);

			pointerEl.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;

			// only if not mobile (poor performance)
			if (!window.mobileAndTabletcheck()) {
				let svgAngle = -90 + angle;
				let dashoffsetPerAngle = 1.5;
				svgEl.style.transform = `translate(-50%, -50%) rotate(${svgAngle}deg)`;

				let newOffset = -135 + (angle * 0.75 / 2);
				if (newOffset <= maxDashoffset) {
					svgEllipse.style.strokeDashoffset = newOffset + '%';
				}
			}

		} else {
			pausedTime = (timestamp - startTime) - elapsedTime;
		}

		anim = window.requestAnimFrame(startCounter);
	};


	/*Аудио обсуждения вопроса кнопки старт-стоп-пауза*/
	let zvukPoiavleniaVoprosa = document.getElementById('zvuk-poiavlenia-voprosa-id');
	musicShowQuestionBtn.addEventListener('click', musicShowQuestion, false);
	musicShowQuestionBtn2.addEventListener('click', musicShowQuestion, false);
	musicShowQuestionBtn3.addEventListener('click', musicShowQuestion, false);

	function musicShowQuestion() {
		zvukPoiavleniaVoprosa.play();
	}

	let zvukPoiavleniaOtveta = document.getElementById('zvuk-poiavlenia-otveta-id');
	showVideoAnswer.addEventListener('click', musicShowAnswer, false);
	musicShowAnswerBtn.addEventListener('click', musicShowAnswer, false);
	musicShowAnswerBtn2.addEventListener('click', musicShowAnswer, false);
	musicShowAnswerBtn3.addEventListener('click', musicShowAnswer, false);

	function musicShowAnswer() {
		zvukPoiavleniaOtveta.play();
	}

	let zvukNextQuestion = document.getElementById('zvuk-knopka-dalee-id');
	showVideoQuestion.addEventListener('click', musicNextQuestion, false);
	nextquestion.addEventListener('click', musicNextQuestion, false);

	function musicNextQuestion() {
		zvukNextQuestion.play();
	}


	let zvukObsuzdeniaVoprosa = document.getElementById('zvuk-obsuzdenia-voprosa-id');
	startBtnEl.addEventListener('click', fPlay, false);

	function fPlay() {
		if (zvukObsuzdeniaVoprosa.paused == true) {
			zvukObsuzdeniaVoprosa.play();
		} else {
			zvukObsuzdeniaVoprosa.pause();
		}
	}

	start20sBtnEl.addEventListener('click', fPlay20s, false);
	let zvukObsuzdeniaVoprosa20s = document.getElementById('zvuk-obsuzdenia-voprosa20s-id');

	function fPlay20s() {
		if (zvukObsuzdeniaVoprosa20s.paused == true) {
			zvukObsuzdeniaVoprosa20s.play();
		} else {
			zvukObsuzdeniaVoprosa20s.pause();
		}
	}

	resetBtnEl.addEventListener('click', resetZvukObsuzdenia, false);
	backBtn.addEventListener('click', resetZvukObsuzdenia, false);

	function resetZvukObsuzdenia() {
		zvukObsuzdeniaVoprosa.currentTime = 0.0;
		zvukObsuzdeniaVoprosa.pause();
		zvukObsuzdeniaVoprosa20s.currentTime = 0.0;
		zvukObsuzdeniaVoprosa20s.pause();
		resetTimer();
	}

// reset all flags and values
function resetTimer() {
	isRunning = false;
	startTime = null;
	pausedTime = 0;
	elapsedTime = 0;
	startBtnEl.classList.remove('clock-button--pause');
	start20sBtnEl.classList.remove('clock-button--pause20s');
	startBtnTextEl.innerHTML = '1 мин';
	start20sBtnTextEl.innerHTML = '20 сек';
	pointerEl.style.transform = `translate(-50%, -100%) rotate(0)`;
	clockEl.classList.remove('clock--started');
	svgEl.style.transform = '';
	svgEllipse.style.strokeDashoffset = '';
	window.cancelRequestAnimFrame(anim);
	zvukObsuzdeniaVoprosa.currentTime = 0.0;
	zvukObsuzdeniaVoprosa.pause();
	zvukObsuzdeniaVoprosa20s.currentTime = 0.0;
	zvukObsuzdeniaVoprosa20s.pause();
	timer_20s.clear();
	timer_60s.clear();
  }

  resetBtnEl.addEventListener('click', () => {
	resetTimer();
  });

  //функция паузы и продолжить для таймера
  let Timer = function(callback, delay) {
	let timerId, start, remaining = delay;

	this.pause = function() {
	  window.clearTimeout(timerId);
	  remaining -= Date.now() - start;
	  console.log(timerId);
	  console.log(remaining);
	};

	this.resume = function() {
	  start = Date.now();
	  window.clearTimeout(timerId);
	  timerId = window.setTimeout(callback, remaining);
	  console.log(timerId);
	  console.log(start);
	};


	this.clear = function() {
	  window.clearTimeout(timerId);
	  remaining = delay;
	};
	
  };

  let timer_20s = new Timer(resetTimer, 20000);
  let timer_60s = new Timer(resetTimer, 60000);


	// start and stop click event
	startBtnEl.addEventListener('click', () => {

      // if not running
      if (!isRunning) {
       /*Аудио if (typeof timer_60s === 'undefined') {
          timer_60s = new Timer(resetTimer, 60000);
        }*/
        timer_60s.resume();
        isRunning = true;
        anim = window.requestAnimFrame(startCounter);
        clockEl.classList.add('clock--started');
        startBtnEl.classList.add('clock-button--pause');
        startBtnTextEl.innerHTML = 'Пауза';

      } else {
        timer_60s.pause();
        isRunning = false;
        clockEl.classList.remove('clock--started');
        startBtnEl.classList.remove('clock-button--pause');
        startBtnTextEl.innerHTML = 'Продолжить';
      }

    });

	start20sBtnEl.addEventListener('click', () => {

 // if not running
 if (!isRunning) {
	/*if (typeof timer_20s === 'undefined') {
	  timer_20s = new Timer(resetTimer, 20000);
	}*/
	timer_20s.resume();
	isRunning = true;
	anim = window.requestAnimFrame(startCounter);
	clockEl.classList.add('clock--started');
	start20sBtnEl.classList.add('clock-button--pause20s');
	start20sBtnTextEl.innerHTML = 'Пауза';
  } else {
	timer_20s.pause();
	isRunning = false;
	clockEl.classList.remove('clock--started');
	start20sBtnEl.classList.remove('clock-button--pause20s');
	start20sBtnTextEl.innerHTML = 'Продолжить';
  }

});

});

// появление вопроса
$(document).ready(function () {
	$('.show_questionBtn').click(function () {
		//$('.resultText').slideToggle(300, function () {
		//	$(this).is(':hidden');			
		//});
		resultText.style.display = 'block';
		showVideoQuestion.style.display = 'block';
		return false;
	});
	$('.show_questionBtn').click(function () {
		//$('.resultBlits').slideToggle(300, function () {
		//	$(this).is(':hidden');
		//	nextquestion.style.display = 'block';
		//});
		resultBlits.style.display = 'block';
		nextquestion.style.display = 'block';
		return false;
	});
	$('.show_questionBtnBlits2').click(function () {
		//$('.resultBlits2').slideToggle(300, function () {
		//	$(this).is(':hidden');
		//});
		resultBlits2.style.display = 'block';
		return false;
	});
	$('.show_questionBtnBlits3').click(function () {
		//$('.resultBlits3').slideToggle(300, function () {
		//	$(this).is(':hidden');
		//});
		resultBlits3.style.display = 'block';
		return false;
	});

});

// появление ответа
$(document).ready(function () {
	$('.answerBtn').click(function () {
		//$('.answerText').slideToggle(300, function () {
		//	$(this).is(':hidden');
		//});
		answerText.style.display = 'block';
		showVideoAnswer.style.display = 'block';
		return false;
	});

	$('.answerBtn').click(function () {
		//$('.answerBlits').slideToggle(300, function () {
		//	$(this).is(':hidden');
		//});
		answerBlits.style.display = 'block';
		return false;
	});
	$('.answerBtnBlits2').click(function () {
		/*$('.answerBlits2').slideToggle(300, function () {
			$(this).is(':hidden');

		});*/
		answerBlits2.style.display = 'block';
		return false;
	});
	$('.answerBtnBlits3').click(function () {
		/*$('.answerBlits3').slideToggle(300, function () {
			$(this).is(':hidden');
		});*/
		answerBlits3.style.display = 'block';
		return false;
	});

});

//появление кнопки показать блиц вопрос/ответ 1 и 2
$(document).ready(function () {
	$('.nextquestion').click(function () {
		$('.show_questionBtnBlits2').slideToggle(300, function () {
			$(this).is(':hidden');
		});
		$('.answerBtnBlits2').slideToggle(300, function () {
			$(this).is(':hidden');
		});
		$('.show_questionBtnBlits3').slideToggle(300, function () {
			$(this).is(':hidden');
		});
		$('.answerBtnBlits3').slideToggle(300, function () {
			$(this).is(':hidden');
		});
		  $('.nextquestion').hide();
		return false;
	});

});

//появление видеовопроса
$(document).ready(function () {
	$('.show-video_question').click(function () {
		$('#video_question').slideToggle(300, function () {
			$(this).is(':hidden');
		});

		$('.show-video_question').hide();
		//videoWrp.play(); //срезу проигрывается видео при клиике на посмотреть
		return false;
	});


});

//появление видеовответа
$(document).ready(function () {
	$('.show-video_answer').click(function () {
		$('#video_answer').slideToggle(300, function () {
			$(this).is(':hidden');
		});

		$('.show-video_answer').hide();
		//videoAnswerWrp.play(); //срезу проигрывается видео при клиике на посмотреть
		return false;
	});


});