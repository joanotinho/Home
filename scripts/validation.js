import JustValidate from "../node_modules/just-validate/dist/just-validate.es.js";

export let validator = (form) => {
  
  const elements = document.querySelectorAll('.required');
  const errorsContainer = document.querySelector('.errors-container');

    let validate = new JustValidate('#' + form.id,
      {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
          color: 'red',
          textDecoration: 'underlined',
        },
        focusInvalidField: true,
        lockForm: true,
        errorsContainer: '.errors-container',
      }
    )

    elements.forEach(element => {

      validate
      // En caso de que cada elemento que tenga la clase 'required' esté vacío, avisar con error
      .addField('#' + element.id, [
        {
          rule: 'required',
          errorMessage: 'el campo ' +  element.dataset.type + ' no puede estar vacio',
        }
      ])
      element.classList.remove('is-invalid')
    });
    
    
    return validate;
};