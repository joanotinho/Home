import {validator} from "./validation.js";

export let renderForm = () => {

    const forms = document.querySelectorAll('.front-form');
    const submitButton = document.querySelector('.submit-button');

    if (submitButton) {

        submitButton.addEventListener('click', () => {
            
            forms.forEach(form => {

                let validate = validator(form);
        
                validate.onSuccess (() => {
        
                    let formData = new FormData(form);
                
                    for (let pair of formData.entries()) {
                        console.log(pair[0] + ', ' + pair[1])
                    }
                })
                
                validate.onFail(() => {
                    
                });
            });
        })
    }

}