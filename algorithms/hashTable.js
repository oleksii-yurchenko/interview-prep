class HashTable2 {
    #size = 0;

    constructor() {
        this.table = Array(127);
    }

    #hash(key) {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key[i].charCodeAt(0);
        }
        return sum % this.table.length
    }

    get size() {
        return this.#size
    }

    set(key, value) {
        const index = this.#hash(key);

        if (this.table[index]) {
            for (const entry of this.table[index]) {
                if (entry[0] === key) {
                    entry[1] = value;
                    return;
                }
            }
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }

        this.#size++;
    }

    get(key) {
        const index = this.#hash(key);
        if (this.table[index]) {
            for (const entry of this.table[index]) {
                if (entry[0] === key) return entry[1]
            }
        }

        return undefined
    }

    display() {
        console.log(JSON.stringify(this.table.filter(entry => entry !== null)))
    }
}

class HashTable {
    #size = 0;

    constructor(maxSize) {
        this.store = new Array(maxSize)
    }

    #hash(key) {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }

        return sum % this.store.length
    }

    set(key, value) {
        const index = this.#hash(key);
        if (this.store[index]) {
            for (const item of this.store[index]) {
                if (item[0] === key) {
                    item[1] = value
                    return;
                }
            }
            this.store[index].push([key, value])
        } else {
            this.store[index] = []
            this.store[index].push([key, value])
        }

        this.#size++
    }


    get(key) {
        const index = this.#hash(key);
        const current = this.store[index];
        if (current) {
            for (const item of current) {
                if (item[0] === key) return item[1]
            }
        }
        return null;
    }

    display() {
        return JSON.stringify(this.store.filter(item => item !== undefined))
    }
}

const phoneBook = new HashTable(127);

phoneBook.set('Ivano', '99-99-99');
phoneBook.set('Ianvo', '3-3-3');
phoneBook.set('Oleg', '111-11-11');
phoneBook.set('Zhbankov', '666-6-6');
phoneBook.set('Olge', '222-22-22');
phoneBook.set('Oelg', '333-33-33');
phoneBook.set('Pirat', '111-11-11');
phoneBook.set('Olge', 'updated');

console.log(phoneBook.get('Ianv'));

console.log(phoneBook.display())




