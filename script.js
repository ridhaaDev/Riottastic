// Select element function
const selectElement = function(element) {
    return document.querySelector(element)
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

console.log(body);

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});