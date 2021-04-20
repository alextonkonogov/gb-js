let figures = new Map(
    [
      ['white', {
        pawn:  ['&#9817;','<span class="w-text">p</span>'],
        rook:  ['&#9814;','<span class="w-text">R</span>'],
        knight:['&#9816;','<span class="w-text">H</span>'],
        bishop:['&#9815;','<span class="w-text">B</span>'],
        queen: ['&#9813;','<span class="w-text">Q</span>'],
        king:  ['&#9812;','<span class="w-text">K</span>']
       }
      ],
      ['black', {
        pawn:   ['&#9823;','<span>p</span>'],
        rook:   ['&#9820;','<span>R</span>'],
        knight: ['&#9822;','<span>H</span>'],
        bishop: ['&#9821;','<span>B</span>'],
        queen:  ['&#9819;','<span>Q</span>'],
        king:   ['&#9818;','<span>K</span>']
       }
      ]
    ]
);

function makeLettersRow() {
    var tr = document.createElement('tr');
    var letters = ['','a','b','c','d','e','f','g','h',''];
    
    for (var i = 0; i < 9; i++) {
        var td = document.createElement('td');
        td.innerHTML = letters[i];
        tr.append(td);
    }
    return tr
}

function makeChessBoard(figures, v) {
    var nums = 8;
    var table = document.createElement('table');
    for (var i = 1; i < 9; i++) {
        var tr = document.createElement('tr');
        
        for (var j = 1; j < 9; j++) {
            var td = document.createElement('td');
            
            if (i % 2 == j % 2) {
                td.classList.add('cell', 'white');
            } else {
                td.classList.add('cell', 'black');
            }
            
            if (figures != null) {
                if (i == 2 || i == 7) {
                    td.innerHTML = figures.get((i == 2 ) ? 'black': 'white').pawn[v];
                }

                if (i == 1 || i == 8) {
                    switch(j) {
                        case 1: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').rook[v]; break;
                        case 2: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').knight[v]; break;
                        case 3: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').bishop[v]; break;
                        case 4: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').queen[v]; break;
                        case 5: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').king[v]; break;
                        case 6: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').bishop[v]; break;
                        case 7: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').knight[v]; break;
                        case 8: td.innerHTML = figures.get((i == 1 ) ? 'black': 'white').rook[v]; break;
                    }
                }
            }
            

            tr.append(td);
        }
        var td = document.createElement('td');
        td.innerHTML = nums;
        tr.prepend(td);
        tr.append(td.cloneNode(true));
        table.append(tr);
        nums--;
    }
    table.append(makeLettersRow());
    table.prepend(makeLettersRow());
    table.classList.add('chess-board-table');
    document.body.appendChild(table);
}