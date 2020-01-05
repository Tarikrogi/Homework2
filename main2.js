Дз.Первая часть:

    Number: age

var age = Number(prompt('How old are you?'));
var birthdate = 2019 - age;
alert('Year of birth: ' + birthdate)

Number: temperature

var temperature = Number(prompt('Напишите температуру в градусах Цельсия'));
var far = (temperature * (9 / 5)) + 32
alert('Температура в Фаренгейтах: ' + far)

Number: divide

var a = 5 / 2;
var b = 9 / 3;
console.log(Math.floor(a))
console.log(Math.floor(b))

Number: odd

var number = Number(prompt('Введите число'));
if (Number.isNaN(number) == true) {
    console.log('Не является числом')
} else if (number % 2 == 0) {
    console.log('Четное число')
} else {
    console.log('Нечетное число')
}

String: greeting

var name = prompt('Please enter your name');
alert('Greetings ' + name)

String: lexics

var arr = prompt('Please enter your country and city');
if (arr.includes('Kharkiv')) {
    alert('What a nice city!')
} else {
    alert('Unfortunatelly, you are not from Kharkiv')
}

confirm

var isAdmin = confirm("Вы - администратор?");

alert(isAdmin);

var arr1 = confirm("Вы - администратор?");
var arr2 = confirm("Вы - работаете?");
var a = arr1
var b = arr2
console.log(a)
console.log(b)

Boolean: if

var gender = confirm("Вы мужчина?");
if (gender == true) {
    alert('Ваш пол - мужской')
} else {
    alert('Ваш пол - женский')
}

Array: booleans

var arr = []
var question1 = confirm("Вы мужчина?");
if (question1 == true) {
    arr.push('Прикольно', 'Классно, что вы мужчина');
} else {
    arr.push('Ого', 'Вы родились женщиной');
}
console.log(arr)

Array: plus

var arr = [1, 2];
arr.push((arr[0] + arr[1]))
console.log(arr[2])

Array: plus string

var arr = ['1', '2', '3'];
arr.push((arr[0] + arr[1] + arr[2]))
console.log(arr)

Comparison
if

var age = prompt("Сколько вам лет?");
if (age <= 0) {
    alert('Вы еще не родились!')
} else if (age < 18) {
    alert("школьник");
} else if (age > 18 && age < 30) {
    alert("молодеж");
} else if (age > 30 && age < 45) {
    alert("зрелость");
} else if (age > 45 && age < 60) {
    alert("закат");
} else if (age > 60) {
    alert("как пенсия?");
} else {
    alert("то ли киборг, то ли ошибка");
}





Дз.Вторая часть:

    1.

var n = Number(prompt('Введите число больше 0'));
if (n > 0) {

    var arr = [];
    for (var i = 0; i < n + 1; i++) {
        arr.push(i);

    }
    arr.shift(0);

    function a(arr) {
        var sum = 0;
        for (var j = 0; j < arr.length; j++) {
            if (j % 2 == 0) {
                sum = sum + arr[j];
            }

        }
        return sum;
    }

    console.log(arr);

    console.log(a(arr));

} else {
    alert('Вы ввели некорекктное число')
}


2.

var str = 'abcde';
console.log(str.charAt(0))
console.log(str.charAt(1))
console.log(str.charAt(4))
for (i = 0; i < str.length; i++) {
    if (i = 'a' || 'b' || 'c') {
        console.log('Я знаю эту букву')
    }
}

3. - 3.1

var n = Number(prompt('Введите количество часов'));

if (n == 0) {

    alert('В ' + n + ' часов ' + (n * 60) + ' секунд')

} else if (n == 1) {

    alert('В ' + n + ' часе ' + (n * 60) + ' секунд')

} else if (n > 1) {

    alert('В ' + n + ' часах ' + (n * 60) + ' секунд')
}
4.

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);

5.

var num = 3;
alert(num)

6.

var a = 10;
var b = 2;
var arr = [x, y, c, d]
var x = a + b;
var y = a - b;
var c = a * b;
var d = a / b;
alert(arr)

7.

var c = 15;
var d = 2;
var result = c + d;
alert(result)

8.

var str = 'Привет мир!';
var arr = [];
var sum = 0;
for (i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i))

}

function a(arr) {
    for (var j = 0; j < arr.length; j++) {
        sum = sum + arr[j];
    }

    return sum;
}
console.log(arr)
console.log(a(arr))

9.

var c = 15;
var d = 2;
var result = c + d;
alert(result)

10.
var a = prompt('Введите число')
alert('Квадрат числа ' + a + ' = ' + Math.pow(a, 2))

11.

var arr = prompt('Введите переменную для расчета в секундах')
var arrSplit = arr.split('')
var n = arrSplit.pop()
var number = arrSplit.join('')
if (n === 'h') {
    console.log('В ' + number + ' часах ' + (number * 3600) + ' секунд')
} else if (n === 'd') {
    console.log('В ' + number + ' днях ' + (number * 3600 * 24) + ' секунд')
} else if (n === 'w') {
    console.log('В ' + number + ' неделях ' + (number * 3600 * 24 * 7) + ' секунд')
} else if (n === 'm') {
    console.log('В ' + number + ' месяцах ' + (number * 3600 * 24 * 30) + ' секунд')
}