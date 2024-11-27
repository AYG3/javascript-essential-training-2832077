function Table (
    color,
    legs,
    material,
    texture,
    ergonomic,
    toggleErgonomic
){
    this.color = color,
    this.legs = legs,
    this.material = material,
    this.texture = texture,
    this.ergonomic = ergonomic,

    this.toggleErgonomic: function (state) {
        this.ergonomic = state;
    }

}

export default Table;