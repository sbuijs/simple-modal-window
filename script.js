'use strict';

//saves the selections into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//the variable openModal contains the function to un-hide the modal and overlay.
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//the variable closeModal contains the function to hide the modal and overlay.
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


//adds eventListener to all of the buttons
//makes the modal and overlay visible by removing the hidden class
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
};


//closes the modal and overlay when user clicks close button by using th closeModal variable
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

        closeModal();

    };
});


