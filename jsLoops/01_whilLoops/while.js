var num = 1;
while(num <= 10) {
    console.log(num);
    var el = document.getElementById("one");
    el.append( num+ ", ");
    num+=2;
}

var num = 1
while (num <= 20) {
    if (num % 4 === 0) {
        console.log(num);
        // var modEl = document.getElementById("two");
        // modEl.append(modEl+ ", ");
    }
    num++
}

var num = 100;

while(num > 50) {
    console.log(num + 1);
    num--;
}