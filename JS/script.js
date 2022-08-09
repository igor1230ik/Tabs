"use strict"

const tabs = document.querySelectorAll('.tabs__item');
const block = document.querySelectorAll('.tabs__block');

tabs.forEach(function tab(item, index, array) {
    item.addEventListener("click", function (e) {
        block.forEach(b => {
            b.classList.remove('_active');
            tab();
        });
        function tab() {
            const position = index;
            console.log(position);
            block[position].classList.add('_active');
        }
    });
})





