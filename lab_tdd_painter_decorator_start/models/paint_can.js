const PaintCan = function(amount){
    this.amount = amount
    this.empty = false
}

PaintCan.prototype.empty_paint = function(volume){
        this.amount -= volume
        if (this.amount < 0) {
            this.amount = 0
        }
        if (this.amount===0) {
            this.empty = true
        }
}

module.exports = PaintCan;
