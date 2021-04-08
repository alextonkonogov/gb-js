//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
//*Дополнительное задание. Решить с помощью рекурсии.

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function breaklessSwitchUsage(n) {
    switch(n) {
        case 0: document.write(0); 
        case 1: document.write(1);
        case 2: document.write(2); 
        case 3: document.write(3); 
        case 4: document.write(4); 
        case 5: document.write(5);
        case 6: document.write(6); 
        case 7: document.write(7); 
        case 8: document.write(8); 
        case 9: document.write(9); 
        case 10: document.write(10); 
        case 11: document.write(11); 
        case 12: document.write(12); 
        case 13: document.write(13); 
        case 14: document.write(14); 
        case 15: document.write(15); 
    }
}

function recursionUsage(n) {
    if (n >= 15) {
        document.write(n);
        return;
    }
    document.write(n);
    return recursionUsage(++n);
}

function switchUsage(n) {
    switch(n) {
        case 0: 
            document.write(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15); 
            break;
        case 1: 
            document.write(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15); 
            break;
        case 2: 
            document.write(2,3,4,5,6,7,8,9,10,11,12,13,14,15); 
            break;
        case 3: 
            document.write(3,4,5,6,7,8,9,10,11,12,13,14,15); 
            break;
        case 4: 
            document.write(4,5,6,7,8,9,10,11,12,13,14,15); 
            break;
        case 5: 
            document.write(5,6,7,8,9,10,11,12,13,14,15); 
            break;
        case 6: 
            document.write(6,7,8,9,10,11,12,13,14,15); 
            break;
        case 7: 
            document.write(7,8,9,10,11,12,13,14,15); 
            break;
        case 8: 
            document.write(8,9,10,11,12,13,14,15); 
            break;
        case 9: 
            document.write(9,10,11,12,13,14,15); 
            break;
        case 10: 
            document.write(10,11,12,13,14,15); 
            break;
        case 11: 
            document.write(11,12,13,14,15); 
            break;
        case 12: 
            document.write(12,13,14,15); 
            break;
        case 13: 
            document.write(13,14,15); 
            break;
        case 14: 
            document.write(14,15); 
            break;
        case 15: 
            document.write(15); 
            break;
    }
}