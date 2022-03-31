import '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'

export function ckeditor2() {
    
    const ckeditor = document.querySelector('.ckeditor');
    
    ClassicEditor.create(ckeditor)
    .then( classicEditor => {
    })
    .catch( error => {
        console.error(error);
    } );
}