export function formData() {

    const submitButton = document.getElementById('submit');

    if (submitButton) {

        const forms = document.querySelectorAll('#form');

        forms.forEach(form => {

            submitButton.addEventListener('click', (e) => {

                e.preventDefault();

                let data = new formData(form);

                if (ckeditors != 'null'){

                    Object.entries(ckeditors).forEach(([key, value]) => {
                        data.append(key, value.getData());
                    });

                    Object.entries(data).forEach((pair) => {
                        console.log(pair[0] + ', ' + pair[1]);
                    });
                }

        
                fetch('', {
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
                    console.log(texto)
                })
                .catch(function(err) {
                    console.log(err)
                })
            });    
        });
    }
}