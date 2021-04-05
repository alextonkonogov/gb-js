do {
    var Tc = prompt('Введите температуру по Цельсию');
} while ((isNaN(Tc)) || Tc.trim() == '');

var Tf = ((9 / 5) * Tc) + 32;
alert('По Фаренгейту это: ' + Tf.toFixed(2));
