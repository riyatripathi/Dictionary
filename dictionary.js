
// let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
// search.addEventListener("click",fun);

let input = document.getElementsByClassName('input')[0];

let button = document.getElementsByClassName('find');
let meaning = document.getElementsByClassName('meaning')[0];
let origin = document.getElementsByClassName('origin')[0];
let synonym = document.getElementsByClassName('synonym')[0];
let antonym = document.getElementsByClassName('antonym')[0];

button[0].addEventListener("click", function(){
	let word = input.value;
	let ajax = new XMLHttpRequest();
	let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
	ajax.open('GET',url);
	ajax.send();
	ajax.onload = function(){
		let ans = JSON.parse(ajax.responseText);
		console.log(ans);
		antonym.innerHTML = `<span class="text-danger">Antonym:</span> ${ans[0].meanings[0].definitions[0].antonyms[0]}`;
		synonym.innerHTML = `<span class="text-danger">Synonym:</span> ${ans[0].meanings[0].definitions[0].synonyms[0]}`;
		meaning.innerHTML = `<span class="text-danger">Meaning:</span> ${ans[0].meanings[0].definitions[0].definition}`;
		origin.innerHTML = `<span class="text-danger">Origin:</span> ${ans[0].origin}`;
	}
})







