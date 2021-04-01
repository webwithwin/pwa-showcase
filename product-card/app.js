const container = document.querySelector('.container')
const images = [
  {name: "Image 1", image: "images/kaitlyn-baker-_ycEwyH8Nio-unsplash.jpg" },
  {name: "Image 2", image: "images/gebhartyler-qIEIdW3jx2Q-unsplash.jpg" },
  {name: "Image 3", image: "images/jaelynn-castillo-xfNeB1stZ_0-unsplash.jpg" },
  {name: "Image 4", image: "images/jye-b-DGyTUaS6_aw-unsplash.jpg" },
  {name: "Image 5", image: "images/nery-montenegro-SmEty_TVr80-unsplash.jpg" },
  {name: "Image 6", image: "images/j-luis-esquivel-ArGvQkA7iOw-unsplash.jpg" },
]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// ([a, b] = [10, 20]) => a + b;  // result is 30
// ({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

const showImages = () => {
  let output = ''
  images.forEach(
    // destructuring images object
    ({ name, image }) =>
      (output += `
          <div class="card">
            <img class="card--avatar" src=${image} />
        `)
  )
  container.innerHTML = output
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/pwa-showcase/product-card/sw.js')
    .then(res => console.log('Service worker registered'))
    .catch(err => console.log('Service worker not registered', err))
}
