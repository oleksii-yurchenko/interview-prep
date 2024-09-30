const tree = {
    value: 10,
    left: {
        value: 5,
        left: {
            value: 7,
            right: {
                value: 8
            }
        },
        right: {
            value: 10,
            left: {
                value: 2,
            },
            right: {
                value: 0
            }
        }
    },
    right: {
        value: 2
    }
}

function getValuesSum(tree) {
    if (!tree) return 0

    let count = tree.value;
    if (tree.left || tree.right) {
        count += getValuesSum(tree.left) + getValuesSum(tree.right)
    }

    return count;
}

// console.log(getValuesSum(tree))

function someFn() {
    console.log(arguments)
}

someFn.delay = function (timeout) {
    const fn = this;
    return function () {
        setTimeout(fn.bind(this, ...arguments), timeout)
    }

}

const someFnWithDelay = someFn.delay(2000);

//console.log(someFnWithDelay)

someFnWithDelay(1, 'ddd', [1, 2, 3]);