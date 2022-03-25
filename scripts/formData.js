import { ckEditorRender } from "./ckeditor.js";
import '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'

export function formData() {
    const submitButton = document.getElementById('submit');

    if (submitButton) {

        const formElem = document.getElementById('form-elem');
    
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            let data = new formData(form);
            let url = form.action;

            if( ckeditors != 'null'){
                Object.entries(ckeditors).forEach(([key, value]) => {
                    data.append(key, value.getData());
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
    }
}