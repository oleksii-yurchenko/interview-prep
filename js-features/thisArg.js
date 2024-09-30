let f = function () {
    this.x = 5;
    (function () {
        this.x = 3;
    })();
    console.log(this.x);
};

let obj = {
    x: 4, m: function () {
        console.log(this.x);
    }
};

f.call(f); //3
obj.m.call(f); //undefined