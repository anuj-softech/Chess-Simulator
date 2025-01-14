let boardData = [[],[],[],[],[],[],[],[]];


function populateBoard() {
    let w_color = true;
    const board = document.getElementById('board');
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 8; i >= 1; i--) {
        columns.forEach((column) => {
            const place = document.createElement('div');
            place.setAttribute('id', column + i);
            place.classList.add('place');
            if (w_color) {
                w_color = false;
            } else {
                place.classList.add('place-dark');
                w_color = true;
            }
            if (column === 'h') {
                w_color = !w_color;
            }
            let obj = {id: column + i, data: ""};
            boardData[getRow("i"+i)].push(obj);
            board.append(place);
        });
    }
    populatePieces();
}

function populateRow(row, row_id, color) {
    let i = 0;
    boardData[getRow(row_id)].forEach((place) => {
        place.data = {p:row[i],color:color};
        i++;
    });
}

function populatePieces() {
    let row1 = ["R","K","B","Q","K","B","K","R"];
    let row2 = ["P","P","P","P","P","P","P","P"];
    populateRow(row1,"a8",'b');
    populateRow(row2,"a7",'b');
    populateRow(row2,"a2",'w');
    populateRow(row1,"a1",'w');
    
    updateBoard();
}

function getRow(id){
    return 8-id[1];
}

function updateBoard() {
    try{
        let k = 0;
        console.log('aa');
        boardData.forEach((row) => {
            const board = document.getElementById('board');
            for (let i = 0; i < 8; i++) {
                let p = board.childNodes[i + (8 * k)];
                if(row[i].data){
                    let txt = document.createElement('p');
                    txt.innerHTML = row[i].data.p;
                    p.appendChild(txt);
                }
                console.log(row[i]);
            }
            k++;
        });
    }catch (e){
        console.log(e);
    }
}