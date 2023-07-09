const ans = Math.floor(Math.random() * 10 + 1);
    let guesses = 0;
document.getElementById("btn").onclick = () => {
    
    let guess = document.getElementById("guess-field").value;
    guesses ++;
    if (guess == ans) {
        alert(`${ans} is the correct ans, you took ${guesses} guesses.`);
    }
    else if (guess < ans) {
        alert("too low");
    }
    else {
        alert("too high");
    }
}