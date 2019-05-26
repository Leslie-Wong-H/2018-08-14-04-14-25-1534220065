module.exports = function main(number) {
    var pattern = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.', '|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|', '|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'];
    var convert = [];

    var judge = number;

    while (judge) {
        convert.unshift(number % 10);
        number = Math.floor(number / 10);
        judge = number;
    }
    var lineOne = '';
    var lineTwo = '';
    var lineThree = '';
    for (let index = 0; index < convert.length; index++) {
        lineOne += pattern[convert[index]];
        lineTwo += pattern[convert[index] + 10];
        lineThree += pattern[convert[index] + 20];
        if (index < convert.length - 1) {
            lineOne += " ";
            lineTwo += " ";
            lineThree += " ";
        }
    }
    lineOne += '\n';
    lineTwo += '\n';
    lineThree += '\n';

    // console.log(lineOne);
    // console.log(lineTwo);
    // console.log(lineThree);
    return lineOne + lineTwo + lineThree;
};