export function plusMinusButton() {

    const stockButtons = document.querySelectorAll('.stock-button');
    const numberDisplays = document.querySelectorAll('.number-display');

    stockButtons.forEach(stockButton => {
        stockButton.addEventListener ('click', () => {
            stockButton.classList.add('active')
            
            if (stockButton.dataset.stockButtonValue == "+") {
                plusButtonIncrease();
            }

            if (stockButton.dataset.stockButtonValue == "-") {
                minusButtonDecrease()
            }
        })
    });

    function plusButtonIncrease() {
        numberDisplays.forEach(numberDisplay => {
            numberDisplay.value++;
        });
    }

    function minusButtonDecrease() {
        for (let i = 0; i < numberDisplays; i++) {
            numberDisplays.value++;
        }
        numberDisplays.forEach(numberDisplay => {
            numberDisplay.value--;

            if (numberDisplay.value < 0) {
                numberDisplay.value = 0;
            };
        });
    }
    stockButtons.forEach(stockButton => {
        console.log(stockButton.dataset.stockButtonValue); 
    });
}