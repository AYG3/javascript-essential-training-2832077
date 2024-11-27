/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Laptop from "./Laptop.js";

const myPC = new Laptop(
    'Asus Zephyrus g15',
    'white',
    true,
    'NVIDIA',
    'RTX'
)

console.log('MyPC object: ', myPC)
myPC.toggleGamingPC(false)
console.log('MyPC object after: ', myPC)