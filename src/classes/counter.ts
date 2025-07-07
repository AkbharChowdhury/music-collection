export class Counter {
    #num;
    #incrementBy;

    constructor(incrementBy: number) {
        this.#num = 0;
        this.#incrementBy = incrementBy;

    }

    getValue() {
        return this.#num;
    }



    incrementCounter() {
        this.#num += this.#incrementBy;
    }
}