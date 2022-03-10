export function plusMinusButton() {
    const plusButtons = document.querySelectorAll('.plus-button');
    const minusButtons = document.querySelectorAll('.minus-button');
    const numberDisplays = document.querySelectorAll('.number-display');

    if (plusButtons)

    plusButtons.forEach(plusButton => {
        plusButton.addEventListener('click', (value) => {
            numberDisplays.forEach(numberDisplay => {
                numberDisplay.value++;
            });
        });
    });
    
    minusButtons.forEach(minusButton => {
        minusButton.addEventListener('click', () => {
            numberDisplays.forEach(numberDisplay => {
                numberDisplay.value--;
                
                if (numberDisplay.value < 0) {
                    numberDisplay.value = 0;
                }
            });

            
        });
    });

    function handleFormSubmit(form, input) {
        // validate the form against the constraints
        var errors = validate(form, constraints);
        // then we update the form to reflect the results
        showErrors(form, errors || {});
        if (!errors) {
          showSuccess();
        }
      }
        function showSuccess() {
        // Action to execute if the form is valid.
        alert("Formulario enviado!");
        }

        function showErrors(form, errors) {
        // We loop through all the inputs and show the errors for that input
        _.each(form.querySelectorAll("input[name], select[name]"), function(input) {
                // Since the errors can be null if no errors were found we need to handle that
                showErrorsForInput(input, errors && errors[input.name]);
            });
        }

        // Function that shows the errors for a specific input
        function showErrorsForInput(input, errors) {
            // This is the root of the input
            var formGroup = closestParent(input.parentNode, "form-group")
            // Find where the error messages will be insert into
            , messages = formGroup.querySelector(".messages");
            // First we remove any old messages and resets the classes
            resetFormGroup(formGroup);
            // If we have errors
            if (errors) {
            // we first mark the group has having errors
            formGroup.classList.add("has-error");
            // then we append all the errors
            _.each(errors, function(error) {
                addError(messages, error);
            });
            } else {
            // otherwise we simply mark it as success
            formGroup.classList.add("has-success");
            }
        }
}