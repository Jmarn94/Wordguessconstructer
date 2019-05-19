var Letter = require("./letter");

function Word(word) {
    this.letter = word.split("").map(function (char) {
        Letter(char);
    });
}

Word.prototype.getSolution = function() {
    this.letter.map(function (letter) {
        letter.getSolution();
    }).join("");
};

word.prototype.toString = function() {
    return this.letters.join(" ");
};

Word.prototype.guessLetter = function (char) {
    var foundLetter = false;
    this.letters.forEach(function(letter) {
        if (letter.guess(char)) {
            foundLetter = true;
        }
    });

    console.log("\n" + this + "\n");
    return foundLetter;
};

Word.prototype.guessCorrectly = function() {
    return this.letter.every(function (letter) {
        return letter.visible
    });
};

module.exports = Word;