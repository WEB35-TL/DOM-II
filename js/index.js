// selectors
let one, two, three, four, five, six, seven, eight, nine, ten, x, y

// functions
let f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11

// 1. click fun bus logo on top left to turn turquoise
one = document.querySelector('.logo-heading')
f1 = e => (e.target.style.color = 'turquoise')

one.addEventListener('click', f1)

// 2. hover over header bus image to rotate
two = document.querySelector('header img')
f2 = e => (e.target.style.transform = 'rotate(20deg)')

two.addEventListener('mouseover', f2)

// 3. move mouse out of header bus image to un-rotate
three = document.querySelector('header img')
f3 = e => (e.target.style.transform = 'rotate(0deg)')

three.addEventListener('mouseout', f3)

// 4. double-click map image to make it grayscale
x = document.querySelectorAll('.img-content img')

four = x[0]
f4 = e => (e.target.style.filter = 'grayscale(1)')

four.addEventListener('dblclick', f4)

// 5. scroll wheel over adventure awaits photo to enlarge
five = x[1]
f5 = e => (e.target.style.transform = 'scale(1.3)')

five.addEventListener('wheel', f5)

// 6. highlight any paragraph text and copy (or ctrl + c) for alert
six = document.querySelectorAll('p')
f6 = () => alert(`No copying!`)

six.forEach(x => x.addEventListener('copy', f6))

// 7. drag long boat photo to blur
seven = document.querySelector('.content-destination img')
f7 = e => (e.target.style.filter = 'blur(20px)')

seven.addEventListener('drag', f7)

// 8. press any key change font of all text minus headings
eight = document.querySelectorAll('body')
f8 = e => (e.target.style.fontFamily = 'times')

eight.forEach(x => addEventListener('keydown', f8))

// 9. right click any heading text to change bg color
nine = document.querySelectorAll('h2')
f9 = e => (e.target.style.background = 'turquoise')

nine.forEach(x => x.addEventListener('contextmenu', f9))

// 10. move mouse over nav links to change size
ten = document.querySelectorAll('nav .nav-link')
f10 = e => (e.target.style.fontSize = '2rem')

ten.forEach(x => x.addEventListener('mousemove', f10))

// 10.5 move mouse away from nav links to change back to normal
f11 = e => (e.target.style.fontSize = '1.5rem')
ten.forEach(x => x.addEventListener('mouseout', f11))
