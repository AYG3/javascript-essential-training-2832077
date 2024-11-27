class Laptop {
    constructor(
        name,
        color,
        gamingPC,
        GPUprod,
        GPUseries,
    ) {
        this.name = name,
        this.color = color,
        this.gamingPC = gamingPC,
        this.GPU = {
            prod : GPUprod,
            series : GPUseries
        };
    }
    toggleGamingPC(state) {
        this.gamingPC = state
    }
}
export default Laptop;