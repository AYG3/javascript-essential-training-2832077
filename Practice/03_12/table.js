function Table(color, legs, material, texture, ergonomic) {
  (this.color = color),
    (this.legs = legs),
    (this.material = material),
    (this.texture = texture),
    (this.ergonomic = ergonomic),

    (this.toggleErgonomic = function (state) {
      this.ergonomic = state;
    });
}

export default Table;
