export function closeElement() {
    const closeButton = document.getElementById('close-button');
    const parent = document.querySelector(".parent");
    const columns = document.querySelectorAll('.column');

    if (closeButton != null) {
        closeButton.addEventListener('click', () => {
            closeButton.classList.add('active');
            parent.classList.add('active');
            columns.forEach(column => {
                column.classList.remove('has-error');
            });
        });
    }
}