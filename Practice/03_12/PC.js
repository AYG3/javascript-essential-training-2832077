import Laptop from "./Laptop.js";

class PC extends Laptop {
    constructor(
        name,
        color,
        gamingPC,
        GPUprod,
        GPUseries,
    ){
    super(name, color, gamingPC, GPUprod, GPUseries)

    this.gamingPC = false
    this.GPUseries = 'None'
    }
}