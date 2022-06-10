var myTv = {
    turnOn: function () {
        return true;
    },
    turnOff: function () {
        return false;
    },
    isTrue: false
};
function turnTv(tv) {
    tv.turnOn();
}
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTv);
function createBoard() {
    var cells = [];
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 3; col++) {
            cells.push({
                row: row,
                col: col
            });
        }
    }
    return cells;
}
var board = createBoard();
board[0].piece = {
    move: function (from, to) {
        return true;
    }
};
function sendAjax(data) {
    console.log(data);
}
var data = {
    email: "nogoso1@naver.com",
    id: "nogoso1",
    password: "1234"
};
sendAjax(data);
