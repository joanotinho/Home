import JustValidate from "../node_modules/just-validate/dist/just-validate.es.js";

export let validator = (form) => {

  const elements = document.querySelectorAll('.required');

  let validate = new JustValidate('#' + form.id,
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelStyle: {
          color: 'red',
          fontsize: '14px',
      },
      focusInvalidField: true,
      lockForm: true,
      errorContainer: '#errors-container',
    }
  )
    elements.forEach(element => {

      validate
        .addField('#' + element.id, [
          {
            rule: 'required',
            errorMessage: 'Este campo no puede estar vacio'
          }
        ])
    });
    
    return validate;

};