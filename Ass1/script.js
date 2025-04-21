document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const tableContainer = document.getElementById('tableContainer');
    const userTable = document.getElementById('userTable').querySelector('tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            const userData = {
                name: form.name.value,
                email: form.email.value,
                mobile: form.mobileno.value,
                address: form.address.value,
                city: form.city.value,
                gender: form.gender.value,
                education: form.education.value
            };
            addUserToTable(userData);
            form.reset();
        }
    });

    function validateForm() {
        const mobileInput = document.getElementById('mobileno');
        const mobileAlert = document.getElementById('mobileAlert');
        const mobilePattern = /^\d{10}$/;

        if (!mobilePattern.test(mobileInput.value)) {
            mobileAlert.textContent = 'Mobile number must be exactly 10 digits.';
            return false;
        } else {
            mobileAlert.textContent = '';
        }

        return true;
    }

    function addUserToTable(user) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.address}</td>
            <td>${user.city}</td>
            <td>${user.gender}</td>
            <td>${user.education}</td>
        `;
        userTable.appendChild(row);
        tableContainer.style.display = 'block';
    }
});
