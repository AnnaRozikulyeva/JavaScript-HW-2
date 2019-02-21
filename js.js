/* 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  преинкремент - значение переменной сначала увеличивается на 1, а затем используется в выражении.
d = b++; alert(d);           // 1  постинкремент - значение переменной сначала используется в выражении, а потом увеличивается на 1. вывод 1, после стала 2
c = (2+ ++a); alert(c);      // 5  2+ (1+2) преинкремент a=3
d = (2+ b++); alert(d);      // 4  2+ 2 постинкремент, после выражения стало b=3
alert(a);                    // 3
alert(b);                    // 3

2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); //  *= умножение и присвоение значения. х=5 а=4
*/

/* 
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу: 
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
*/

var a = + prompt ("Введите число A");
var b = + prompt ("Введите число B");

if (a>=0 && b>=0) {
    console.log ("a - b = " + (a - b))
} else if (a<0 && b<0) {
    console.log ("a * b = " + (a * b))
}
else {
    console.log ("a + b = " + (a + b))
}


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 

a = Math.floor (Math.random() * 16);
var c = 0;
console.log ("a = " + a);

switch (a) {
    case 0:
        console.log ("Числа от a до 15: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 1:
        console.log ("Числа от a до 15: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 2:
        console.log ("Числа от a до 15: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 3:
        console.log ("Числа от a до 15: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 4:
        console.log ("Числа от a до 15: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 5:
        console.log ("Числа от a до 15: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 6:
        console.log ("Числа от a до 15: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 7:
        console.log ("Числа от a до 15: 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 8:
        console.log ("Числа от a до 15: 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 9:
        console.log ("Числа от a до 15: 9, 10, 11, 12, 13, 14, 15");
        break;
    case 10:
        console.log ("Числа от a до 15: 10, 11, 12, 13, 14, 15");
        break;
    case 11:
        console.log ("Числа от a до 15: 11, 12, 13, 14, 15");
        break;
    case 12:
        console.log ("Числа от a до 15: 12, 13, 14, 15");
        break;
    case 13:
        console.log ("Числа от a до 15: 13, 14, 15");
        break;
    case 14:
        console.log ("Числа от a до 15: 14, 15");
        break;
    default:
        console.log ("Числа от a до 15: 15");
}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
    var num1 = 12;
    var num2 = 9;

    function sum (num1_, num2_) {
        return num1_ + num2_;
    }
    function sumSquare (num1_, num2_) {
        return num1_ * num1_ + num2_ * num2_;
    }
    function minus (num1_, num2_) {
        return num1_ - num2_;
    }
    function minusSquare (num1_, num2_) {
        return num1_ * num1_ - num2_ * num2_;
    }

    console.log ("Сумма чисел 9 и 85 равна " + sum(num1, num2));
    console.log ("Сумма квадрата чисел 9 и 85 равна " + sumSquare(num1, num2));
    console.log ("Разница чисел 9 и 85 равна " + minus(num1, num2));
    console.log ("Разница квадрата чисел 9 и 85 равна " + minusSquare(num1, num2));

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, 
    arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного
    значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и 
    вернуть полученное значение (использовать switch). */
    var arg1 = Math.floor (Math.random() * 10 + 1);
    var arg2 = Math.floor (Math.random() * 10 + 1);
    var operation = "/";
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case "+":
                return arg1 + arg2;
                break;
            case "-":
                return arg1 - arg2;
                break;
            case "*":
                return arg1 * arg2;
                break;
            case "/":
                return arg1 / arg2;
                break;
        }
    }
    console.log (arg1 + operation + arg2 + " = " + mathOperation(arg1, arg2, operation));

// 7) *Сравнить null и 0. Попробуйте объяснить результат.
var z = null; // отсутсвие значения
var y = 0; // значение кокретно 0

// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
var val;
var pow;

function power(val, pow){
    if(pow == 0){
      return 1;
    }
    if(pow < 0){
      return power( 1/val, -pow); // -pow значит смену знака с отрицательного на положительный
    }
    return val * power(val, pow-1);
}
   
console.log (power(5, -3)); 