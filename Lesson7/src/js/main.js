const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-dialog__close');

button.addEventListener('click', () => {
    modal.classList.add('modal_active');
    setTimeout(() => {
        if (modal.classList.contains('modal_active')) {
            modal.classList.remove('modal_active');
        }
    }, 5000);
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal_active');
});