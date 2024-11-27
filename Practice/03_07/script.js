/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
*/
// import Book from "./Book.js";

const laptop = {
    name: 'Asus zephyrus g15',
    color: 'white',
    gamingPC: 'true',
    GPU: {
        producer: 'NVIDIA',
        series: 'RTX 3060',
    },
    toggleGamingPC: function (state){
        this.gamingPC = state;
    },
}

console.log(laptop)


// const book = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 1865, 798369203415)

console.log("Book: ", book)