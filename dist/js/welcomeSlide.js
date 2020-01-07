var slide_i = 0;
var slide_array = ["Herzlich Willkommen", "Welcome", "Bonjour", "Salve", "As-Salāmu ʿAlaikum", "السلام عليكم", "здравствуйте", "您好", "Ciao"];
var slide_elem;

function slide_next() {
    slide_i++;
    slide_elem.style.opacity = 0;
    if (slide_i > (slide_array.length - 1)) {
        slide_i = 0
    }
    setTimeout('Slide()', 1000)
}

function Slide() {
    slide_elem.innerHTML = slide_array[slide_i];
    slide_elem.style.opacity = 1;
    setTimeout('slide_next()', 3000)
}