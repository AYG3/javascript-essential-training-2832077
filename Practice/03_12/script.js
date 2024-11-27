/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

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