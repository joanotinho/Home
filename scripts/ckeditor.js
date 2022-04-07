import "../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js";

export let ckeditor = () => {

    let editors = document.querySelectorAll('.ckeditor');

    window.ckeditors = ckeditor;
    
    editors.forEach(editor => {

        ClassicEditor.create(editor)
        .then( editor => {
        })
        .catch( error => {
            console.error(error);
        } );
    });
}