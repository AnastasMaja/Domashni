var words = ["АЕРОДРОМ", "ОКЕАН", "ВОДОПАД", "ГИТАРА", "АВТОБУС", "ИНТЕРНЕТ", "ЗАДАЧА", "ИНДЕКС", "ФАКУЛТЕТ", "МРЕЖА", "ПЕНКАЛО", "РАНЕЦ", "ПОЛНАЧ", "ЛАПТОП", "СЛУШАЛКИ", "ТЕЛЕФОН"];

var chosen_word = "";
var chances = 0;

function StartGame()
{
    chosen_word = words[Math.floor(Math.random() * words.length)];
    
    alert("Погоди го зборот: \n" + chosen_word.substring(0, 3) + "...");
    chances = 0;
    CheckGuess();
}

function CheckGuess()
{
    var guess = prompt("Внесете го зборот: ").toUpperCase();

    if(guess == chosen_word)
    {
        alert("Браво, точен одговор!");
        StartGame();
    } else {
        chances++;
        if (chances < 5) {
            alert("Обидете се повторно.");
            CheckGuess();
        } else {
            alert("Не успеавте. Зборот беше: " + chosen_word);
            alert("Играј повторно?");
            StartGame();
        }
    }
}

document.getElementById("startButton").addEventListener("click", StartGame);



    


