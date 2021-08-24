const Room = function(area){
    this.area = area
    this.painted = false
}

Room.prototype.update_painted = function(){
    return this.painted = true
}

module.exports = Room;
