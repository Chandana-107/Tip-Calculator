window.onload = () => {
    // Cache DOM elements
    const amountInput = document.querySelector('#amount');
    const personsInput = document.querySelector('#persons');
    const serviceSelect = document.querySelector('#services');
    const calculateBtn = document.querySelector('#calculate');
    const resetBtn = document.querySelector('#reset');
    const tipDiv = document.querySelector('.tip');
    const totalSpan = document.querySelector('#total');
    const eachSpan = document.querySelector('#each');

    const amountError = document.querySelector('#amount-error');
    const personsError = document.querySelector('#persons-error');
    const serviceError = document.querySelector('#service-error');

    // Clear error messages
    function clearErrors() {
        amountError.textContent = '';
        personsError.textContent = '';
        serviceError.textContent = '';
    }

    // Validate inputs and return true if valid, else false
    function validateInputs() {
        clearErrors();
        let valid = true;

        const amount = parseFloat(amountInput.value);
        const persons = parseInt(personsInput.value);
        const service = serviceSelect.value;

        if (isNaN(amount) || amount <= 0) {
            amountError.textContent = 'Please enter a valid positive amount';
            valid = false;
        }
        if (service === '' || service === null) {
            serviceError.textContent = 'Please select a service quality';
            valid = false;
        }
        if (isNaN(persons) || persons <= 0) {
            personsError.textContent = 'Please enter a valid number of persons';
            valid = false;
        }

        return valid;
    }

    // Calculate tip and update UI
    function calculateTip() {
        if (!validateInputs()) {
            tipDiv.style.display = 'none';
            return;
        }

        const amount = parseFloat(amountInput.value);
        const persons = parseInt(personsInput.value);
        const service = parseFloat(serviceSelect.value);

        let total = (amount * service) / persons;
        total = total.toFixed(2);

        if (persons === 1) {
            eachSpan.style.display = 'none';
        } else {
            eachSpan.style.display = 'inline';
        }

        totalSpan.textContent = total;
        tipDiv.style.display = 'block';
    }

    // Reset form and UI
    function resetForm() {
        amountInput.value = '';
        personsInput.value = '';
        serviceSelect.value = '';
        clearErrors();
        tipDiv.style.display = 'none';
    }

    calculateBtn.addEventListener('click', calculateTip);
    resetBtn.addEventListener('click', resetForm);
};
