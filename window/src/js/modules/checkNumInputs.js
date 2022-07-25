const checkNumInputs = (selector) => {
    const checkInputs = document.querySelectorAll(selector);
    checkInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;