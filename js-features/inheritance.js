//Class inheritance
class User1 {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(`My name is ${this.sayName}`)
    }
}

class Guest1 extends User1 {
    constructor(name) {
        super(name);
        this.login = function () {
            console.log('Guest logging...')
        }
    }
}

const guest1 = new Guest1('John');


//Prototypical inheritance
function User(name) {
    this.name = name
}

User.prototype.sayName = function () {
    console.log(`My name is ${this.sayName}`)
}

function Guest(name) {
    User.call(this, name);
    this.login = function () {
        console.log('Guest logging...')
    }
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

const guest = new Guest('Alex');


class Shape {
    constructor(color) {
        this.color = color
    }

    getArea() {

    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius
    }

    getArea() {
        return 3.14 * this.radius * this.radius
    }

}

const c1 = new Circle('red', 5);
console.log(c1.getArea());


