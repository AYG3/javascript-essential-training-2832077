/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Laptop from "./Laptop.js";
import PC from "./PC.js";
import Table from "./table.js";

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

const dTable = new Table(
    "brown",
    "Wood",
    "Rough",
    false
)

console.log("My table: ", dTable);
dTable.toggleErgonomic(true)
console.log("My table after: ", dTable);

const dPC = new PC()


console.log("dPC: ", dPC);