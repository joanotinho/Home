export function formData() {
    const submitButton = document.getElementById('submit');
    const formElem = document.getElementById('form-elem');
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const data = new FormData(formElem);
        fetch('../contacto.html', {
            method: 'POST',
            body: data
        })
        .then(function(response) {
            if (response.ok) {
                return response.text()
            } else {
                throw "Error en la llamada Ajax";
            }
        })
        .then(function(texto) {
            console.log(texto);
        })
        .catch(function(err) {
            console.log(err)
        })
    });
} 