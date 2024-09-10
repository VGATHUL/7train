document.addEventListener('DOMContentLoaded', () => {
    const addPassengerBtn = document.querySelector('.add-passenger');
    let passengerCount = 1;

    addPassengerBtn.addEventListener('click', () => {
        passengerCount++;
        const newPassenger = document.createElement('div');
        newPassenger.classList.add('passenger');
        newPassenger.id = `passenger${passengerCount}`;
        newPassenger.innerHTML = `
            <input type="text" name="passengerName[]" placeholder="Name" required>
            <input type="number" name="passengerAge[]" placeholder="Age" required>
            <select name="passengerGender[]" required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button type="button" class="remove-passenger">-</button>
        `;
        document.getElementById('passengerContainer').appendChild(newPassenger);

        const removeBtns = document.querySelectorAll('.remove-passenger');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
            });
        });
    });

    // Mobile number validation
    document.getElementById('mobile').addEventListener('input', (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^\d]/g, ''); // Remove any non-digit characters
    });
    
});
