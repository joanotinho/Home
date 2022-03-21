export function productDescription() {
    const tabs = document.querySelectorAll('.tab')
    const tabContents = document.querySelectorAll('.tab-content')

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {

            tabContents.forEach(tabContent => {

                tabContent.classList.remove('active');

                if(tab.dataset.tabTarget == tabContent.dataset.tabContent){
                    tab.classList.add('active');
                    tabContent.classList.add('active');
                } 
            });
        })
    })
}