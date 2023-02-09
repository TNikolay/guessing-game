class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.cur = Math.round(min + (max - min) / 2);
    }

    guess() {
        //console.log('---', this.min, this.max, this.cur);
        return this.cur;
    }

    lower() {
        this.max = this.cur ;
        this.cur = Math.round(this.min + (this.cur - this.min) / 2);
    }
    
    greater() {
        this.min = this.cur ;
        this.cur = Math.round(this.cur + (this.max - this.cur) / 2);
    }
}

module.exports = GuessingGame;
