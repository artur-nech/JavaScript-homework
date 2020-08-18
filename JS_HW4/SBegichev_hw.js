// 1. Объединение массива
// Напишите 3 функции, которые объединят массив в строку.
// Сам массив: cars = ["Audi", "Volvo", "BMW", "Mercedes"];
// Результат:
// "Audi, Volvo, BMW, Mercedes"
// "Audi,Volvo,BMW,Mercedes"
// "Audi Volvo BMW Mercedes"

const cars = ["Audi", "Volvo", "BMW", "Mercedes"];
let arr1 = cars.join(', ');
let arr2 = cars.join(',');
let arr3 = cars.join(' ');
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 2. Удалите первый и последний элемент из массива:
let arr4 = [ "a", "b", "c", "d", "e" ]
arr4.shift();
arr4.pop();
console.log(arr4);

// 3. Работа с массивом
// У вас есть массив:
let arr5 = [ "a,b,c", "d", "e" ];
// Сделайте так, чтобы итоговый вывод был следующим:
// // ["a", "b", "c", "d", "e"]
arr5.splice(0, 1, ...arr5[0].split(','));

console.log(arr5);

//     4. Создайте программу, которая будет находить второй самый маленький элемент в массиве.
//     Массив данных:
let arr6 = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);

arr6.sort(function(a, b) {
    return a - b;
});

console.log(arr6[1]);

// 5. Создайте массив и выведите в консоль минимальный и максимальный элементы в этом массиве.
//     Массив данных:
let arr7 = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);
console.log(Math.min(...arr7), Math.max(...arr7));

// 6. Отсортируйте массив чисел в обратном порядке:
let arr8 = [9, 25, 78, 23, -43, 4];
arr8.sort(function(a, b) {
    return b - a;
});
console.log(arr8)

// После сортировки:
//     [ 78, 25, 23, 9, 4, -43 ]

// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2)
{
    return eval(value1 + operation + value2);
}

// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
    a * (b + c) >= (a + b) * c ? d = a * (b + c) : d = (a + b) * c;
    a * b * c >= a + b + c ? e = a * b * c : e = a + b + c;
    return d > e ? d : e;
}

// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest';
}

// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

function fixTheMeerkat(arr) {
    [arr[0],arr[2]] = [arr[2],arr[0]];
    return arr;
}

// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript

function checkForFactor (base, factor) {
    return base % factor == 0;
}

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
    return Math.floor((year-1)/100) + 1;
}