export function productDescription() {
    const tabs = document.querySelectorAll('.tab');
    const tabsContent = document.querySelector('.tab-content');

    const tab1 = document.getElementById('tab-1');
    const tab2 = document.getElementById('tab-2');
    const tab3 = document.getElementById('tab-3');

    const tabContent1 = document.getElementById('tab-content-1');
    const tabContent2 = document.getElementById('tab-content-2');
    const tabContent3 = document.getElementById('tab-content-3');

    tab1.addEventListener('click', () => {
        tabContent1.classList.add('active');
        tabContent2.classList.remove('active');
        tabContent3.classList.remove('active');
        tab1.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
    })

    tab2.addEventListener('click', () => {
        tabContent2.classList.add('active');
        tabContent1.classList.remove('active');
        tabContent3.classList.remove('active');
        tab2.classList.add('active');
        tab1.classList.remove('active');
        tab3.classList.remove('active');
    });
    tab3.addEventListener('click', () => {
        tabContent3.classList.add('active');
        tabContent1.classList.remove('active');
        tabContent2.classList.remove('active');
        tab3.classList.add('active');
        tab1.classList.remove('active');
        tab2.classList.remove('active');
    });
}