function createPromise(x, timeoute) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeoute);
    });
}
createPromise('a', 1000).then(function (v) { return console.log(v); });
function createTuple(t, u, d) {
    return [t, u, d];
}
var t1 = createTuple("user1", 1000, 2000);
