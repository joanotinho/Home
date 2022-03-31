import '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'

export let ckeditor = () => {

    window.ckeditors = [];

    let ckeditors = document.querySelectorAll('.ckeditor');

    ckeditors.forEach(ckeditor => {

        ClassicEditor.create(ckeditor)
        .then( classicEditor => {
            ckeditors[ckeditor.name] = classicEditor;
        })
        .catch( error => {
            console.error(error);
        } );
    });
}