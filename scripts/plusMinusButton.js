export function plusMinusButton() {
    const plusButtons = document.querySelectorAll('.plus-button');
    const minusButtons = document.querySelectorAll('.minus-button');
    const numberDisplays = document.querySelectorAll('.number-display');

    if (plusButtons != null) {
        plusButtons.forEach(plusButton => {
            plusButton.addEventListener('click', () => {
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
    }

}