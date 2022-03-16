export function form() {
    const submitButton = document.getElementById('submit');
    const formElem = document.getElementById('form-elem');
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const formData = new FormData(formElem);
        fetch('./contacto.html', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            if (response.ok) {
                return response.text()
            } else {throw "aprendé a dar verga PUTO"}
        })
        .then(function(texto) {
            console.log(texto);
        })
        .catch(function(err) {
            console.log(err)
        })
    });
} 