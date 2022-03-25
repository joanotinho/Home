import ClassicEditor from '../node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';

export let ckEditorRender = () => {

    window.ckeditors = [];

    document.querySelectorAll('.ckeditor').forEach(ckeditor => {
        ClassicEditor.create(ckeditor)
            .then( classicEditor => {
                ckeditors[ckeditor.name] = classicEditor;
            })
            .catch( error => {
                console.error(error);
            } );
    });
}
