function func(prefix) {
    console.log(`${prefix} ${this.name}`)
}

const obj = {
    name: 'Alex',
}


Function.prototype.customBind = function (o, ...params) {
    const fn = this;
    return () => {
        fn.apply(o, [...params])
    }
}


const binded = func.customBind(obj, 'Dear')

binded() // --> Dear Alex








