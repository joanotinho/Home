var myEditor;
var button = document.getElementById('button')

ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        window.editor = editor
        myEditor = editor;
    })
    button.addEventListener('click', () => {
        myEditor.setData('<p>This is the new Data!</p>')
    })