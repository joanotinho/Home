export function formData() {
    const submitButton = document.getElementById('submit');

    if (submitButton != null) {

        var editorData;

        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .then(editor => {
                editorData = editor;
            })
            .catch( error => {
                console.error( error )
            } )
        
            function getDataFromTheEditor() {
                console.log(editorData.getData())
            }

        const formElem = document.getElementById('form-elem');
    
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
    
            const data = new FormData(formElem);
            
            fetch('', {
                method: 'POST',
                body: getDataFromTheEditor()
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