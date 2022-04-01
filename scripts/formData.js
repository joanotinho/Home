export function formData() {

    const submitButton = document.getElementById('submit');

    if (submitButton) {

        const forms = document.querySelectorAll('#form');

        forms.forEach(form => {

            submitButton.addEventListener('click', (e) => {

                e.preventDefault();

                let formData = new FormData(form);

                if (ckeditors != 'null'){

                    Object.entries(ckeditors).forEach(([key, value]) => {
                        formData.append(key, value.getData());
                    });

                    for(var pair of formData.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                    }
                }
            });
        });
    }
}