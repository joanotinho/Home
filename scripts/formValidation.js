import JustValidate from '../node_modules/just-validate/dist/just-validate.es.js';

export function formValidation() {

  const form = document.querySelector('.form');

  if (form) {
    const validation = new JustValidate('#form');
  
    validation
      .addField('#name', [
        {
          rule: 'minLength',
          value: 2,
        },
        {
          rule: 'customRegexp',
          value: /^[a-zA-Z]*$/,
        },
      ])
      .addField('#surnames', [
        {
          rule: 'minLength',
          value: 2,
        },
        {
          rule: 'maxLength',
          value: 10,
        },
      ])
      .addField('#adress', [
        {
          rule: 'minLength',
          value: 2,
        },
        {
          rule: 'maxLength',
          value: 10,
        },
      ])
      .addField('#city', [
        {
          rule: 'required',
          errorMessage: 'City is required',
        },
      ]);
  }
}

