// let url = ;
const inpbtn = document.getElementById("inp-btn");
const input = document.getElementById("inp-word");
const result = document.querySelector(".result");
const sound = document.querySelector(".sound");


inpbtn.addEventListener( "click" , () => {
    let word = input.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
    .then((response) => response.json())
    .then((data => {
        // console.log(data);
        result.innerHTML = `
    <div class="word">
            <h3>${word}</h3>
            <button onclick="playSound()">
                <i class="fas fa-volume-up"></i>
            </button>
        </div>
        <div class="details">
            <p>
            ${data[0].meanings[0].partOfSpeech}
            </p>
            <p>${data[0].phonetic}
            </p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].definition
        }</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>
    `;
    sound.setAttribute( "src" , `${data[0].phonetics[0].audio}`);
    }))
    .catch(  () =>{
        result.innerHTML = `<h3 class="error">Couldn't find the Word </h3>`
    }
    );
    result.classList.add("display");

});

function playSound() {
    sound.play()
 }



