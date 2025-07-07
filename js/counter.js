// export class Counter {
//   #num;
//   #incrementBy;

//   constructor(incrementBy){
//     this.#num = 0;
//     this.#incrementBy = incrementBy;

//   }


//   getCounter() {
//     this.#num+=this.#incrementBy;
//       return this.#num;
//   }
// }

export class Counter {
    #num;
    #incrementBy;

    constructor(incrementBy) {
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