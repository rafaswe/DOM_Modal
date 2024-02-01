'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloaseModal = document.querySelector('.close-modal')
let modalText = document.querySelector('#button-no')

function openModal(i) {
    console.log(btnsOpenModal[i].textContent + " is clicked");
    modalText.textContent = btnsOpenModal[i].textContent;
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', () => openModal(i))
}

btnCloaseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keypress', function (e) {
    if (e.key === "Escape") {
        // write your logic here.
        console.log("Escape clicked");
    }
})