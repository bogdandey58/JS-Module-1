
var firstLine = 'qwertyuiop[]\\';
const secondLine = 'asdfghjkl;\'';
const thirdLine = 'zxcvbnm,./';
const fL = firstLine.length;
const sL = secondLine.length;
const tL = thirdLine.length;
const firstCharInLine1 = firstLine.charAt(0);
const lastCharInLine1 = firstLine.charAt(fL - 1);
const firstCharInLine2 = secondLine.charAt(0);
const lastCharInLine2 = secondLine.charAt(sL - 1);
const firstCharInLine3 = thirdLine.charAt(0);
const lastCharInLine3 = thirdLine.charAt(tL - 1);
const findChar = thirdLine.indexOf('b');

document.querySelector('.content').innerHTML =
    `
    <p>Верхний ряд клавишь: "${firstLine}"</p>
    <p>Средний ряд клавишь: "${secondLine}"</p>
    <p>Нижний ряд клавишь: "${thirdLine}"</p>
    <hr>
    <p>View all program in console.log</p>
`;

console.log(`
Верхний ряд клавишь: "${firstLine}"
Средний ряд клавишь: "${secondLine}"
Нижний ряд клавишь: "${thirdLine}"
---
Кол-во клавишь в верхнем ряду: "${fL}"
Кол-во клавишь в среднем ряду: "${sL}"
Кол-во клавишь в нижнем ряду: "${tL}"
---
Первая клавиша в верхнем ряду: "${firstCharInLine1}"
Последняя клавиша в верхнем ряду: "${lastCharInLine1}"
Первая клавиша в среднем ряду: "${firstCharInLine2}"
Последняя клавиша в среднем ряду: "${lastCharInLine2}"
Первая клавиша в нижнем ряду: "${firstCharInLine3}"
Последняя клавиша в нижнем ряду: "${lastCharInLine3}"
---
Позиция клавиши, на которой стоит символ "b" в нижнем ряду: "${findChar+1}"
`);


//ИЛИ:


// document.querySelector('.content').innerHTML =
//     `
//     <p>Верхний ряд клавишь: "${firstLine}"</p>
//     <p>Средний ряд клавишь: "${secondLine}"</p>
//     <p>Нижний ряд клавишь: "${thirdLine}"</p>
//     <hr>
//     <p>Кол-во клавишь в верхнем ряду: "${fL}"</p>
//     <p>Кол-во клавишь в среднем ряду: "${sL}"</p>
//     <p>Кол-во клавишь в нижнем ряду: "${tL}"</p>
//     <hr>
//     <p>Первая клавиша в верхнем ряду: "${frstCharInLine1}"</p>
//     <p>Последняя клавиша в верхнем ряду: "${lstCharInLine1}"</p>
//     <p>Первая клавиша в среднем ряду: "${frstCharInLine2}"</p>
//     <p>Последняя клавиша в среднем ряду: "${lstCharInLine2}"</p>
//     <p>Первая клавиша в нижнем ряду: "${frstCharInLine3}"</p>
//     <p>Последняя клавиша в нижнем ряду: "${lstCharInLine3}"</p>
//     <hr>
//     <p>Позиция клавиши, на которой стоит символ "b" в нижнем ряду: "${findChar+1}"</p>
// `;