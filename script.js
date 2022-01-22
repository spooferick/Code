'use strict';

function one() {
    let moves = 10;

    return function two(secretNumber) {
        console.log(secretNumber);
        if (moves == 0) {
            if (confirm("Вы проиграли. Хотите сыграть ещё?")) {
                moves = 10;
                number(Math.floor(Math.random() * 101));
            } else {
                return
            }
        }

        const userNumber = +prompt(`Введите число. У вас осталось ${moves} ходов`);
        

        if (isNaN(userNumber)) {
            alert('Введите число!');
            two(secretNumber);
        } else if (userNumber == false) {
            alert('Всего хорошего!');
            return
        }

        if (userNumber != secretNumber) {
            moves--;
            if (secretNumber < userNumber) {
                alert(`Загаданное число меньше! У вас осталось ${moves} ходов`);
                two(secretNumber);
            } else if (secretNumber > userNumber) {
                alert(`Загаданное число больше! У вас осталось ${moves} ходов`);
                two(secretNumber);
            }
        } else {
            if (confirm("Вы победили. Хотите сыграть ещё?")) {
                moves = 10;
                number(Math.floor(Math.random() * 101));
            } else {
                alert('Всего хорошего!');
                return
            }
        }
    }
}

const number = one();
number(Math.floor(Math.random() * 101));