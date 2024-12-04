/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

let gridBox = document.querySelector('.grid')

gridBox.addEventListener('mouseenter', () => {
    gridBox.style.outline = '2px solid red'
})

gridBox.addEventListener('mouseleave', () => {
    gridBox.style.outline = '2px solid blue'
})

let grids = document.querySelectorAll('.cell')


grids.forEach((grid) => {
    grid.addEventListener('click', () => {
        grid.style.backgroundColor = grid.style.backgroundColor === 'yellow' ? 'lightgreen' : 'yellow'; 
    })

    grid.addEventListener('mouseenter', ()=> {
        grid.style.outline =  grid.style.outline === '2px solid red' ? '2px solid blue' : '2px solid red'; 
    })

    grid.addEventListener('mouseleave', ()=> {
        grid.style.outline =  grid.style.outline === '2px solid blue' ? '2px solid red' : '2px solid blue'; 
    })
})


